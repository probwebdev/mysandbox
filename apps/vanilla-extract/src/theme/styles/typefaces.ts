import { Inter, JetBrains_Mono, Oswald } from 'next/font/google';

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

export const classNames: string[] = [
  oswald.variable ?? '',
  inter.variable ?? '',
  mono.variable ?? '',
  'fonts-loaded',
];
export const typefaces: string[] = [
  oswald.style.fontFamily,
  inter.style.fontFamily,
  mono.style.fontFamily,
];
