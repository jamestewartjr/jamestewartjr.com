import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jamestewartjr.com',
	integrations: [mdx(), sitemap()],
	pages: {
		'links.astro': {
		  title: "James Stewart Jr's Website",
		  description: "James Stewart Jr's online presence.",
		},
	  },
});
