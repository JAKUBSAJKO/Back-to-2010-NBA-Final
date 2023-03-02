/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        win: "url('./assets/images/win.png')",
        failure: "url('./assets/images/failure.png')",
      },
      colors: {
        "lakers-purple": "#572C80",
        mango: "#70A288",
        "error-color": "#EF5B5B",
      },
    },
  },
  plugins: [],
};
