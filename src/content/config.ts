import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const overview = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: "**/*.md", base: "./src/content/overview" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string().optional(),
      linkText: z.string().default('Read more'),
      linkPath: z.string(),
      textPosition: z.enum(['right', 'left']).default('right'),
      image: image(),
      imageAlt: z.string(),
      order: z.number().positive(),
      page: z.enum(['home', 'projects']),
      sectionTitle: z.string().optional(),
    })
});

const contact = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: "**/*.md", base: "./src/content/contact" }),
  schema: ({ image }) =>
    z.object({
      nationality: z.string(),
      age: z.string(),
      phone: z.string(),
      linkedinText: z.string(),
      location: z.string(),
      image: image(),
      imageAlt: z.string(),
    })
});

const work = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      disclaimer: z.string().optional(),
    })
});

export const collections = { overview, contact, work };
