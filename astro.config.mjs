// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://AdyGomezM.github.io
export default defineConfig({
  integrations: [tailwind()]
});
