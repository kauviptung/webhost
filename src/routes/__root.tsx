import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import appMetaJson from "../app-meta.json";
import { company } from "../company";

declare const __HF_DESIGN_INSPECTOR__: boolean;
type AppMeta = { og_title?: string|null; og_description?: string|null; og_image_url?: string|null; favicon_url?: string|null; og_video_url?: string|null; marketplace_cover_url?: string|null };
const appMeta = appMetaJson as AppMeta;

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? "HTL 16666 Media";
  const description = meta.og_description ?? "HTL 16666 Media, a multimedia communications joint stock company in Hanoi, Vietnam.";
  const siteUrl = ((import.meta.env.VITE_SITE_URL as string | undefined) ?? company.url).replace(/\/+$/, "");
  const ogImage = meta.og_image_url ? (meta.og_image_url.startsWith("/") ? siteUrl + meta.og_image_url : meta.og_image_url) : null;
  const favicon = meta.favicon_url ?? null;
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "HTL 16666 Media" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(ogImage ? [{ property: "og:image", content: ogImage }, { name: "twitter:image", content: ogImage }] : []),
      { name: "theme-color", content: "darkslategray" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      ...(favicon ? [{ rel: "icon", href: favicon }] : []),
      { rel: "apple-touch-icon", href: "/assets/brand/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}

function NotFoundComponent() {
  return <main className="system-page"><p className="system-code">404</p><h1>Page not found.</h1><a href="/">Return to HTL 16666 Media</a></main>;
}
function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <main className="system-page"><p className="system-code">ERROR</p><h1>This page did not load.</h1><button onClick={() => { router.invalidate(); reset(); }} type="button">Try again</button></main>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) return;
    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => installHiggsfieldDesignInspector())
      .catch((error) => reportHiggsfieldError(error instanceof Error ? error : new Error("Failed to load design inspector"), { boundary: "higgsfield_design_inspector_import" }));
  }, []);
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
