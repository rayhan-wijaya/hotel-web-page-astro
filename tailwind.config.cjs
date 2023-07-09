/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "whatsapp-500": "#1b722b",
        "whatsapp-600": "#13521f",
      },
    },
  },
  plugins: [],
}
