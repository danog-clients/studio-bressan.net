import { defineConfig } from "vite";

// Static multi-page-ready build. Output goes to dist/ for Cloudflare Pages.
// Add more entries to `build.rollupOptions.input` as the site grows.
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
