/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#069494',
          light: '#0AA9A9',
          dark: '#046B6B',
        },
        secondary: {
          DEFAULT: '#7ED957',
          light: '#9FE778',
          dark: '#5CB83A',
        },
        accent: {
          DEFAULT: '#07B5B5',
          light: '#35C7C7',
          dark: '#058282',
        },
        background: '#F8FAFC',
        surface: 'rgba(255,255,255,0.75)',
        textDark: '#1F2937',
        textMid: '#4B5563',
        textLight: '#9CA3AF',
        lightGreen: '#E9F9EF',
        lightTeal: '#E0F4F4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(6, 148, 148, 0.12)',
        'glass-lg': '0 20px 60px rgba(6, 148, 148, 0.15)',
        'green-glow': '0 8px 32px rgba(126, 217, 87, 0.2)',
        'teal-glow': '0 8px 32px rgba(6, 148, 148, 0.25)',
        soft: '0 4px 20px rgba(0,0,0,0.06)',
        'soft-lg': '0 10px 40px rgba(0,0,0,0.08)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        blob: 'blob 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 60% 30% 50% 60%' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #069494 0%, #07B5B5 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7ED957 0%, #B5F27B 100%)',
        'gradient-hero': 'linear-gradient(135deg, #E0F4F4 0%, #E9F9EF 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(224, 244, 244,0.6) 100%)',
      },
    },
  },
  plugins: [],
}
