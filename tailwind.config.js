/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind applies to all files in the src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': 'linear-gradient(180deg, #AC926A 0%, #463B2B 100%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* Firefox */
        'scrollbar-width': 'none',
        /* Chrome, Edge, and Safari */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    });
  },],
}
