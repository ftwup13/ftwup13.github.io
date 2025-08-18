// @ts-check
import { defineConfig } from 'astro/config';
import mithril from '@pioleong/astro-mithril'
import tailwindcss from '@tailwindcss/vite'


// https://astro.build/config
export default defineConfig({
  // Enable Mithril to support Mithril JSX components.
  integrations: [mithril()],
  vite: {
    plugins: [tailwindcss()],
    esbuild: {
      jsx: "transform",
      jsxFactory: "m",
      jsxFragment: "'['",
    }
  }
});
