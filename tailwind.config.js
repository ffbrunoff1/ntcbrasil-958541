/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#5DAFEF',
        accent: '#1E40AF', // Darker blue for contrast
        'text-dark': '#0F172A', // slate-900
        'text-light': '#F8FAFC', // slate-50
        background: '#F1F5F9', // slate-100
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(93, 175, 239, 0.5), 0 0 20px rgba(93, 175, 239, 0.3)',
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
