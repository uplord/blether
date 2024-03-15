// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/less/style.less"],
  devtools: { enabled: false },
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700]
    },
    display: "swap"
  },
  modules: ["@nuxtjs/google-fonts"],
  srcDir: "src/"
})
