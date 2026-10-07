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

const activities = [
  ["1811","Printing"],["1812","Services related to printing"],
  ["4610","Agents, brokers and auction activities, including sales agency and goods brokerage"],
  ["4659","Wholesale of other machinery, equipment and parts, including sound, lighting and event equipment"],
  ["4690","Non-specialized wholesale trade, subject to statutory exclusions"],
  ["4773","Retail sale of other new goods in specialized stores, subject to statutory exclusions"],
  ["4791","Retail sale via mail order houses or via Internet, subject to statutory exclusions"],
  ["5911","Motion picture, video and television programme production activities"],
  ["5912","Motion picture, video and television programme post-production activities"],
  ["5913","Motion picture, video and television programme distribution activities"],
  ["5920","Sound recording and music publishing activities"],
  ["6612","Commodity contracts brokerage"],
  ["7020","Management consultancy activities, excluding regulated finance, accounting and legal consultancy"],
  ["7310","Advertising"],
  ["7320","Market research and public opinion polling"],
  ["7410","Specialized design activities"],
  ["7420","Photographic activities, excluding press photography"],
  ["7490","Other professional, scientific and technical activities, subject to statutory exclusions"],
  ["8230","Organization of conventions, trade shows and trade promotion, subject to safety restrictions"],
  ["8299","Other business support service activities n.e.c., subject to statutory exclusions"],
  ["9000","Creative, arts and entertainment activities"],
];

function About() {
  return <main className="site-shell">
    <StructuredData json={organizationJsonLd} />
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">About</p>
      <h1>The company.</h1>
      <p>{company.brandName} is the public face of {company.legalName} — a Hanoi-based joint-stock company operating since {company.foundingDateDisplay}.</p>
    </header>

    <section className="intro section-pad">
      <div className="intro-grid">
        <h2>From communications work to software.</h2>
        <div>
          <p>The company has operated since May 2025, with advertising as its registered primary business line, within a broad communications scope: market research, consulting, events, trade promotion and creative design.</p>
          <p>Alongside that business it builds software for business operations, communications and automation: CRM and business-operations systems, social media automation, and web platforms. Most implementations run privately on internal or customer data; the public site itself is built in-house on a server-rendered React/TypeScript stack.</p>
        </div>
      </div>
    </section>

    <section className="registry section-pad" id="registry">
      <div className="registry-lead">
        <p className="eyebrow">Legal identity</p>
        <h2>Company information.</h2>
        <p>Registration details as recorded for tax code {company.taxId}.</p>
      </div>
      <dl>{facts.map(([l,v])=><div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}</dl>
    </section>

    <section className="activities section-pad">
      <div className="activities-head"><p className="eyebrow">Registered activities</p><h2>Full operating scope.</h2></div>
      <div className="activity-grid">{activities.map(([c,a])=><div key={c}><span>{c}</span><p>{a}</p></div>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
