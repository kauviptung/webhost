import { Link } from "@tanstack/react-router";
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#F03D5E",
  background: "#163A34",
  ink: "#F7F8F4",
  muted: "#D7DDD8",
};

export const scrollScrubScenes: ScrollScrubScene[] = [{
  body: "HTL 16666 is a Hanoi-based communications and technology company building software for business operations, communications and automation.",
  clip: "/assets/world/htl16666-signal-film.mp4",
  id: "company",
  kicker: "Communications · Technology",
  label: "Company",
  mobileClip: "/assets/world/htl16666-signal-film-mobile.mp4",
  mobilePoster: "/assets/world/htl16666-signal-poster-mobile.jpg",
  poster: "/assets/world/htl16666-signal-poster.jpg",
  tags: ["Founded 2025", "Hanoi, Vietnam"],
  title: "Software with a signal.",
  actions: <Link to="/products">What we build</Link>,
  scroll: 5.2,
  linger: 0.16,
  align: "left",
  objectPosition: "58% 50%",
  mobileObjectPosition: "50% 50%",
}];
