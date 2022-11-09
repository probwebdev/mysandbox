import { typefaces, classNames } from './styles';

export interface ThemeFonts {
  typefaces: string[];
  classNames: string[];
}

export interface Theme {
  fonts: ThemeFonts;
}

export { vars } from './styles';

export const theme: Theme = {
  fonts: {
    typefaces,
    classNames,
  },
};
