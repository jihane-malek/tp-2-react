/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This will include all JS, JSX, TS, and TSX files in the src directory
    './public/index.html', // Include your main HTML file if you are using Tailwind classes there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
