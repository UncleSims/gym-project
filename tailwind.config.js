/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px 3px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}

