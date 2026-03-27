export interface Feature {
  icon: string;
  title: string;
  description: string;
  status: "Launch direction" | "Planned" | "In design" | "Roadmap" | "Exploratory";
}

export const features: Feature[] = [
  {
    icon: "git-branch",
    title: "Repository Hosting",
    description:
      "Git-native repository management designed for clarity, performance, and long-term reliability. Your code, hosted with care.",
    status: "Launch direction",
  },
  {
    icon: "users",
    title: "Team Collaboration",
    description:
      "Workspaces, organizations, and role-based access built for teams that value structure and accountability.",
    status: "Planned",
  },
  {
    icon: "message-square",
    title: "Review Workflows",
    description:
      "Code review flows designed for thoughtful collaboration — not just approvals, but meaningful discourse on every change.",
    status: "In design",
  },
  {
    icon: "shield",
    title: "Privacy Controls",
    description:
      "Granular visibility settings, minimal data collection, and architecture that respects what should remain private.",
    status: "Launch direction",
  },
  {
    icon: "eye",
    title: "Audit Visibility",
    description:
      "Transparent activity logs and access records. Know who did what, when — without guesswork.",
    status: "Planned",
  },
  {
    icon: "scale",
    title: "Governance Workflows",
    description:
      "Structured decision-making for organizations. Approval chains, policy enforcement, and compliance-ready controls.",
    status: "Roadmap",
  },
  {
    icon: "building",
    title: "Enterprise Compliance",
    description:
      "Designed to meet the compliance and auditability requirements of regulated industries and public institutions.",
    status: "Roadmap",
  },
  {
    icon: "globe",
    title: "Global Access",
    description:
      "Accessible worldwide with a clear legal home in Germany. Global reach with jurisdictional clarity.",
    status: "Launch direction",
  },
  {
    icon: "key",
    title: "Contributor Trust",
    description:
      "Verified identities, signed commits, and contributor reputation — building trust at the individual level.",
    status: "In design",
  },
  {
    icon: "layout-grid",
    title: "Organization Controls",
    description:
      "Multi-team structures with fine-grained permissions, billing clarity, and organizational governance.",
    status: "Planned",
  },
  {
    icon: "zap",
    title: "Secure Automation",
    description:
      "CI/CD integration points designed with security boundaries. Automate with confidence, not blind trust.",
    status: "Roadmap",
  },
  {
    icon: "puzzle",
    title: "Open Ecosystem",
    description:
      "API-first architecture enabling integrations, extensions, and interoperability without vendor lock-in.",
    status: "Exploratory",
  },
];
