/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Taurusgroteskroman Vf", "Apple UI", "Lato", "sans-serif"],
        display: ["Taurusgroteskroman Vf", "Apple UI", "Outfit", "sans-serif"],
      },
      colors: {
        // Main brand color - warm coral
        brand: {
          DEFAULT: "#c96342",
          light: "#d7815e",
          dark: "#b84a2e",
        },
        // Special accent colors (use sparingly)
        accent: {
          red: "#ca061b",
          orange: "#ff5900",
          purple: "#5f007d",
          yellow: "#f9a901",
        },
        background: {
          primary: "#faf9f6", // Off-white warm
          secondary: "#f0eee6", // Light neutral
          dark: "#1a1a1a", // Dark sections
        },
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.03) 1px, transparent 0)",
      },
      backgroundSize: {
        "dot-pattern": "40px 40px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};