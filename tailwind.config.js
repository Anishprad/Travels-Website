/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      "custom-blue": "rgba(0,37,123,0.24)",
    },
  },
  plugins: [],
}

