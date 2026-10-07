import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { company, pageHead } from "@/company";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("/privacy", "Privacy", `Privacy notice for ${company.domain}, operated by ${company.legalName}.`),
  component: Privacy,
});

function Privacy() {
  return <main className="site-shell">
    <SiteHeader variant="solid" />
    <header className="page-head">
      <p className="eyebrow">Privacy</p>
      <h1>Privacy notice.</h1>
      <p>How {company.domain} handles information. This is a public informational site — it has no accounts, no forms and no tracking pixels.</p>
    </header>
    <div className="prose">
      <h2>Who we are</h2>
      <p>This website is operated by {company.legalName} ("{company.brandName}", tax code {company.taxId}), {company.businessAddress}. Contact: {company.email}.</p>
      <h2>What we collect</h2>
      <ul>
        <li>No user accounts, no sign-in, no forms — nothing is submitted to us by browsing.</li>
        <li>No analytics or advertising trackers are embedded on this site.</li>
        <li>Our hosting provider processes standard server logs (IP address, user agent, requested URL) to serve and protect the site.</li>
      </ul>
      <h2>If you contact us</h2>
      <p>Emailing {company.email} gives us your address and message content. We use it only to respond and conduct the business conversation it initiates.</p>
      <h2>Retention and sharing</h2>
      <p>We do not sell or share personal data with third parties. Email correspondence is retained only as long as the business relationship requires.</p>
      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of personal data you have sent us by emailing {company.email}.</p>
    </div>
    <SiteFooter />
  </main>;
}
