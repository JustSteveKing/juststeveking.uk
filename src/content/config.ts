import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

const hardware = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    spec: z.string(),
    description: z.string(),
  }),
});

const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const software = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    images: z.array(z.string()).optional(),
    given: z.array(z.string()).optional(),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    avatar: z.string(),
    content: z.string(),
  }),
});

export const collections = {
  articles,
  hardware,
  services,
  software,
  talks,
  testimonials,
};