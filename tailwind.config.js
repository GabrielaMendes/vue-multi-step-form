/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cool-gray": "#7A7E94",
        "light-gray": "#D6D9E6",
        magnolia: "#F0F6FF",
        alabaster: "#FAFBFF",
      },
      fontFamily: {
        "ubuntu": ["'Ubuntu', sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

