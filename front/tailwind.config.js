/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // Activer le mode sombre via la classe "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      animation: {
        'spin-glow': 'glow 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { transform: 'rotate(0deg)', filter: 'hue-rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)', filter: 'hue-rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
