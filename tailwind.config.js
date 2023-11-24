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
        nav: "#735d78",
        primary: "#735d78",
        page: "#372549",
        card: "#b392ac",
        "card-hover": "#d1b3c4",
        "default-text": "#fdfffc",
        "hover-text": "#d9d9d9",
        "green-accent": "#619b8a",
        "green-accent-hover": "#a1c181",
      },
    },
  },
  plugins: [],
};
