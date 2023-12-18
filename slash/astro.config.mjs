import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import {loadEnv} from "vite";
import storyblok from '@storyblok/astro';

import react from "@astrojs/react";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: 'us', // optional,  or 'eu' (default)
      },
    }),
    
    tailwind(), react()]
});