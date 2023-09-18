import { Inter, JetBrains_Mono as JetBrainsMono } from 'next/font/google';

const inter = Inter({
  variable: '--text-font',
  preload: false,
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});
const mono = JetBrainsMono({
  variable: '--code-font',
  preload: false,
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});

const classNames = [inter.variable, mono.variable, 'fonts-loaded'].filter(
  Boolean
);
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
