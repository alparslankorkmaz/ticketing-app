/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#f4a261",
        page: "#fefae0",
        card: "#dda15e",
        "card-hover": "#faedcd",
        "default-text": "#354f52",
        "hover-text": "#cad2c5",
        "green-accent": "#606c38",
        "green-accent-hover": "#283618",
      },
    },
  },
  plugins: [],
};
