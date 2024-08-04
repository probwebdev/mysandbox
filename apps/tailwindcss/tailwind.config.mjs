/** @type {import('tailwindcss/plugin').Plugin} */
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/!(*.d).{js,jsx,ts,tsx}',
    './src/**/!(*.d).{js,jsx,ts,tsx}',
  ],
  safelist: [{ pattern: /^text-social/ }],
  theme: {
    extend: {
      fontFamily: {
        text: 'var(--text-font)',
        code: 'var(--code-font)',
      },
      fontSize: {
        root: {
          base: '100%',
          xxl: '112.5%',
        },
        scaleFactor: {
          base: 1.125,
          xxl: 1.25,
        },
      },
      lineHeight: {
        baseline: {
          base: 1.4,
          xxl: 1.8,
        },
      },
      colors: {
        current: 'currentColor',
        primary: '#09c',
        light: '#fff',
        light1: '#f7f7f7',
        light2: '#e4e4e4',
        light3: '#d4d4d4',
        dark: '#000',
        dark1: '#333',
        dark2: '#555',
        social: {
          twitter: '#1da1f2',
          instagram: '#b33391',
          github: '#333',
          linkedin: '#0177b5',
          mastodon: '#5A48DD',
        },
      },
      boxShadow: {
        inner: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.1)',
        outer: '0 4px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      maxWidth: {
        text: '35em',
        content: '60rem',
      },
      screens: {
        sm: '40em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        xxl: '90em',
        xxxl: '160em',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const rhythms = 20;
      const keys = Object.keys(theme('fontSize.root'));
      const scaleFactors = theme('fontSize.scaleFactor');
      const lineHeights = theme('lineHeight.baseline');
      let utilities = {};

      for (let units = 1, l = rhythms; units <= l; units++) {
        let unitUtilities = {};

        keys.forEach((key) => {
          const variant = key !== 'base' ? `-${key}` : '';
          const vru = units * lineHeights[key];

          unitUtilities = {
            ...unitUtilities,
            [`.h-${units}-vru${variant}`]: {
              height: `${units * lineHeights[key]}rem`,
            },
            [`.m-${units}-vru${variant}`]: {
              margin: `${vru}rem`,
            },
            [`.mx-${units}-vru${variant}`]: {
              marginLeft: `${vru}rem`,
              marginRight: `${vru}rem`,
            },
            [`.my-${units}-vru${variant}`]: {
              marginTop: `${vru}rem`,
              marginBottom: `${vru}rem`,
            },
            [`.mt-${units}-vru${variant}`]: {
              marginTop: `${vru}rem`,
            },
            [`.mb-${units}-vru${variant}`]: {
              marginBottom: `${vru}rem`,
            },
            [`.mr-${units}-vru${variant}`]: {
              marginRight: `${vru}rem`,
            },
            [`.ml-${units}-vru${variant}`]: {
              marginLeft: `${vru}rem`,
            },
            [`.p-${units}-vru${variant}`]: {
              padding: `${vru}rem`,
            },
            [`.px-${units}-vru${variant}`]: {
              paddingLeft: `${vru}rem`,
              paddingRight: `${vru}rem`,
            },
            [`.py-${units}-vru${variant}`]: {
              paddingTop: `${vru}rem`,
              paddingBottom: `${vru}rem`,
            },
            [`.pt-${units}-vru${variant}`]: {
              paddingTop: `${vru}rem`,
            },
            [`.pb-${units}-vru${variant}`]: {
              paddingBottom: `${vru}rem`,
            },
            [`.pr-${units}-vru${variant}`]: {
              paddingRight: `${vru}rem`,
            },
            [`.pl-${units}-vru${variant}`]: {
              paddingLeft: `${vru}rem`,
            },
          };
        });

        utilities = {
          ...utilities,
          ...unitUtilities,
        };
      }

      for (let i = 0, l = 6; i < l; i++) {
        const vru = i + 1;
        let unitUtilities = {};

        keys.forEach((key) => {
          const variant = key !== 'base' ? `-${key}` : '';

          const fontSize = ((+scaleFactors[key]) ** (l - i)).toFixed(3);
          const lines = Math.round(+fontSize) + 1;
          const margin = (lines - fontSize) * lineHeights[key];

          unitUtilities = {
            ...unitUtilities,
            [`.text-h${vru}${variant}`]: { fontSize: `${fontSize}rem` },
            [`.my-h${vru}${variant}`]: {
              marginTop: `${margin / 2}rem`,
              marginBottom: `${margin / 2}rem`,
            },
            [`.mt-h${vru}${variant}`]: { marginTop: `${margin}rem` },
            [`.mb-h${vru}${variant}`]: { marginBottom: `${margin}rem` },
          };
        });

        utilities = {
          ...utilities,
          ...unitUtilities,
        };
      }

      addUtilities(utilities);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
