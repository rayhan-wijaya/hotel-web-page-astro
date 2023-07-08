/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "whatsapp-500": "#229337",
        "whatsapp-600": "#1b742b",
      },
    },
  },
  plugins: [],
}
