/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgColor1: 'rgb(var(--color-bg-1) / <alpha-value>)',
        bgColor2: 'rgb(var(--color-bg-2) / <alpha-value>)',
        accent_green: 'rgb(var(--color-green) / <alpha-value>)',
        progress_blue: 'rgb(var(--color-blue) / <alpha-value>)',
        text2: 'rgb(var(--text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        'arimo': ["Arimo", "sans-serif"]
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'logoText': '1450px',
        '2xl': '1536px',
      },
    },

  },
  plugins: [],
}

