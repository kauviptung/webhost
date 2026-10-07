// Single source of truth for public company identity. Every page, the JSON-LD
// Organization block, sitemap and /llms.txt read from here — never restate
// these fields elsewhere.
//
// Facts are normalized against the public tax record
// (masothue.com/0111056424). The record's "Ngày hoạt động" is 2025-05-19 —
// i.e. 19 May 2025, NOT 19 August 2025 as a previous version of the site
// displayed. Both registered addresses are kept with explicit labels because
// the record lists them separately.

export const company = {
  brandName: "HTL 16666 Media",
  legalName: "CÔNG TY CỔ PHẦN TRUYỀN THÔNG ĐA PHƯƠNG TIỆN HTL 16666 VIỆT NAM",
  internationalName:
    "HTL 16666 VIET NAM MULTIMEDIA COMMUNICATIONS JOINT STOCK COMPANY",
  shortName: "CÔNG TY CP TRUYỀN THÔNG ĐA PHƯƠNG TIỆN HTL 16666 VIỆT NAM",
  taxId: "0111056424",
  status: "Active",
  foundingDate: "2025-05-19",
  foundingDateDisplay: "19 May 2025",
  legalRepresentative: "HOÀNG THANH TÙNG",
  phone: "0828716666",
  phoneIntl: "+84 828 716 666",
  email: "support@mr16666.com",
  domain: "mr16666.com",
  url: "https://mr16666.com",
  taxAddress: "72A Tinh Quang Street, Viet Hung Ward, Hanoi, Vietnam",
  businessAddress:
    "72A Tinh Quang Street, Giang Bien Ward, Long Bien District, Hanoi, Vietnam",
  taxAuthority: "Tax Authority Branch 11, Hanoi",
  enterpriseType: "Non-state joint stock company",
  primaryBusinessLine: "Advertising",
} as const;

export function canonicalUrl(path: string): string {
  return company.url + (path === "/" ? "/" : path);
}

// Per-route head helper: canonical link + page-specific title/description/OG.
// Global meta (charset, viewport, favicon, site-wide OG) stays in __root.tsx.
export function pageHead(path: string, title: string, description: string) {
  const fullTitle = title === company.brandName ? title : `${title} — ${company.brandName}`;
  const url = canonicalUrl(path);
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brandName,
  legalName: company.legalName,
  alternateName: company.internationalName,
  url: company.url,
  email: company.email,
  telephone: company.phoneIntl,
  taxID: company.taxId,
  foundingDate: company.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: "72A Tinh Quang Street, Giang Bien Ward, Long Bien District",
    addressLocality: "Hanoi",
    addressCountry: "VN",
  },
  areaServed: "Vietnam",
  knowsAbout: [
    "Software development",
    "Applied AI tooling",
    "Advertising",
    "Communications",
    "Market research",
    "Communications consulting",
    "Events",
    "Trade promotion",
    "Creative design",
  ],
});

// Public product/activity description. Statuses are stated plainly — nothing
// here claims customers, revenue, funding, partners or production usage.
export const products = [
  {
    name: "mr16666.com — self-hosted company platform",
    status: "Live",
    problem:
      "The company needs a verifiable public identity and a direct channel it controls end to end, rather than a borrowed social profile.",
    user: "The company itself; it doubles as the reference implementation for client-facing brand sites.",
    detail:
      "A server-rendered React/TypeScript application on our own deployment pipeline, with brand media produced through AI generation tooling.",
    ai: "The homepage film and cover media are AI-generated, and the codebase is built and maintained with AI coding agents.",
  },
  {
    name: "Signal Sites — scroll-driven brand sites",
    status: "In development",
    problem:
      "Corporate communications pages rarely hold attention; a scroll-scrubbed cinematic format carries a brand narrative better than a static brochure.",
    user: "Communications and brand teams.",
    detail:
      "A repeatable site format pairing a generated film with synchronized chapters. This website is the working reference implementation of the format.",
    ai: "Generated media pipeline plus AI-assisted engineering.",
  },
  {
    name: "Language-model tooling for communications work",
    status: "Early exploration",
    problem:
      "Research synthesis, bilingual Vietnamese–English drafting and brief preparation are the most time-heavy parts of our communications work.",
    user: "The company's own communications workflow first.",
    detail:
      "Internal tooling that applies language-model APIs to summarization, drafting and translation tasks.",
    ai: "We are evaluating foundation-model APIs — including the Claude API — for these tasks. No production integration is claimed yet.",
  },
] as const;
