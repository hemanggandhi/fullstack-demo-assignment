/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Update according to your folder structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        skycustom: "#00c2ff", // Name it whatever you like
      },
    },
  },
  plugins: [],
};
