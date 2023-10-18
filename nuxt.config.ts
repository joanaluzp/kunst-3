// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {},
  app: {
    head: {
      title: "KUNST3",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {},
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { hid: "description", name: "description", content: "" },
        { hid: "keywords", name: "keywords", content: "" },
        { hid: "author", name: "author", content: "Joana da Luz Pimentel" },
        { hid: "og:title", name: "og:title", content: "KUNST 3" },
        { hid: "og:type", name: "og:type", content: "" },
        { hid: "og:url", name: "og:url", content: "" },
        { hid: "og:description", name: "og:description", content: "" },
        { hid: "og:image", name: "og:image", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        //ADD EXTRA FAVICONS
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "slide", mode: "out-in" },
  },
  modules: ["nuxt-swiper", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
        file: "de.json",
      }
    ],
    defaultLocale: "en",
  },
  css: ["@/assets/scss/style.css"],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
