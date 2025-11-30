/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow1: "#7cf0ff",
        glow2: "#ffb7ff",
        glow3: "#ffd27c",
        darkBg: "#0b0f17",
      },
      animation: {
        glow: "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s infinite ease-in-out",
      },
      keyframes: {
        glow: {
          "0%": { opacity: 0.5, filter: "drop-shadow(0 0 4px #7cf0ff)" },
          "100%": { opacity: 1, filter: "drop-shadow(0 0 10px #7cf0ff)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.9 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
