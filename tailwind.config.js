/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark palette
        'navy': {
          DEFAULT: '#0c1829',
          light: '#1a2d45',
          medium: '#152238',
        },
        // Sophisticated gold accents
        'gold': {
          DEFAULT: '#b8964c',
          light: '#d4bc7e',
          dark: '#96783d',
        },
        // Warm neutrals instead of pure white
        'cream': {
          DEFAULT: '#faf8f5',
          dark: '#f5f2ed',
        },
        'charcoal': '#2d3748',
        // Legacy (for gradual migration)
        'med-blue': '#0c1829',
        'stone-warm': '#b8964c',
        'stone-light': '#f5f2ed',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.15em',
      },
    },
  },
  plugins: [],
};
