import { createFileRoute } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({ component: Index });

const capabilities = [
  ["01","Advertising & Communications","Integrated communication thinking for brand presence, campaign direction and market-facing messages."],
  ["02","Market Research","Research frameworks that clarify audience, context and the signals that matter before communication decisions are made."],
  ["03","Communications Consulting","Strategic advisory for communication structure, messaging priorities and practical routes from intent to execution."],
  ["04","Events & Trade Promotion","Communication-led support for events, commercial activation and trade-promotion touchpoints."],
  ["05","Creative Design","Visual systems and specialized design that translate strategy into coherent, recognizable brand expression."],
];

const legalFacts = [
  ["Legal name","CÔNG TY CỔ PHẦN TRUYỀN THÔNG ĐA PHƯƠNG TIỆN HTL 16666 VIỆT NAM"],
  ["International name","HTL 16666 VIET NAM MULTIMEDIA COMMUNICATIONS JOINT STOCK COMPANY"],
  ["Short name","CÔNG TY CP TRUYỀN THÔNG ĐA PHƯƠNG TIỆN HTL 16666 VIỆT NAM"],
  ["Tax code","0111056424"],["Status","Active"],["Legal representative","HOÀNG THANH TÙNG"],
  ["Telephone","0828716666"],["Email","support@mr16666.com"],["Operation date","19 August 2020"],
  ["Tax authority","Tax Authority Branch 11, Hanoi"],["Enterprise type","Non-state joint stock company"],
  ["Primary business line","Advertising"],
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

const schema = {
  "@context":"https://schema.org","@type":"Organization",
  name:"HTL 16666 Media",
  legalName:"CÔNG TY CỔ PHẦN TRUYỀN THÔNG ĐA PHƯƠNG TIỆN HTL 16666 VIỆT NAM",
  alternateName:"HTL 16666 VIET NAM MULTIMEDIA COMMUNICATIONS JOINT STOCK COMPANY",
  taxID:"0111056424",email:"support@mr16666.com",telephone:"+84 828 716 666",foundingDate:"2025-08-19",
  address:{"@type":"PostalAddress",streetAddress:"72A Tinh Quang Street, Giang Bien Ward, Long Bien District",addressLocality:"Hanoi",addressCountry:"VN"},
  areaServed:"Vietnam",
  knowsAbout:["Advertising","Communications","Market research","Communications consulting","Events","Trade promotion","Creative design"],
};

function Index() {
  return <main className="site-shell">
    <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" />
    <header className="site-header">
      <a className="brand-lockup" href="#company" aria-label="HTL 16666 Media home">
        <img alt="" className="brand-mark" src="/assets/brand/htl16666-mark.svg" />
        <span>HTL 16666 Media</span>
      </a>
      <nav aria-label="Primary navigation"><a href="#capabilities">Capabilities</a><a href="#registry">Registry</a><a href="#contact">Contact</a></nav>
    </header>

    <section className="journey-shell">
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <div className="journey-index" aria-hidden="true"><span>ENTITY</span><span>INSIGHT</span><span>CREATIVE</span><span>ACTIVATION</span><span>CONTACT</span></div>
    </section>

    <section className="authority-strip" aria-label="Company authority summary">
      <div><small>Tax code</small><strong>0111056424</strong></div>
      <div><small>Status</small><strong>Active</strong></div>
      <div><small>Primary line</small><strong>Advertising</strong></div>
      <div><small>Established</small><strong>2025</strong></div>
    </section>

    <section className="intro section-pad">
      <p className="eyebrow">One company. One accountable identity.</p>
      <div className="intro-grid">
        <h2>Communication built on clarity before visibility.</h2>
        <div><p>HTL 16666 Media combines corporate discipline with creative communication. The company focuses on advertising and communications, market research, communications consulting, events and trade promotion, and creative design.</p><p>This site presents one legal entity, one focused service architecture and direct company information without invented project claims.</p></div>
      </div>
    </section>

    <section className="capabilities section-pad" id="capabilities">
      <div className="section-top"><p className="eyebrow">Capabilities</p><span>Five connected communication disciplines.</span></div>
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
        <a href="#contact">Verify through direct contact</a>
      </div>
      <dl>{legalFacts.map(([l,v])=><div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}
        <div><dt>Tax registration address</dt><dd>72A Tinh Quang Street, Viet Hung Ward, Hanoi, Vietnam</dd></div>
        <div><dt>Business address</dt><dd>72A Tinh Quang Street, Giang Bien Ward, Long Bien District, Hanoi, Vietnam</dd></div>
        <div><dt>Tax information updated</dt><dd>06 October 2026, 14:58:08</dd></div>
      </dl>
    </section>

    <section className="activities section-pad">
      <div className="activities-head"><p className="eyebrow">Registered activities</p><h2>Full operating scope.</h2></div>
      <div className="activity-grid">{activities.map(([c,a])=><div key={c}><span>{c}</span><p>{a}</p></div>)}</div>
    </section>

    <section className="contact" id="contact">
      <div className="contact-top"><span>HTL 16666 MEDIA</span><span>HANOI · VIETNAM</span></div>
      <h2>Start with a clear conversation.</h2>
      <div className="contact-actions">
        <a className="email" href="mailto:support@mr16666.com"><span>Email</span><strong>support@mr16666.com</strong></a>
        <a className="phone" href="tel:+84828716666"><span>Call</span><strong>0828 716 666</strong></a>
      </div>
      <div className="contact-address"><span>Business address</span><p>72A Tinh Quang Street, Giang Bien Ward, Long Bien District, Hanoi, Vietnam</p></div>
    </section>

    <footer>
      <div><strong>HTL 16666 Media</strong><p>HTL 16666 VIET NAM MULTIMEDIA COMMUNICATIONS JOINT STOCK COMPANY</p></div>
      <div><span>Tax code 0111056424</span><span>Legal representative: HOÀNG THANH TÙNG</span><span>Status: Active</span></div>
      <p>© 2026 HTL 16666 Media. Corporate information presented for entity identification and communications purposes.</p>
    </footer>
  </main>;
}
