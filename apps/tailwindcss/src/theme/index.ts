import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--text-font',
  preload: false,
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});
const mono = JetBrains_Mono({
  variable: '--code-font',
  preload: false,
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});

const classNames = [inter.variable ?? '', mono.variable ?? '', 'fonts-loaded'];
const typefaces = [
  inter.style.fontFamily.split(',')[0],
  mono.style.fontFamily.split(',')[0],
];

export interface ThemeFonts {
  typefaces: string[];
  classNames: string[];
}

export interface Theme {
  fonts: ThemeFonts;
}

export const theme: Theme = {
  fonts: {
    typefaces,
    classNames,
  },
};
