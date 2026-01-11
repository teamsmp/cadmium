import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const news = defineCollection({
  loader: file("src/data/news.json"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
  }),
});

export const collections = { news };
