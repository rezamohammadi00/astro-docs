//Most frameworks define a way for us to specify our project-specific configurations.

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});