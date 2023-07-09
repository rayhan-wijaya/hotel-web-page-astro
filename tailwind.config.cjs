/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "whatsapp-500": "#1f8532",
        "whatsapp-600": "#196b28",
      },
    },
  },
  plugins: [],
}
