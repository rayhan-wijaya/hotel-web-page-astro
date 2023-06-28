/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "whatsapp-500": "#32d951",
        "whatsapp-600": "#1c9732",
      },
    },
  },
  plugins: [],
}
