import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { internalWork, pageHead, softwareAreas } from "@/company";

export const Route = createFileRoute("/products")({
  head: () => pageHead("/products", "Software", "Software HTL 16666 Media builds and operates: CRM and business operations, social automation, and web platforms."),
  component: Products,
});

function Area({ item }: { item: (typeof softwareAreas)[number] | (typeof internalWork)[number] }) {
  return <article>
    <div>
      <h3>{item.name}</h3>
      <span className="status">{item.status}</span>
    </div>
    <dl>
      <div><dt>What it is</dt><dd>{item.summary}</dd></div>
      <div><dt>Who it serves</dt><dd>{item.users}</dd></div>
      {item.capabilities.length > 0 ? (
        <div><dt>Capability areas</dt><dd>{item.capabilities.join(" · ")}</dd></div>
      ) : null}
    </dl>
  </article>;
}

function Products() {
  return <main className="site-shell">
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">Software</p>
      <h1>What we build and operate.</h1>
      <p>Customer implementations and internal repositories are private; public descriptions focus on product capabilities rather than customer data or deployment details.</p>
    </header>

    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="product-list">
        {softwareAreas.map((s) => <Area key={s.name} item={s} />)}
      </div>
    </section>

    <section className="activities section-pad">
      <div className="activities-head"><p className="eyebrow">Research & internal tooling</p><h2>In the lab.</h2></div>
      <div className="product-list">
        {internalWork.map((w) => <Area key={w.name} item={w} />)}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
