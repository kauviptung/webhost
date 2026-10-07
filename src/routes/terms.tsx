import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { company, pageHead } from "@/company";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("/terms", "Terms", `Terms of use for ${company.domain}, operated by ${company.legalName}.`),
  component: Terms,
});

function Terms() {
  return <main className="site-shell">
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">Terms</p>
      <h1>Terms of use.</h1>
      <p>Plain-language terms for this public informational website.</p>
    </header>
    <div className="prose">
      <h2>The site</h2>
      <p>{company.domain} is operated by {company.legalName} ("{company.brandName}", tax code {company.taxId}). It presents information about the company, its software, services and contact details.</p>
      <h2>Accuracy</h2>
      <p>Company registration data shown here is intended to match the public tax record for tax code {company.taxId}. Product descriptions describe work in progress and do not constitute commercial offers, availability commitments or performance guarantees.</p>
      <h2>Intellectual property</h2>
      <p>Site content, design and media are the property of {company.brandName}. You may link to and quote this site with attribution; reproduction of the site itself requires written permission.</p>
      <h2>Liability</h2>
      <p>The site is provided as-is for information purposes. We are not liable for decisions made in reliance on information presented here.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Vietnam. Questions: {company.email}.</p>
    </div>
    <SiteFooter />
  </main>;
}
