import { BASE_PATH, GITHUB_URL, KICKSTARTER_URL } from "./site";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Manifesto", href: `${BASE_PATH}/manifesto` },
  { label: "Roadmap", href: `${BASE_PATH}/roadmap` },
  { label: "Privacy", href: `${BASE_PATH}/privacy` },
  { label: "GitHub", href: GITHUB_URL, external: true },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Manifesto", href: `${BASE_PATH}/manifesto` },
    { label: "Roadmap", href: `${BASE_PATH}/roadmap` },
    { label: "Privacy", href: `${BASE_PATH}/privacy` },
  ],
  legal: [
    { label: "Privacy Policy", href: `${BASE_PATH}/privacy` },
    { label: "Imprint", href: `${BASE_PATH}/imprint` },
  ],
  connect: [
    { label: "GitHub", href: GITHUB_URL, external: true },
    { label: "Kickstarter", href: KICKSTARTER_URL, external: true },
  ],
} as const;
