export default {
  target: "static",
  publicRuntimeConfig: {
    baseUrl: process.env.DOMAIN ? `https://${process.env.DOMAIN}` : "http://localhost:3000"
  },
  head: {
    title: "Template",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  build: {},
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  modules: ["@nuxtjs/axios"],
  plugins: [],
  content: {},
  components: true,
  googleFonts: {
    display: "swap",
    families: {
      Roboto: true
    }
  },
  tailwindcss: {
    cssPath: "tailwind.css",
    configPath: "tailwind.config.js",
    jit: false,
    exposeConfig: false,
    config: {}
  },
  axios: {
    baseURL: "https://n8n.sandbox.theseedsquad.com"
  }
};
