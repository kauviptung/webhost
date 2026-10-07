import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { company, organizationJsonLd, pageHead, softwareAreas } from "@/company";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", company.brandName, "HTL 16666 is a Hanoi-based communications and technology company building CRM, automation and web software alongside its communications business."),
  component: Index,
});

const capabilities = [
  ["01","Advertising & Communications","Integrated communication thinking for brand presence, campaign direction and market-facing messages."],
  ["02","Market Research","Research frameworks that clarify audience, context and the signals that matter before communication decisions are made."],
  ["03","Communications Consulting","Strategic advisory for communication structure, messaging priorities and practical routes from intent to execution."],
  ["04","Events & Trade Promotion","Communication-led support for events, commercial activation and trade-promotion touchpoints."],
  ["05","Creative Design","Visual systems and specialized design that translate strategy into coherent, recognizable brand expression."],
];

function Index() {
  return <main className="site-shell">
    <StructuredData json={organizationJsonLd} />
    <SiteHeader />

    <section className="journey-shell">
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <div className="journey-index" aria-hidden="true"><span>ENTITY</span><span>SOFTWARE</span><span>COMMS</span><span>CREATIVE</span><span>CONTACT</span></div>
    </section>

    <section className="authority-strip" aria-label="Company summary">
      <div><small>Founded</small><strong>2025</strong></div>
      <div><small>Based in</small><strong>Hanoi</strong></div>
      <div><small>Focus</small><strong>Software + Comms</strong></div>
      <div><small>Email</small><strong>{company.email}</strong></div>
    </section>

    <section className="intro section-pad">
      <p className="eyebrow">Communications and technology</p>
      <div className="intro-grid">
        <h2>A Hanoi company building its own software.</h2>
        <div>
          <p>HTL 16666 is a communications and technology company based in Hanoi. The company runs an existing communications business — advertising, market research, consulting, events and creative design — and builds software for business operations, communications and automation on top of it.</p>
          <p>That software work is concrete: CRM and business-operations systems, social media automation, and web platforms — including this site, built and operated by the company itself.</p>
        </div>
      </div>
    </section>

    <section className="capabilities section-pad" id="software">
      <div className="section-top"><p className="eyebrow">Software</p><span>Systems the company builds and operates.</span></div>
      <div className="cap-list">
        {softwareAreas.map((s, i) => (
          <article key={s.name}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.name}</h3>
            <p>{s.summary}</p>
          </article>
        ))}
      </div>
      <p className="section-top section-top--end"><Link to="/products">Software and research</Link></p>
    </section>

    <section className="intro section-pad" id="how-we-work">
      <p className="eyebrow">How we work</p>
      <div className="intro-grid">
        <h2>Software development, automation, and AI where it helps.</h2>
        <div>
          <p>We use AI tools in software development, media production and selected automation and research workflows. The film in the hero above is AI-generated, and this site was built with AI coding agents.</p>
          <p>Most software implementations are private because they operate on internal or customer business data.</p>
        </div>
      </div>
    </section>

    <section className="capabilities section-pad" id="communications">
      <div className="section-top"><p className="eyebrow">Communications</p><span>The business the software serves.</span></div>
      <div className="cap-list">{capabilities.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div>
    </section>

    <section className="signal-plate">
      <img alt="Abstract architectural signal system representing HTL 16666 Media" src="/assets/brand/htl16666-cover.png"/>
      <div><span>THE SIGNAL REGISTRY</span><strong>Research. Direction. Creative. Activation.</strong></div>
    </section>

    <section className="contact" id="contact">
      <div className="contact-top"><span>{company.brandName.toUpperCase()}</span><span>HANOI · VIETNAM</span></div>
      <h2>Start with a clear conversation.</h2>
      <div className="contact-actions">
        <a className="email" href={`mailto:${company.email}`}><span>Email</span><strong>{company.email}</strong></a>
        <a className="phone" href={`tel:${company.phoneIntl.replace(/\s/g, "")}`}><span>Call</span><strong>{company.phoneIntl.replace("+84 ", "0")}</strong></a>
      </div>
      <div className="contact-address"><span>Business address</span><p>{company.businessAddress}</p></div>
      <div className="contact-address"><span>Company</span><p><Link to="/about" style={{ color: "inherit" }}>Company information</Link></p></div>
    </section>

    <SiteFooter />
  </main>;
}
