import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', ...defaultTheme.fontFamily.sans],
        logo: 'var(--font-katibeh)',
      },
      colors: {
        primary: '#fd883d',
        secondary: '#6a86d8',
      },
    },
  },
  plugins: [],
};

export default config;
