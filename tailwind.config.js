/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffcc00',
        'gold-dark': '#e6b800',
        charcoal: '#222222',
        'light-gray': '#cccccc',
        'off-white': '#f0f2f5',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
