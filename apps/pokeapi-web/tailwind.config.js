/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/!(*.d).{js,jsx,ts,tsx}',
    './src/**/!(*.d).{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        card: '35em',
        content: '60rem',
      },
      minHeight: {
        card: '35rem',
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
  corePlugins: {
    preflight: false,
  },
};
