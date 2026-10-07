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
    "CRM software",
    "Business operations software",
    "Social media automation",
    "Web platforms",
    "Advertising",
    "Communications",
    "Market research",
    "Communications consulting",
    "Events",
    "Trade promotion",
    "Creative design",
  ],
});

// Public software taxonomy — the categories the company actually builds and
// operates. Implementations, repositories, customer data and deployments are
// private; descriptions stay at capability level by design.
export const softwareAreas = [
  {
    name: "CRM & Business Operations",
    status: "Active development; private deployments",
    summary:
      "Software for customer and contact management, sales workflows, operational records and business reporting.",
    users: "Internal operations and business customers.",
    capabilities: [
      "Contact and account management",
      "Sales and pipeline workflows",
      "Operational records",
      "Dashboards and reporting",
      "Workflow automation",
      "Business data integration",
    ],
  },
  {
    name: "Social Automation",
    status: "Active development; private use",
    summary:
      "Automation software for social publishing workflows and content operations.",
    users: "Content and communications operators.",
    capabilities: [
      "Social publishing workflows",
      "Scheduling",
      "Content operations",
      "Multi-step operational workflows",
      "Assisted content processing",
    ],
  },
  {
    name: "Web Platforms",
    status: "In production; private deployments",
    summary:
      "Websites, web applications and interactive brand experiences — including this site, which runs on a scroll-scrub engine built in-house.",
    users: "Clients and the company's own properties.",
    capabilities: [
      "Company and brand websites",
      "Interactive web experiences",
      "Reusable web infrastructure and components",
      "Client and internal web systems",
    ],
  },
] as const;

// Research and internal tooling — work in progress, not products.
export const internalWork = [
  {
    name: "Language-model workflows",
    status: "In exploration",
    summary:
      "Internal tooling applying language-model APIs to research synthesis, drafting and translation tasks inside communications work.",
    users: "The company's own teams.",
    capabilities: [],
  },
] as const;
