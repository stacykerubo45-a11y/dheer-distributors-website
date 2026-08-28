import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dheer-distributors-website/",
  plugins: [react()],
});