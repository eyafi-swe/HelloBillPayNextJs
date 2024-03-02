/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'success': '#33A78C',
        'success-light': '#33a78c33',
        'success-faded': '#D6E9E4',
        'badge-success': '#ECFDF3',
        'badge-pending': '#e79b081a',
        'badge-error': '#ff00001a',
        'badge-text-pending': '#E79B08',
        'badge-text-error': '#F00',
        'light-faded': '#F9FAFB',
        'dark-bg': '#2E3646',
        'gray-bg': '#EBEBEB'

      },
    },
  },
  plugins: [],
}
