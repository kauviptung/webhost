import { createFileRoute } from "@tanstack/react-router";
import { company, products } from "../company";

// Agent-facing site summary (https://llmstxt.org). Company facts come from
// src/company.ts — update them there, not here.
const body = [
  `# ${company.brandName}`,
  "",
  `> ${company.brandName} is the public site of ${company.internationalName} — a Hanoi-based joint-stock company building software and AI-assisted products alongside its communications business (advertising, market research, consulting, events, creative design).`,
  "",
  "## Company facts",
  "",
  `- Legal name: ${company.legalName}`,
  `- International name: ${company.internationalName}`,
  `- Tax code: ${company.taxId}`,
  `- Status: ${company.status}`,
  `- Founded: ${company.foundingDate} (${company.foundingDateDisplay})`,
  `- Legal representative: ${company.legalRepresentative}`,
  `- Business address: ${company.businessAddress}`,
  `- Tax registration address: ${company.taxAddress}`,
  `- Email: ${company.email}`,
  `- Telephone: ${company.phoneIntl}`,
  "",
  "## Products",
  "",
  ...products.flatMap((p) => [`- **${p.name}** (${p.status}) — ${p.problem}`]),
  "",
  "The company uses AI tooling in media production and software development, and builds language-model tooling for internal communications workflows.",
  "",
  "## Pages",
  "",
  "- [Home](/)",
  "- [Products](/products)",
  "- [About / legal identity](/about)",
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
