import { Link } from "@tanstack/react-router";
import { company } from "../company";

export const siteNavLinks = [
  { to: "/products", label: "Software" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ variant }: { variant?: "overlay" | "solid" }) {
  return (
    <header className={variant === "solid" ? "site-header site-header--solid" : "site-header"}>
      <Link className="brand-lockup" to="/" aria-label="HTL 16666 Media home">
        <img alt="" className="brand-mark" src="/assets/brand/htl16666-mark.svg" />
        <span>{company.brandName}</span>
      </Link>
      <nav aria-label="Primary navigation">
        {siteNavLinks.map((l) => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div>
        <strong>{company.brandName}</strong>
        <p>{company.internationalName}</p>
      </div>
      <div>
        <span>{company.legalName}</span>
        <span>Tax code {company.taxId}</span>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>
      <nav aria-label="Footer navigation">
        {siteNavLinks.map((l) => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
      <p>© 2026 {company.brandName}.</p>
    </footer>
  );
}
