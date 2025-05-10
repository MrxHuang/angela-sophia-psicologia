/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#EEF1FF',
          100: '#D8DFFC',
          200: '#B1BFF9',
          300: '#8A9FF6',
          400: '#637FF3',
          500: '#5F6CAF',
          600: '#4A5899',
          700: '#364074',
          800: '#23294F',
          900: '#111529',
          950: '#080A15',
        },
        secondary: {
          50: '#EBF5FF',
          100: '#D7EBFF',
          200: '#AFDBFF',
          300: '#87CBFF',
          400: '#5FBCFF',
          500: '#4A8FE7',
          600: '#337AD6',
          700: '#2363CF',
          800: '#1E4DA2',
          900: '#0F2657',
          950: '#07132D',
        },
        accent: {
          50: '#F9F0FF',
          100: '#F1E0FE',
          200: '#E3C2FD',
          300: '#D5A3FB',
          400: '#C685FA',
          500: '#B467F9',
          600: '#8E44AD',
          700: '#743891',
          800: '#5A2D75',
          900: '#381D48',
          950: '#200F2A',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '4px',
      },
    },
  },
  plugins: [],
}
