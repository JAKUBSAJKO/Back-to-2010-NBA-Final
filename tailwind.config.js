/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        win: "url('./assets/images/win.png')",
        failure: "url('./assets/images/failure.png')",
      },
    },
  },
  plugins: [],
};
