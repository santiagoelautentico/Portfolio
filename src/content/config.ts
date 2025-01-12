import { defineCollection, z } from "astro:content";
//z -> zod schema

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    urluno: z.string().url(),
    urldos: z.string().url(),
    tags: z.string(),
  }),
});

export const collections = { works };
