export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-tiptap-editor"],
  colorMode: {
    preference: "light",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            rubik: ["Rubik", "sans-serif"],
          },
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
            secondary: {
              DEFAULT: "#0D595E",
              50: "#3EDAE4",
              100: "#2CD7E2",
              200: "#1CBFCA",
              300: "#179DA6",
              400: "#127B82",
              500: "#0D595E",
              600: "#062A2D",
              700: "#000000",
              800: "#000000",
              900: "#000000",
              950: "#000000",
            },
          },
        },
      },
    },
  },
  tiptap: {
    prefix: "Tiptap",
  },
  css: ["~/assets/css/main.css"],
});
