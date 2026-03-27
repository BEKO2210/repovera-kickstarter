export interface RoadmapPhase {
  phase: number;
  title: string;
  goal: string;
  description: string;
  userValue: string;
  status: "Active" | "Vision" | "Planned" | "In design" | "Future" | "Exploratory";
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Foundation",
    goal: "Establish identity and community signal",
    description:
      "Launch the public vision, manifesto, and pre-launch campaign. Build the initial community of backers and early supporters. Establish the brand, legal foundation, and design language that will carry the platform forward.",
    userValue:
      "Early supporters get a voice in shaping the platform direction and founding-backer recognition.",
    status: "Active",
  },
  {
    phase: 2,
    title: "Platform Core",
    goal: "Build the core repository experience",
    description:
      "Develop the foundational repository hosting layer — Git-native, performant, and privacy-conscious from the first line of code. This phase focuses on getting the basics right: push, pull, browse, and manage repositories with clarity.",
    userValue:
      "Developers gain access to a clean, fast, and trustworthy repository hosting experience.",
    status: "Planned",
  },
  {
    phase: 3,
    title: "Team Layer",
    goal: "Enable meaningful collaboration",
    description:
      "Introduce organizations, teams, and collaboration primitives. Code review workflows, discussion spaces, and shared project structures designed for teams that value both speed and thoughtfulness.",
    userValue:
      "Teams can work together with structure, clarity, and mutual accountability.",
    status: "In design",
  },
  {
    phase: 4,
    title: "Governance Layer",
    goal: "Deliver transparency and audit controls",
    description:
      "Build the governance and auditability features that set Repovera apart. Organizational policies, approval workflows, access audit trails, and transparency controls for teams that need to demonstrate compliance and accountability.",
    userValue:
      "Regulated teams and privacy-conscious organizations gain the controls they need to trust their infrastructure.",
    status: "Vision",
  },
  {
    phase: 5,
    title: "Enterprise Layer",
    goal: "Serve enterprise and institutional needs",
    description:
      "Extend the platform for enterprise-scale usage. Advanced role management, SSO integration direction, deployment flexibility, dedicated support channels, and compliance documentation for regulated industries.",
    userValue:
      "Enterprises and public institutions gain a code platform built for their governance and compliance reality.",
    status: "Future",
  },
  {
    phase: 6,
    title: "Ecosystem Layer",
    goal: "Open the platform to integrations and automation",
    description:
      "Publish APIs, enable third-party integrations, and explore AI-aware development workflows. Build an ecosystem that respects interoperability and avoids vendor lock-in, while maintaining the trust and privacy standards of the core platform.",
    userValue:
      "Developers and teams integrate Repovera into their existing workflows with confidence and flexibility.",
    status: "Exploratory",
  },
];
