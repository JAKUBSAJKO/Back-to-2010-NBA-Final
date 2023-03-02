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
        "lakers-purple": "#552583",
        "lakers-yellow": "#FDB927",
        "celtics-green": "#007A33",
        "gold-result": "#BA9653",
        "error-form": "#B3001B",
      },
    },
  },
  plugins: [],
};
