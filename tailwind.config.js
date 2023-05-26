/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "#02295A",
        "purplish-blue": "#473DFF",
        "pastel-blue": "#ADBEFF",
        "light-blue": "#BFE2FD",
        "strawberry-red": "#ED3548",
        "cool-gray": "#7A7E94",
        "light-gray": "#D6D9E6",
        magnolia: "#F0F6FF",
        alabaster: "#FAFBFF",
      },
      fontFamily: {
        ubuntu: ["'Ubuntu', sans-serif"],
      },
      boxShadow: {
        custom: "0 10px 50px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

