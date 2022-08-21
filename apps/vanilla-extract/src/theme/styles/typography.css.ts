import { globalStyle } from '@vanilla-extract/css';

import { typefaces } from './typefaces';

globalStyle('.fonts-loaded', {
  fontFamily: `"${typefaces.text}"`,
});

globalStyle('.fonts-loaded pre, .fonts-loaded code', {
  fontFamily: `"${typefaces.mono}"`,
  fontWeight: 500,
  fontVariantLigatures: 'normal',
});
