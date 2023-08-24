import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['var(--font-montserrat)'],
    },
    extend: {
      screens: {
        mobile: { max: '480px' },
        mdu: { min: '750px' },
        mdd: { max: '750px' },
        lgu: { min: '1024px' }, // large up
        lgd: { max: '1020px' }, // large down
        stu: { min: '1366px' },
        std: { max: '1366px' },
        xlu: { min: '1536px' }, // extra large up
        xld: { max: '1536px' }, // extra large down
        slgu: { min: '1700px' }, // super large up
      },
      maxWidth: {
        small: '640px',
        medium: '943px',
        large: '1220px',
      },
      colors: {
        primary: '#6B77E5',
        secondary: '#40DDB6',
        typo: {
          1: '#37393F',
          2: '#B9B9B9',
          3: '#7D7D7D',
        },
        section: {
          1: '#2E2F34',
          2: '#37393F',
        },
      },
    },
  },
  plugins: [],
};
export default config;

