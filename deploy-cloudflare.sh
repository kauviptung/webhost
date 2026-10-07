#!/usr/bin/env bash
set -euo pipefail
bun install
bun run build
bunx wrangler@latest deploy --config wrangler.selfhost.jsonc
