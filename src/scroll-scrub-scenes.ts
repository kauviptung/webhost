import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#F03D5E",
  background: "#163A34",
  ink: "#F7F8F4",
  muted: "#D7DDD8",
};

export const scrollScrubScenes: ScrollScrubScene[] = [{
  body: "HTL 16666 Media is a Hanoi-based multimedia communications joint stock company with a clear legal identity and a focused communications mandate.",
  clip: "/assets/world/htl16666-signal-film.mp4",
  id: "company",
  kicker: "Registered multimedia communications company",
  label: "Company",
  mobileClip: "/assets/world/htl16666-signal-film-mobile.mp4",
  mobilePoster: "/assets/world/htl16666-signal-poster-mobile.jpg",
  poster: "/assets/world/htl16666-signal-poster.jpg",
  tags: ["Tax code 0111056424", "Active", "Hanoi, Vietnam"],
  title: "Built to be accountable.",
  scroll: 5.2,
  linger: 0.16,
  align: "left",
  objectPosition: "58% 50%",
  mobileObjectPosition: "50% 50%",
}];
