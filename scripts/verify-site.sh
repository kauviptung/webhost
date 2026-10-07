#!/usr/bin/env bash
# External-verification check for the public site.
# Usage: scripts/verify-site.sh [base-url]   (default: https://mr16666.com)
# Exits non-zero if any check fails. Does not bypass anything — it reports
# blocking configuration (403/429/5xx, bot challenges, redirect loops).
set -u

BASE="${1:-https://mr16666.com}"
BASE="${BASE%/}"
CURL="curl -sS -L --max-redirs 5 --max-time 20"
FAIL=0

ok()   { printf "  PASS  %s\n" "$1"; }
bad()  { printf "  FAIL  %s\n" "$1"; FAIL=1; }

# fetch <path> <ua> -> status + body on stdout. `tr -d '\0'` strips NUL bytes
# that TanStack Start legitimately embeds in its serialized stream payload
# (route match ids) — they confuse grep on some platforms.
fetch() {
  $CURL -A "$2" -w "\n__STATUS__%{http_code}" "$BASE$1" | tr -d '\000'
}

# status_of <response> ; body_of <response>
status_of() { printf '%s' "$1" | sed -n 's/.*__STATUS__//p'; }
body_of()   { printf '%s' "$1" | sed 's/__STATUS__.*//'; }

# check_page <path> <ua> <needle...>
check_page() {
  local path="$1" ua="$2"; shift 2
  local res status body
  res="$(fetch "$path" "$ua")" || { bad "$path ($ua): curl error $res"; return; }
  status="$(status_of "$res")"; body="$(body_of "$res")"
  case "$status" in
    403|429|5*) bad "$path ($ua): HTTP $status"; return ;;
    000)        bad "$path ($ua): unreachable/redirect loop"; return ;;
    2*)         ;;
    *)          bad "$path ($ua): HTTP $status"; return ;;
  esac
  if printf '%s' "$body" | grep -qaE "just a moment|attention required|cf-chl|challenge-platform|vercel authentication|sso.vercel|_vercel_sso"; then
    bad "$path ($ua): bot challenge/auth page detected"; return
  fi
  for needle in "$@"; do
    if ! printf '%s' "$body" | grep -qaF "$needle"; then
      bad "$path ($ua): missing content: $needle"; return
    fi
  done
  ok "$path ($ua): HTTP $status"
}

echo "== $BASE =="

echo "Homepage"
check_page "/" "curl/verify-site" "HTL 16666" "0111056424" "canonical" "mr16666.com"

echo "HTTP -> HTTPS"
if [[ "$BASE" == https://* ]]; then
  code="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 15 "http://${BASE#https://}/" || true)"
  case "$code" in
    301|302|307|308) ok "http redirects ($code)" ;;
    *)               bad "http:// did not redirect (HTTP $code)" ;;
  esac
else
  ok "skipped (base is not https)"
fi

echo "robots.txt / sitemap.xml / llms.txt"
check_page "/robots.txt"  "curl/verify-site" "sitemap"
check_page "/sitemap.xml" "curl/verify-site" "mr16666.com" "/products" "/about" "/contact"
check_page "/llms.txt"    "curl/verify-site" "0111056424"

echo "Public pages"
for p in /products /about /contact /privacy /terms; do
  check_page "$p" "curl/verify-site" "HTL 16666" "0111056424"
done

echo "Bot user agents on /"
for ua in "Googlebot" "ClaudeBot" "bingbot"; do
  check_page "/" "Mozilla/5.0 (compatible; $ua)" "0111056424"
done

echo "Canonical + metadata on /"
res="$(fetch "/" "curl/verify-site")"; body="$(body_of "$res")"
printf '%s' "$body" | grep -qa 'rel="canonical" href="https://mr16666.com/"' && ok "canonical url" || bad "canonical url missing/wrong"
printf '%s' "$body" | grep -qai 'application/ld+json' && ok "JSON-LD present" || bad "JSON-LD missing"
printf '%s' "$body" | grep -qai 'noindex' && bad "noindex present" || ok "no noindex"
printf '%s' "$body" | grep -qai '2025-05-19' && ok "founding date 2025-05-19 in JSON-LD" || bad "founding date missing"

if [ "$FAIL" -ne 0 ]; then
  echo; echo "RESULT: FAIL — see FAIL lines above (fix config, do not bypass)."
  exit 1
fi
echo; echo "RESULT: PASS"
