import { Inter, JetBrains_Mono, Oswald } from '@next/font/google';

const oswald = Oswald({
  variable: '--brand-font',
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});
const inter = Inter({
  variable: '--text-font',
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});
const mono = JetBrains_Mono({
  variable: '--code-font',
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});
const classNames = [
  oswald.variable ?? '',
  inter.variable ?? '',
  mono.variable ?? '',
  'fonts-loaded',
];
const typefaces = [
  oswald.style.fontFamily,
  inter.style.fontFamily,
  mono.style.fontFamily,
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
