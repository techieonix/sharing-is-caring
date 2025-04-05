/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1536px',
      },
      colors: {
        'salesforce-blue': '#032D60',
        'btn-blue': '#0176D3'
      }
    },
  },
  plugins: [],
}

