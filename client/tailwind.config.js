/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        athletic: {
          950: '#0B0F14',
          900: '#111720',
          850: '#161F2C',
          800: '#1C2737',
          700: '#2A3A4F',
          600: '#3D506B',
          500: '#5A6F8F',
          400: '#879CB8',
          300: '#B8C7DA',
          200: '#E1E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC'
        },
        asf: {
          gold: {
            DEFAULT: '#F59E0B',
            hover: '#D97706',
            light: '#FEF3C7',
            dark: '#B45309'
          },
          stadium: {
            DEFAULT: '#10B981',
            hover: '#059669',
            light: '#D1FAE5',
            dark: '#047857'
          },
          blue: {
            DEFAULT: '#2563EB',
            hover: '#1D4ED8',
            light: '#DBEAFE'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Oswald"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 30px -10px rgba(17, 23, 32, 0.12), 0 4px 6px -2px rgba(17, 23, 32, 0.04)',
        'focus-ring': '0 0 0 3px rgba(245, 158, 11, 0.35)',
      }
    },
  },
  plugins: [],
}
