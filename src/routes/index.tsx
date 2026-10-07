import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { company, organizationJsonLd, pageHead, products } from "@/company";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", company.brandName, "HTL 16666 Media is a Hanoi joint-stock company building software products and AI-assisted tooling alongside its communications business."),
  component: Index,
});

const legalFacts = [
  ["Legal name", company.legalName],
  ["International name", company.internationalName],
  ["Short name", company.shortName],
  ["Tax code", company.taxId],
  ["Status", company.status],
  ["Legal representative", company.legalRepresentative],
  ["Telephone", company.phone],
  ["Email", company.email],
  ["Operation date", company.foundingDateDisplay],
  ["Tax authority", company.taxAuthority],
  ["Enterprise type", company.enterpriseType],
  ["Primary business line", company.primaryBusinessLine],
];

const capabilities = [
  ["01","Advertising & Communications","Integrated communication thinking for brand presence, campaign direction and market-facing messages."],
  ["02","Market Research","Research frameworks that clarify audience, context and the signals that matter before communication decisions are made."],
  ["03","Communications Consulting","Strategic advisory for communication structure, messaging priorities and practical routes from intent to execution."],
  ["04","Events & Trade Promotion","Communication-led support for events, commercial activation and trade-promotion touchpoints."],
  ["05","Creative Design","Visual systems and specialized design that translate strategy into coherent, recognizable brand expression."],
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

function Index() {
  return <main className="site-shell">
    <StructuredData json={organizationJsonLd} />
    <SiteHeader />

    <section className="journey-shell">
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <div className="journey-index" aria-hidden="true"><span>ENTITY</span><span>PRODUCT</span><span>INSIGHT</span><span>CREATIVE</span><span>CONTACT</span></div>
    </section>

    <section className="authority-strip" aria-label="Company authority summary">
      <div><small>Tax code</small><strong>{company.taxId}</strong></div>
      <div><small>Status</small><strong>{company.status}</strong></div>
      <div><small>Primary line</small><strong>{company.primaryBusinessLine}</strong></div>
      <div><small>Founded</small><strong>May 2025</strong></div>
    </section>

    <section className="intro section-pad">
      <p className="eyebrow">A young company that ships.</p>
      <div className="intro-grid">
        <h2>Software products, built on a communications foundation.</h2>
        <div>
          <p>HTL 16666 Media is a Vietnamese joint-stock company founded in May 2025. The company runs an existing communications business — advertising, market research, consulting, events and creative design — and builds software products on top of it.</p>
          <p>Everything public-facing is built in-house: this website is a server-rendered React application whose media was generated with AI tooling and whose code is developed with AI coding agents.</p>
        </div>
      </div>
    </section>

    <section className="capabilities section-pad" id="products">
      <div className="section-top"><p className="eyebrow">Products</p><span>What the company is building now.</span></div>
      <div className="cap-list">
        {products.map((p, i) => (
          <article key={p.name}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.name}</h3>
            <p>{p.problem} Status: {p.status}.</p>
          </article>
        ))}
      </div>
      <p className="section-top section-top--end"><Link to="/products">See product details</Link></p>
    </section>

    <section className="intro section-pad" id="ai">
      <p className="eyebrow">How we build with AI</p>
      <div className="intro-grid">
        <h2>AI is how the work gets made, not just a label.</h2>
        <div>
          <p>The film in the hero above is AI-generated. This codebase is developed with AI coding agents. The next step is language-model tooling inside our communications work — research synthesis, drafting and Vietnamese–English translation.</p>
          <p>For those workloads we are evaluating foundation-model APIs, including the Claude API. No production integration or partnership is claimed; the roadmap is stated plainly.</p>
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

    <section className="registry section-pad" id="registry">
      <div className="registry-lead">
        <p className="eyebrow">Company registry</p>
        <h2>Credibility should be verifiable.</h2>
        <p>Legal and operating information is presented as company identification, not as a marketing claim. The tax-registration and business addresses are shown separately because they were supplied as different records.</p>
        <Link to="/about">Full company profile</Link>
      </div>
      <dl>{legalFacts.map(([l,v])=><div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}
        <div><dt>Tax registration address</dt><dd>{company.taxAddress}</dd></div>
        <div><dt>Business address</dt><dd>{company.businessAddress}</dd></div>
      </dl>
    </section>

    <section className="activities section-pad">
      <div className="activities-head"><p className="eyebrow">Registered activities</p><h2>Full operating scope.</h2></div>
      <div className="activity-grid">{activities.map(([c,a])=><div key={c}><span>{c}</span><p>{a}</p></div>)}</div>
    </section>

    <section className="contact" id="contact">
      <div className="contact-top"><span>{company.brandName.toUpperCase()}</span><span>HANOI · VIETNAM</span></div>
      <h2>Start with a clear conversation.</h2>
      <div className="contact-actions">
        <a className="email" href={`mailto:${company.email}`}><span>Email</span><strong>{company.email}</strong></a>
        <a className="phone" href={`tel:${company.phoneIntl.replace(/\s/g, "")}`}><span>Call</span><strong>{company.phoneIntl.replace("+84 ", "0")}</strong></a>
      </div>
      <div className="contact-address"><span>Business address</span><p>{company.businessAddress}</p></div>
    </section>

    <SiteFooter />
  </main>;
}
