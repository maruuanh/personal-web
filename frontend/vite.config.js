import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Contoh jika kamu pakai alias (misal dari craco.config.js)
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // opsional, default 5173
  },
});
