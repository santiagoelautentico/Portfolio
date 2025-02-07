import { defineCollection, z } from "astro:content";
//z -> zod schema

const works = defineCollection({
  schema: z.object({
    number: z.number(), 
    title: z.string(),
    img: z.string(),
    video: z.string(),
    description: z.string(),
    description2: z.string(),
    date: z.string(),
    where: z.string(),
    urluno: z.string().url(),
    urldos: z.string().url(),
    tags: z.array(z.string()),
  }),
});

export const collections = { works };
