/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        climate: {
          dark: '#0f172a',
          darker: '#020617',
          primary: '#10b981', // emerald-500
          secondary: '#34d399', // emerald-400
          light: '#f8fafc',
          card: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
