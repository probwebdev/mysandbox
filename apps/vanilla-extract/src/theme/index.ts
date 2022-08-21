import { typefaces } from './styles';

import type { Typefaces } from './styles';

export interface ThemeFonts {
  typefaces: Typefaces;
  classNames: string[];
}

export interface Theme {
  fonts: ThemeFonts;
}

export { vars } from './styles';

export const theme: Theme = {
  fonts: {
    typefaces,
    classNames: ['fonts-loaded'],
  },
};
