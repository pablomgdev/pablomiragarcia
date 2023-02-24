import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(160, "Improve SEO results with a description under 160 characters."),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    date: z.date(),
    isDraft: z.boolean().default(false),
    tags: z.enum(["JavaScript", "ASP.NET"]),
  }),
});
export const collections = { blog: blogCollection };
