import { createFileRoute } from "@tanstack/react-router";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { company, organizationJsonLd, pageHead } from "@/company";

export const Route = createFileRoute("/about")({
  head: () => pageHead("/about", "About", `Legal identity and profile of ${company.brandName} — ${company.internationalName}, tax code ${company.taxId}.`),
  component: About,
});

const facts = [
  ["Vietnamese legal name", company.legalName],
  ["International name", company.internationalName],
  ["Short name", company.shortName],
  ["Tax code", company.taxId],
  ["Status", company.status],
  ["Operation date", company.foundingDateDisplay],
  ["Legal representative", company.legalRepresentative],
  ["Enterprise type", company.enterpriseType],
  ["Primary business line", company.primaryBusinessLine],
  ["Tax authority", company.taxAuthority],
  ["Tax registration address", company.taxAddress],
  ["Business address", company.businessAddress],
  ["Email", company.email],
  ["Telephone", company.phone],
  ["Website", company.domain],
];

function About() {
  return <main className="site-shell">
    <StructuredData json={organizationJsonLd} />
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">About</p>
      <h1>One company, fully on the record.</h1>
      <p>{company.brandName} is the public face of {company.legalName} — a Hanoi-based joint-stock company operating since {company.foundingDateDisplay}.</p>
    </header>

    <section className="intro section-pad">
      <div className="intro-grid">
        <h2>From communications work to software.</h2>
        <div>
          <p>The company was incorporated in May 2025 with advertising as its registered primary business line, within a broad communications scope: market research, consulting, events, trade promotion and creative design.</p>
          <p>From the start, the operating model has been technology-forward: its public properties are built in-house on a self-hosted, server-rendered stack, its media is produced with AI generation tooling, and its codebase is developed with AI coding agents. The direction is software products for the same communications problems the company already understands.</p>
        </div>
      </div>
    </section>

    <section className="registry section-pad" id="registry">
      <div className="registry-lead">
        <p className="eyebrow">Legal identity</p>
        <h2>Verifiable by record.</h2>
        <p>These details match the company's public tax registration record for tax code {company.taxId}.</p>
      </div>
      <dl>{facts.map(([l,v])=><div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}</dl>
    </section>
    <SiteFooter />
  </main>;
}
