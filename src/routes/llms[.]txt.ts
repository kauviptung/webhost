import { createFileRoute } from "@tanstack/react-router";

// Agent-facing site summary (https://llmstxt.org). Markdown, same facts as the
// registry section on `/` — keep the two in sync when company info changes.
const body = [
  "# HTL 16666 Media",
  "",
  "> A Hanoi-based multimedia communications joint stock company focused on advertising, market research, communications consulting, events, trade promotion and creative design.",
  "",
  "## Company facts",
  "",
  "- Legal name: CÔNG TY CỔ PHẦN TRUYỀN THÔNG ĐA PHƯƠNG TIỆN HTL 16666 VIỆT NAM",
  "- International name: HTL 16666 VIET NAM MULTIMEDIA COMMUNICATIONS JOINT STOCK COMPANY",
  "- Tax code: 0111056424",
  "- Status: Active",
  "- Legal representative: HOÀNG THANH TÙNG",
  "- Business address: 72A Tinh Quang Street, Giang Bien Ward, Long Bien District, Hanoi, Vietnam",
  "- Email: support@mr16666.com",
  "- Telephone: +84 828 716 666",
  "",
  "## Capabilities",
  "",
  "- Advertising & Communications",
  "- Market Research",
  "- Communications Consulting",
  "- Events & Trade Promotion",
  "- Creative Design",
  "",
  "## Links",
  "",
  "- [Homepage](/)",
  "- [Sitemap](/sitemap.xml)",
  "",
].join("\n");

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(body, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
