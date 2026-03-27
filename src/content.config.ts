import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const manifesto = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/manifesto" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = { manifesto };
