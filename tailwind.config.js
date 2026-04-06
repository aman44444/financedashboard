/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
   extend: {
      colors: {
        bg: "#0B0F19",        
        surface: "#111827",   
        border: "#1F2937",
        text: "#E5E7EB",
        muted: "#9CA3AF",

        primary: "#6366F1",   
        success: "#22C55E",   
        neutral: "#6B7280",   
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
