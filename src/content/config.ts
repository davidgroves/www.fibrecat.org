import { imageConfig } from 'astro:assets';
import { Image } from 'astro:assets';

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroAltText: z.string(),
		heroLink: z.string(),
		heroCredit: z.string(),
		heroImage: image()
	}),
});

export const collections = { blog };
