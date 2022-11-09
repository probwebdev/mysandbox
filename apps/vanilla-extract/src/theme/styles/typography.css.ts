import { globalStyle } from '@vanilla-extract/css';

globalStyle(':where(.fonts-loaded)', {
  fontFamily: 'var(--text-font)',
});

globalStyle(':where(.fonts-loaded pre, .fonts-loaded code)', {
  fontFamily: 'var(--code-font)',
  fontWeight: 500,
  fontVariantLigatures: 'normal',
});
