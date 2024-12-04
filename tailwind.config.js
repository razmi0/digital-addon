/** @type {import('tailwindcss').Config} */
import ta from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        infra: {
          500: "#3a3a3a",
          600: "#2a2a2a",
        },
        action: {
          500: "#2f4f4f",
          600: "#1f3f3f",
        },
        ressource: {
          500: "#035900",
          600: "#025900",
        },
      },
    },
  },
  plugins: [ta],
};
