/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#000000",
        tertiary: "gold",
      },
    },
  },
  plugins: [],
};
