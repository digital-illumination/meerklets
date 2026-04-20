/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // CTM brand palette — used for UI chrome and narrative overlays
        ctm: {
          blue: "#2843d0",
          yellow: "#e6b30d",
          red: "#b8123b",
          purple: "#6326b3",
          green: "#08926d",
          magenta: "#d946a8",
          orange: "#e8722a",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
