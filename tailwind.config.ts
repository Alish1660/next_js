module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "834px",
        lg: "1050px",
      },
      colors: {
        "custom-gray": "rgba(43, 43, 43, 1)",
        "second-gray": " rgba(59, 59, 59, 1) ",
        "third-gray": "  rgba(43, 43, 43, 1);",
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
