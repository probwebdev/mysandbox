import { createGlobalTheme } from '@vanilla-extract/css';

import { typefaces } from './typefaces';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#09c',
    light: '#fff',
    light1: '#f7f7f7',
    light2: '#e4e4e4',
    light3: '#d4d4d4',
    dark: '#000',
    dark1: '#333',
    dark2: '#555',
    twitter: '#1da1f2',
    instagram: '#b33391',
    github: '#333',
    linkedin: '#0177b5',
  },
  font: {
    brand: `"${typefaces.brand}"`,
    text: `"${typefaces.text}"`,
    mono: `"${typefaces.mono}"`,
  },
});
