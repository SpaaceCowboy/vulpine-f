const {heroui} = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|calendar|date-picker|form|input|link|navbar|number-input|slider|ripple|spinner|date-input|popover).js"
  ],
  theme: {
    aspectRatio: {
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    variants: {
      aspectRatio: ['responsive'],
    }
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-aspect-ratio'),
    heroui()],
};
