/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_red: '#d6001c',
        primary: '#1e1e1e',
        secondary_text: '#505050',
        header: '#8c8c8c',
        header_hover: '#3f3f3f',
        footer_background: '#2b2b2b',
        footer_text: '#959595',
        footer_label: '#5b5b5b',
        footer_hover: '#b3b3b3',
      },
    },
  },
  plugins: [],
};
