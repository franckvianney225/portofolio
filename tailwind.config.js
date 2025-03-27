/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
      textColor: {
        'always-white': '#ffffff !important',
      },
    },
  },
  plugins: [],
};
