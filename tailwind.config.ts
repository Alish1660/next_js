module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px", // Small screens
        md: "756px", // Medium screens
        lg: "1024px", // Large screens
      },
      colors: {
        "custom-gray": "rgba(43, 43, 43, 1)",
        "custom-purple": "rgba(162, 89, 255, 1)",
      },
      maxWidth: {
        "1250px": "1250px",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "space-mono": ['"Space Mono"', "monospace"],
      },
      fontSize: {
        "67px": "67px",
      },
      lineHeight: {
        "73.7px": "73.7px",
      },
    },
  },
  plugins: [],
};
