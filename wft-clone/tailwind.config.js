/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/tester.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        "mybx": "inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)",
      }
    },
  },
  plugins: [],
}

