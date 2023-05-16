/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: {
          50: '#FFF3F2',
          100: '#FFCECB',
          200: '#FF9D98',
          300: '#FF7871',
          400: '#FF544A',
          500: '#FF3B30',
          600: '#FF170A',
          700: '#BD0A00',
          800: '#720600',
          900: '#260200',
        },
        neutral: {
          50: '#F0F0F0',
          100: '#D6D6D6',
          200: '#BDBDBD',
          300: '#A3A3A3',
          400: '#8A8A8A',
          500: '#707070',
          600: '#575757',
          700: '#3D3D3D',
          800: '#242424',
        },
        primary: {
          50: '#D2EEFE',
          100: '#A0DBFD',
          200: '#6EC8FC',
          300: '#3CB5FB',
          400: '#0AA2FA',
          500: '#0483CC',
          600: '#03649B',
          700: '#024369',
          800: '#012337',
        },
        secondary: {
          50: '#FDD8EF',
          100: '#FFC2DA',
          200: '#FF0A6C',
          300: '#E6055F',
          400: '#D90359',
          500: '#E1025F',
          600: '#B6024D',
          700: '#A90F52',
          800: '#960D48',
        },
        success: {
          50: '#F2FCF5',
          100: '#CCF2D5',
          200: '#98E4AB',
          300: '#72DA8C',
          400: '#4BD06D',
          500: '#34C759',
          600: '#2EAE4E',
          700: '#217C38',
          800: '#144B21',
          900: '#07190B',
        },
        black: '#1f1f1f',
        white: '#fafafa',
        info: '#0dcaf0',
        warning: '#ffc800',
        danger: '#dc3545',
        form: 'rgba(255, 255, 255, 0.8)',
        light: {
          100: '#f7fbff',
          300: '#d6d6d6',
        },
        dark: '#212529',
      },

      backgroundImage: {
        'login-pattern':
          "url('/assets/images/undraw_online_payments_re_y8f2.svg')",
        'global-pattern':
          "url('/assets/images/undraw_credit_card_re_blml.svg')",
        'mobile-pattern':
          "url('/assets/images/undraw_credit_card_re_blml.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
