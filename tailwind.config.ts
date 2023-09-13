import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      quicksand: ['var(--font-quicksand)'],
    },
    extend: {
      screens: {
        xld: { max: '1280px' },
        lgd: { max: '1020px' },
        mdd: { max: '768px' },
        smd: { max: '640px' },
        mobile: { max: '480px' },
      },
      maxWidth: {
        small: '640px',
        medium: '943px',
        large: '1220px',
        xl: '1570px',
      },
      colors: {
        primary: '#6B77E5',
        secondary: '#40DDB6',
        typo: {
          1: '#37393F',
          2: '#B9B9B9',
          3: '#7D7D7D',
          4: '#0090da',
        },
        section: {
          1: '#2E2F34',
          2: '#37393F',
          3: '#4C4D52',
          4: '#474950',
          5: '#F4F4F4',
        },
      },
    },
  },
  // important: '#__next',
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
