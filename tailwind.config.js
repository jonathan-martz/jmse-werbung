/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "black",
          "primary-content": "#1f6fed",
          secondary: "white",
          "secondary-content": "#1f6fed",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

