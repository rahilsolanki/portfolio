/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease-out forwards',
        'fade-in':  'fadeIn 0.5s ease-out forwards',
        'sway':     'sway 2.4s ease-in-out infinite',
        'orb-1':    'orbFloat1 16s ease-in-out infinite',
        'orb-2':    'orbFloat2 21s ease-in-out infinite',
        'orb-3':    'orbFloat3 13s ease-in-out infinite',
        'particle': 'particleRise 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '30%':      { transform: 'translateX(-5px)' },
          '70%':      { transform: 'translateX(5px)' },
        },
        orbFloat1: {
          '0%, 100%': { transform: 'translate(0px,   0px)   scale(1)'    },
          '33%':      { transform: 'translate(55px,  -35px) scale(1.06)' },
          '66%':      { transform: 'translate(-40px,  28px) scale(0.95)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0px,  0px)   scale(1)'    },
          '50%':      { transform: 'translate(-65px, 45px) scale(1.1)'  },
        },
        orbFloat3: {
          '0%, 100%': { transform: 'translate(0px,   0px)   scale(1)'    },
          '40%':      { transform: 'translate(38px,  -55px) scale(1.08)' },
          '80%':      { transform: 'translate(-28px,  22px) scale(0.93)' },
        },
        particleRise: {
          '0%':       { transform: 'translateY(0px)   scale(1)',   opacity: '0'   },
          '15%':      { opacity: '1'                                              },
          '85%':      { opacity: '0.7'                                            },
          '100%':     { transform: 'translateY(-70px) scale(0.6)', opacity: '0'  },
        },
      },
    },
  },
  plugins: [],
}
