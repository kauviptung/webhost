import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { internalWork, pageHead, products } from "@/company";

export const Route = createFileRoute("/products")({
  head: () => pageHead("/products", "Products", "Software and internal tooling at HTL 16666 Media — what each does, who it is for, and where AI is used."),
  component: Products,
});

function WorkItem({ item }: { item: (typeof products)[number] | (typeof internalWork)[number] }) {
  return <article>
    <div>
      <h3>{item.name}</h3>
      <span className="status">{item.status}</span>
    </div>
    <dl>
      <div><dt>Problem</dt><dd>{item.problem}</dd></div>
      <div><dt>Who it is for</dt><dd>{item.user}</dd></div>
      <div><dt>What it does today</dt><dd>{item.detail}</dd></div>
      <div><dt>Where software / AI is used</dt><dd>{item.ai}</dd></div>
    </dl>
  </article>;
}

function Products() {
  return <main className="site-shell">
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">Products</p>
      <h1>What we are building.</h1>
      <p>Current products and internal tools at HTL 16666 Media.</p>
    </header>

    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="product-list">
        {products.map((p) => <WorkItem key={p.name} item={p} />)}
      </div>
    </section>

    <section className="activities section-pad">
      <div className="activities-head"><p className="eyebrow">Research & internal tooling</p><h2>Work in progress.</h2></div>
      <div className="product-list">
        {internalWork.map((w) => <WorkItem key={w.name} item={w} />)}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
