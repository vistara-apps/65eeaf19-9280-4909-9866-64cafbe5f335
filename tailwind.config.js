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
        bg: 'hsl(220, 10%, 95%)',
        text: 'hsl(220, 10%, 20%)',
        accent: 'hsl(160, 80%, 50%)',
        border: 'hsl(220, 10%, 85%)',
        primary: 'hsl(220, 80%, 50%)',
        surface: 'hsl(0, 0%, 100%)',
        purple: {
          50: 'hsl(270, 100%, 98%)',
          100: 'hsl(270, 96%, 95%)',
          500: 'hsl(270, 95%, 75%)',
          600: 'hsl(270, 95%, 65%)',
          700: 'hsl(270, 95%, 55%)',
          900: 'hsl(270, 100%, 15%)',
        },
        blue: {
          500: 'hsl(220, 80%, 50%)',
          600: 'hsl(220, 80%, 40%)',
          700: 'hsl(220, 80%, 30%)',
        },
        dark: {
          bg: 'hsl(270, 100%, 8%)',
          surface: 'hsl(270, 20%, 12%)',
          border: 'hsl(270, 20%, 20%)',
          text: 'hsl(270, 10%, 85%)',
        }
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      spacing: {
        xl: '24px',
        lg: '16px',
        md: '8px',
        sm: '4px',
      },
      boxShadow: {
        card: '0 2px 8px hsla(0, 0%, 0%, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
        'slide-up': 'slideUp 200ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
