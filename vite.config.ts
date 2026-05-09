import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";
import puppeteer from "@prerenderer/renderer-puppeteer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/contact",
        "/privacy-policy",
        "/terms-and-conditions",
        "/sms-signup",
        "/sms-terms",
        "/onboarding",
        "/signup",
        "/login"
      ],
      renderer: new puppeteer(),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "@tanstack/react-query", "lucide-react"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-checkbox", "@radix-ui/react-label", "@radix-ui/react-select", "@radix-ui/react-slot"],
        },
      },
    },
  },
}));
