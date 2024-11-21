/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-sub-mail': "url('/images/bg-mail.png')",
        
      }
    },
  },
  plugins: [],
}