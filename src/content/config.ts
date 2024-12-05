import { defineCollection, z } from 'astro:content';

const blogPosts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blogPosts };
