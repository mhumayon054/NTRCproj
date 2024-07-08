/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#202430",
        cardBgColor: "#F2F3F6",
        accordionColor: "#E9FBFF",
        sectionColor: "#202430",
        collectionColor: "#082441",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
