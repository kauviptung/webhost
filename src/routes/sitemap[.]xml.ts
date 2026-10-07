import { createFileRoute } from "@tanstack/react-router";
import { company } from "../company";

const PAGES = ["/", "/products", "/about", "/contact", "/privacy", "/terms"] as const;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Canonical production URLs — not request origin — so preview and
        // staging deploys still publish the real domain.
        const origin = company.url;
        const today = new Date().toISOString().split("T")[0];
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...PAGES.map(
            (path) => [
              "  <url>",
              `    <loc>${origin}${path === "/" ? "/" : path}</loc>`,
              `    <lastmod>${today}</lastmod>`,
              "    <changefreq>weekly</changefreq>",
              `    <priority>${path === "/" ? "1.0" : "0.8"}</priority>`,
              "  </url>",
            ].join("\n"),
          ),
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
