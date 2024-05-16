import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Options
  // https://astro.build/reference/configuration#options
  // options: {},

  // Pages
  // https://astro.build/reference/configuration#pages
  pages: ['src/pages'],
  // Project root
  // https://astro.build/reference/configuration#projectroot
  // projectRoot: 'src',

  // Plugins
  // https://astro.build/reference/configuration#plugins
  // plugins: [],

  // Vite
  // https://astro.build/reference/configuration#vite
  // vite: {},

  // Build
  // https://astro.build/reference/configuration#build
  // build: {},

  // Server
  // https://astro.build/reference/configuration#server
  // server: {},

  // Site
  // https://astro.build/reference/configuration#site
  site: "https://example.com"

  // Global meta tags
  // https://astro.build/reference/configuration#metatags
  // meta: {},

  // Global head tags
  // https://astro.build/reference/configuration#head
  // head: {},

  // Global feed
  // https://astro.build/reference/configuration#feed
  // feed: {},

  // Global sitemap
  // https://astro.build/reference/configuration#sitemap
  // sitemap: {},

  // Global robots.txt
  // https://astro.build/reference/configuration#robots
  // robots: {},

  // Global redirects
  // https://astro.build/reference/configuration#redirects
  // redirects: {},

  // Global headers
  // https://astro.build/reference/configuration#headers
  // headers: {},

  // Global scripts
  // https://astro.build/reference/configuration#scripts
  // scripts: {},

  // Global styles
  // https://astro.build/reference/configuration#styles
  // styles: {},

  // Global layout
  // https://astro.build/reference/configuration#layout
  // layout: {},

  // Global components
  // https://astro.build/reference/configuration#components
  // components: {},

  // Global data
  // https://astro.build/reference/configuration#data
  // data: {},

  // Global markdown
  // https://astro.build/reference/configuration#markdown
  // markdown: {},

  // Global i18n
  // https://astro.build/reference/configuration#i18n
  // i18n: {},

  //
  ,
  integrations: [react()]
});