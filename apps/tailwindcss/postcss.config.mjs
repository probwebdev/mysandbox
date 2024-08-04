const plugins = [
  'postcss-import',
  ['tailwindcss/nesting', 'postcss-nesting'],
  'tailwindcss',
  [
    'postcss-preset-env',
    {
      stage: 2,
      features: {
        'nesting-rules': false,
        'prefers-color-scheme-query': true,
      },
    },
  ],
];

export default {
  plugins,
};
