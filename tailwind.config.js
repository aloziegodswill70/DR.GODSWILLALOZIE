/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ================= COLORS ================= */
      colors: {
        glow1: "#7cf0ff",
        glow2: "#ffb7ff",
        glow3: "#ffd27c",
        darkBg: "#0b0f17",
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        glow: "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
      },

      /* ================= KEYFRAMES ================= */
      keyframes: {
        glow: {
          "0%": {
            opacity: "0.6",
            filter: "drop-shadow(0 0 6px #7cf0ff)",
          },
          "100%": {
            opacity: "1",
            filter: "drop-shadow(0 0 14px #7cf0ff)",
          },
        },

        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(56,189,248,0.25)",
          },
          "50%": {
            boxShadow: "0 0 45px rgba(56,189,248,0.55)",
          },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },

        pulseSoft: {
          "0%, 100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};
