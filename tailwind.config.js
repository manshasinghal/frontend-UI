/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // Pure black like in image
        surface: '#18181b',
        primary: '#ffffff',
        secondary: '#71717a', // Zinc-500 for better match
        success: '#16a34a', // Green-600 for exact match
        danger: '#dc2626', // Red-600 for exact match
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
