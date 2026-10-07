import { createFileRoute } from "@tanstack/react-router";
import { company, internalWork, products, softwareAreas } from "../company";

// Agent-facing site summary (https://llmstxt.org). Company facts come from
// src/company.ts — update them there, not here.
const body = [
  `# ${company.brandName}`,
  "",
  `> ${company.brandName} is a Hanoi-based communications and technology company building software for business operations, communications and automation — alongside an existing communications business.`,
  "",
  "## Company facts",
  "",
  `- Legal name: ${company.legalName}`,
  `- International name: ${company.internationalName}`,
  `- Tax code: ${company.taxId}`,
  `- Status: ${company.status}`,
  `- Operating since: ${company.foundingDate} (${company.foundingDateDisplay})`,
  `- Legal representative: ${company.legalRepresentative}`,
  `- Business address: ${company.businessAddress}`,
  `- Tax registration address: ${company.taxAddress}`,
  `- Email: ${company.email}`,
  `- Telephone: ${company.phoneIntl}`,
  "",
  "## Software",
  "",
  ...products.flatMap((p) => [`- **${p.name}** (${p.status}) — ${p.summary} ${p.link}`]),
  ...softwareAreas.flatMap((s) => [`- **${s.name}** (${s.status}) — ${s.summary}${s.link ? ` Public demo: ${s.link}` : ""}`]),
  "",
  "Customer implementations and internal repositories are private; public descriptions focus on product capabilities rather than customer data or deployment details.",
  "",
  "## Research & internal tooling",
  "",
  ...internalWork.flatMap((w) => [`- **${w.name}** (${w.status}) — ${w.summary}`]),
  "",
  "The company uses AI tools in software development, media production and selected automation and research workflows.",
  "",
  "## Pages",
  "",
  "- [Home](/)",
  "- [Software](/products)",
  "- [About / company information](/about)",
  "- [Contact](/contact)",
  "- [Privacy](/privacy)",
  "- [Terms](/terms)",
  "- [Sitemap](/sitemap.xml)",
  "",
].join("\n");

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(body, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
