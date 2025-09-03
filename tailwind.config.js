/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        dark: {
          bg: 'hsl(240, 20%, 8%)',
          surface: 'hsl(240, 15%, 12%)',
          border: 'hsl(240, 10%, 20%)',
          text: 'hsl(0, 0%, 90%)',
          muted: 'hsl(240, 5%, 60%)',
        },
        purple: {
          500: 'hsl(270, 70%, 60%)',
          600: 'hsl(270, 70%, 50%)',
          700: 'hsl(270, 70%, 40%)',
        },
        blue: {
          500: 'hsl(220, 80%, 60%)',
          600: 'hsl(220, 80%, 50%)',
        },
        pink: {
          500: 'hsl(320, 70%, 60%)',
          600: 'hsl(320, 70%, 50%)',
        }
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      spacing: {
        lg: '16px',
        md: '8px',
        sm: '4px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 2px 8px hsla(0, 0%, 0%, 0.05)',
        'card-dark': '0 4px 20px hsla(0, 0%, 0%, 0.3)',
        glow: '0 0 20px hsla(270, 70%, 60%, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px hsla(270, 70%, 60%, 0.3)' },
          '100%': { boxShadow: '0 0 30px hsla(270, 70%, 60%, 0.6)' },
        },
      }
    },
  },
  plugins: [],
};
