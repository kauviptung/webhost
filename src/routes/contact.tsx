import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { company, pageHead } from "@/company";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact", "Contact", `Contact ${company.brandName} — ${company.email}, ${company.phone}, Hanoi, Vietnam.`),
  component: Contact,
});

function Contact() {
  return <main className="site-shell">
    <SiteHeader variant="solid" />
    <section className="contact" id="contact" style={{ minHeight: "60vh" }}>
      <div className="contact-top"><span>{company.brandName.toUpperCase()}</span><span>HANOI · VIETNAM</span></div>
      <h2>Talk to the company directly.</h2>
      <div className="contact-actions">
        <a className="email" href={`mailto:${company.email}`}><span>Email</span><strong>{company.email}</strong></a>
        <a className="phone" href={`tel:${company.phoneIntl.replace(/\s/g, "")}`}><span>Call</span><strong>{company.phoneIntl.replace("+84 ", "0")}</strong></a>
      </div>
      <div className="contact-address"><span>Business address</span><p>{company.businessAddress}</p></div>
      <div className="contact-address"><span>Tax registration address</span><p>{company.taxAddress}</p></div>
      <div className="contact-address"><span>Legal identity</span><p>{company.legalName} — tax code {company.taxId}</p></div>
    </section>
    <SiteFooter />
  </main>;
}
