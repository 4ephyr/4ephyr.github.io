/** @type {import('tailwindcss').Config} */

const color = {
  night: {
    DEFAULT: "#141414",
    100: "#040404",
    200: "#080808",
    300: "#0c0c0c",
    400: "#101010",
    500: "#141414",
    600: "#434343",
    700: "#727272",
    800: "#a1a1a1",
    900: "#d0d0d0",
  },
  primary: {
    DEFAULT: "#ebfffa",
    100: "#006249",
    200: "#00c493",
    300: "#27ffc9",
    400: "#89ffe1",
    500: "#ebfffa",
    600: "#effffb",
    700: "#f3fffc",
    800: "#f7fffd",
    900: "#fbfffe",
  },
  celestial_blue: {
    DEFAULT: "#20a4f3",
    100: "#032234",
    200: "#064469",
    300: "#08669d",
    400: "#0b89d1",
    500: "#20a4f3",
    600: "#4db8f6",
    700: "#79caf8",
    800: "#a6dbfa",
    900: "#d2edfd",
  },
  tufts_blue: {
    DEFAULT: "#0b8bd5",
    100: "#021c2b",
    200: "#043855",
    300: "#075380",
    400: "#096fab",
    500: "#0b8bd5",
    600: "#26a8f4",
    700: "#5cbef6",
    800: "#92d4f9",
    900: "#c9e9fc",
  },
  tint: {
    DEFAULT: "#ee2e31",
    100: "#350405",
    200: "#6a090a",
    300: "#9f0d0f",
    400: "#d31114",
    500: "#ee2e31",
    600: "#f2595b",
    700: "#f58284",
    800: "#f8acad",
    900: "#fcd5d6",
  },
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        ms: { max: "595px" },
        ls: { max: "795pxpx" },
      },
      colors: {
        primary: color.primary,
        secondary: color.night,
        accent: color.celestial_blue,
        darkAccent: color.tufts_blue,
        tint: color.tint,
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
    darkmode: "class",
  },
  plugins: [require('@tailwindcss/typography')],
};
