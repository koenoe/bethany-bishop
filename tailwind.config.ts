import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', ...defaultTheme.fontFamily.sans],
        logo: 'var(--font-katibeh)',
      },
      colors: {
        primary: '#f76201',
        secondary: '#6a86d8',
        beige: '#faefe0',
        midnight: '#394979',
      },
    },
  },
  plugins: [],
};

export default config;
