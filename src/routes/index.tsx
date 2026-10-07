import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { company, internalWork, organizationJsonLd, pageHead, products } from "@/company";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", company.brandName, "HTL 16666 Media is a communications and technology company in Hanoi — advertising, research and events, plus software products built in-house."),
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
      <div className="journey-index" aria-hidden="true"><span>ENTITY</span><span>PRODUCT</span><span>INSIGHT</span><span>CREATIVE</span><span>CONTACT</span></div>
    </section>

    <section className="authority-strip" aria-label="Company summary">
      <div><small>Tax code</small><strong>{company.taxId}</strong></div>
      <div><small>Status</small><strong>{company.status}</strong></div>
      <div><small>Primary line</small><strong>{company.primaryBusinessLine}</strong></div>
      <div><small>Founded</small><strong>May 2025</strong></div>
    </section>

    <section className="intro section-pad">
      <p className="eyebrow">Communications and technology</p>
      <div className="intro-grid">
        <h2>A Hanoi company building its own software.</h2>
        <div>
          <p>HTL 16666 is a communications and technology company based in Hanoi. The company runs an existing communications business — advertising, market research, consulting, events and creative design — and builds software products on top of it.</p>
          <p>Everything public-facing is built in-house: this website is a server-rendered React/TypeScript application deployed on Vercel, and its film and artwork are produced with AI generation tooling.</p>
        </div>
      </div>
    </section>

    <section className="capabilities section-pad" id="products">
      <div className="section-top"><p className="eyebrow">Products</p><span>Software built in-house.</span></div>
      <div className="cap-list">
        {products.map((p, i) => (
          <article key={p.name}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.name}</h3>
            <p>{p.problem} {p.status}.</p>
          </article>
        ))}
        {internalWork.map((w, i) => (
          <article key={w.name}>
            <span>R&{String(i + 1)}</span>
            <h3>{w.name}</h3>
            <p>{w.problem} {w.status}.</p>
          </article>
        ))}
      </div>
      <p className="section-top section-top--end"><Link to="/products">Products and research</Link></p>
    </section>

    <section className="intro section-pad" id="ai">
      <p className="eyebrow">How we work</p>
      <div className="intro-grid">
        <h2>AI is part of the workflow.</h2>
        <div>
          <p>We use AI tools for media production, software development and selected internal research workflows. The film in the hero above is AI-generated, and this codebase is developed with AI coding agents.</p>
          <p>On the roadmap: language-model tooling for research synthesis, drafting and Vietnamese–English translation inside our communications work.</p>
        </div>
      </div>
    </section>

    <section className="capabilities section-pad" id="capabilities">
      <div className="section-top"><p className="eyebrow">Capabilities</p><span>Communications remains our operating foundation.</span></div>
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
      <div className="contact-address"><span>Company profile</span><p><Link to="/about" style={{ color: "inherit" }}>Legal identity and company record</Link></p></div>
    </section>

    <SiteFooter />
  </main>;
}
