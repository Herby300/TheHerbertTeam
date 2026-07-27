import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Search-result title, used when the headline is too long to fit under 60
    // characters once the site name is appended.
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Buying',
      'Refinancing',
      'VA',
      'Self-Employed',
      'Investing',
      'Austin Market',
      'Rates',
    ]),
    image: z.string().default('/images/blog/placeholder.webp'),
    imageAlt: z.string().default(''),
    author: z.string().default('Jason Herbert'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
