import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { pageHead, products } from "@/company";

export const Route = createFileRoute("/products")({
  head: () => pageHead("/products", "Products", "Software and AI-assisted products HTL 16666 Media is building: what they do, who they are for, and where AI is used."),
  component: Products,
});

function Products() {
  return <main className="site-shell">
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">Products</p>
      <h1>What we are building.</h1>
      <p>Real work in progress — stated plainly. Each entry lists the problem, the intended user, the current status and where software or AI is used. Statuses are honest: nothing here claims customers, revenue or production adoption.</p>
    </header>

    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="product-list">
        {products.map((p) => (
          <article key={p.name}>
            <div>
              <h3>{p.name}</h3>
              <span className="status">{p.status}</span>
            </div>
            <dl>
              <div><dt>Problem</dt><dd>{p.problem}</dd></div>
              <div><dt>Target user</dt><dd>{p.user}</dd></div>
              <div><dt>Current functionality</dt><dd>{p.detail}</dd></div>
              <div><dt>Where software / AI is used</dt><dd>{p.ai}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>

    <section className="intro section-pad">
      <p className="eyebrow">Evaluation, not endorsement</p>
      <div className="intro-grid">
        <h2>Why language models matter here.</h2>
        <div>
          <p>Our roadmap applies language-model APIs to the most time-heavy parts of communications work: research synthesis, drafting and Vietnamese–English translation. We are evaluating the Claude API among the model providers for those tasks.</p>
          <p>AI already runs in production on this property in a narrower sense: generated media and AI-assisted engineering. Any deeper integration will be announced here when it exists.</p>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
