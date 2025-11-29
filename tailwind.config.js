/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },

        // 🔥 Orbit Animation Keyframes
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },

      animation: {
        scrollX: "scrollX 15s linear infinite",

        // 🔥 Orbit animation utility
        orbit: "orbit 8s linear infinite",
      },
    },
  },
  plugins: [],
};
