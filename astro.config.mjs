import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jamestewartjr.com',
  integrations: [mdx(), sitemap(), react()],
  pages: {
    'links.astro': {
      title: "James Stewart Jr's Website",
      description: "James Stewart Jr's online presence."
    }
  }
});