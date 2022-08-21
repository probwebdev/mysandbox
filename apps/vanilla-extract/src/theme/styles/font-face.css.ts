import { globalFontFace } from '@vanilla-extract/css';

import { typefaces } from './typefaces';

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.cyrillic.woff2?v=1.0") format("woff2")',
  unicodeRange: 'U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116',
});

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.cyrillic-ext.woff2?v=1.0") format("woff2")',
  unicodeRange:
    'U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F',
});

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.greek.woff2?v=1.0") format("woff2")',
  unicodeRange: 'U+0370-03FF',
});

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.greek-ext.woff2?v=1.0") format("woff2")',
  unicodeRange: 'U+1F00-1FFF',
});

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.vietnamese.woff2?v=1.0") format("woff2")',
  unicodeRange:
    'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB',
});

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.latin.woff2?v=1.0") format("woff2")',
  unicodeRange:
    'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
});

globalFontFace(`"${typefaces.brand}"`, {
  fontWeight: '100 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/IBMPlexSans/IBMPlexSans-Variable.latin-ext.woff2?v=1.0") format("woff2")',
  unicodeRange:
    'U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.cyrillic.woff2?v=3.19") format("woff2")',
  unicodeRange: 'U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.cyrillic-ext.woff2?v=3.19") format("woff2")',
  unicodeRange:
    'U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.greek.woff2?v=3.19") format("woff2")',
  unicodeRange: 'U+0370-03FF',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.greek-ext.woff2?v=3.19") format("woff2")',
  unicodeRange: 'U+1F00-1FFF',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.vietnamese.woff2?v=3.19") format("woff2")',
  unicodeRange:
    'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.latin.woff2?v=3.19") format("woff2")',
  unicodeRange:
    'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
});

globalFontFace(`"${typefaces.text}"`, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  src: 'url("/fonts/Inter/Inter.latin-ext.woff2?v=3.19") format("woff2")',
  unicodeRange:
    'U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.cyrillic.woff2?v=2.242") format("woff2")',
  unicodeRange: 'U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.cyrillic-ext.woff2?v=2.242") format("woff2")',
  unicodeRange:
    'U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.greek.woff2?v=2.242") format("woff2")',
  unicodeRange: 'U+0370-03FF',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.greek-ext.woff2?v=2.242") format("woff2")',
  unicodeRange: 'U+1F00-1FFF',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.vietnamese.woff2?v=2.242") format("woff2")',
  unicodeRange:
    'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.latin.woff2?v=2.242") format("woff2")',
  unicodeRange:
    'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
});

globalFontFace(`"${typefaces.mono}"`, {
  fontWeight: '100 800',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: 'url("/fonts/JetBrainsMono/JetBrainsMono-Variable.latin-ext.woff2?v=2.242") format("woff2")',
  unicodeRange:
    'U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF',
});
