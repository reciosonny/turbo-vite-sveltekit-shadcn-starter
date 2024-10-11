import path from "path";

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    commonjsOptions: {
      include: [/@repo\/ui/, /node_modules/],
    },
  },
  resolve: {
    alias: {
      '@repo/ui': path.resolve("../../packages/ui/src"),
    },
  },
})
