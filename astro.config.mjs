// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import react from "@astrojs/react";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [icon(), react()],
});
