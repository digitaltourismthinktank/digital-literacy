import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modules = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/modules' }),
  schema: z.object({
    track: z.number(),
    trackName: z.string(),
    title: z.string(),
    hook: z.string(),
    duration: z.string().optional(),
    isFree: z.boolean().default(false),
    status: z.enum(['published', 'coming-soon']),
    prev: z.string().nullable(),
    next: z.string().nullable(),
  }),
});

export const collections = { modules };
