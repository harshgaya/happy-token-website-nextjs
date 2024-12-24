/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "--font-inter",
      },
      colors: {
        customBlue: "#0553FB",
        customYellow: "#FDE011",
        customBlue2: "#353375",
        customBlue3: "#2E3478",
      },
    },
  },
  plugins: [],
};
