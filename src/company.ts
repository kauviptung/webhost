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
    "Agent runtimes",
    "MCP",
    "Developer tools",
    "AI agent infrastructure",
    "Research infrastructure",
    "Multi-provider search",
    "Academic research tools",
    "Advertising",
    "Communications",
    "Market research",
    "Communications consulting",
    "Events",
    "Trade promotion",
    "Creative design",
  ],
});

// Public products — things anyone can inspect or try.
export const products = [
  {
    name: "AgentRT",
    kind: "Open-source agent runtime",
    status: "Open source · Active development",
    summary:
      "An MCP runtime that extends Claude Code with persistent, parallel background sub-agents.",
    users: "Developers who need long-running parallel agent workers.",
    capabilities: [
      "Persistent sessions",
      "Parallel workers",
      "Isolated workspaces and worktrees",
      "Artifacts and transcripts",
      "Recovery and control",
      "BYOK / OpenAI-compatible endpoints",
    ],
    link: "https://github.com/ducanh8888/agent_runtime",
    linkLabel: "GitHub repository",
    note: "Claude remains the orchestrator; AgentRT runs and manages persistent worker sessions. AgentRT is developed and maintained by HTL 16666.",
  },
  {
    name: "Research MCP",
    kind: "Open-source research infrastructure",
    status: "Open source · Active development",
    summary:
      "A multi-provider research gateway that gives AI agents one MCP interface to web, academic and specialist research sources.",
    users: "Developers and AI agents that need evidence from multiple research sources.",
    capabilities: [
      "Multi-provider research",
      "Concurrent source retrieval",
      "Provenance preservation",
      "Conservative deduplication",
      "RRF result fusion",
      "Web and academic research",
      "Developer and repository search",
    ],
    link: "https://github.com/ducanh8888/research-mcp-engine",
    linkLabel: "GitHub repository",
    note: "Research MCP is developed and maintained by HTL 16666 Media.",
  },
] as const;

// Software categories the company builds and operates. Implementations,
// repositories, customer data and deployments are private; descriptions stay
// at capability level by design.
export const softwareAreas = [
  {
    name: "CRM & Business Operations",
    status: "Active development; private deployments",
    summary:
      "Software for sales analytics, customer and contact records, staff workflows, expense approval and reporting — with read-only POS/ERP integration patterns.",
    users: "Internal operations and business customers.",
    capabilities: [
      "Sales analytics",
      "Customer and contact records",
      "Staff workflows",
      "Expense approval",
      "Reporting",
      "Read-only POS/ERP integration patterns",
    ],
    link: "https://demo.ducanh.cloud/",
    linkLabel: "Open public demo",
    note: "The demo uses simulated data and does not expose customer systems or production data.",
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
    link: null,
    linkLabel: null,
    note: null,
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
    link: null,
    linkLabel: null,
    note: null,
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
    capabilities: [] as string[],
    link: null,
    linkLabel: null,
    note: null,
  },
] as const;
