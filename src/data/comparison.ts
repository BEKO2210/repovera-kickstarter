export interface ComparisonRow {
  aspect: string;
  repovera: string;
  conventional: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Legal grounding",
    repovera: "German jurisdiction — clear, accountable legal framework",
    conventional: "Often US-based with complex international legal exposure",
  },
  {
    aspect: "Product philosophy",
    repovera: "User-respecting by design — you are not the product",
    conventional: "Growth-oriented with evolving terms and priorities",
  },
  {
    aspect: "Privacy posture",
    repovera: "Minimal data collection, maximal transparency",
    conventional: "Broad data collection with lengthy privacy policies",
  },
  {
    aspect: "Transparency",
    repovera: "Open product decisions and visible governance direction",
    conventional: "Decisions made internally, communicated selectively",
  },
  {
    aspect: "Governance controls",
    repovera: "Planned organizational governance and audit workflows",
    conventional: "Basic role management, limited audit visibility",
  },
  {
    aspect: "Enterprise trust model",
    repovera: "Built for compliance-conscious and regulated teams",
    conventional: "Enterprise features often gated behind premium tiers",
  },
  {
    aspect: "Community relationship",
    repovera: "Founding backers shape the platform direction",
    conventional: "Community feedback filtered through corporate priorities",
  },
];
