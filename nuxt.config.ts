export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "primary-color": {
              DEFAULT: "#2CB8C1",
              50: "#B6EBEE",
              100: "#A6E6EB",
              200: "#84DDE3",
              300: "#63D4DB",
              400: "#42CBD4",
              500: "#2CB8C1",
              600: "#228C93",
              700: "#176166",
              800: "#0D3538",
              900: "#020A0A",
              950: "#000000",
            },
          },
        },
      },
    },
  },
});
