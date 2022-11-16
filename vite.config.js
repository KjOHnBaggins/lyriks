import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    open: "./index.html",
    watch: {
      ignored: ["!**/node_modules/**"],
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
    open: "./index.html",
  },
  plugins: [react()],
});
