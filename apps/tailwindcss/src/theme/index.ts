export interface ThemeFonts {
  typefaces: string[];
  classNames: string[];
}

export interface Theme {
  fonts: ThemeFonts;
}

export const theme: Theme = {
  fonts: {
    typefaces: [
      'IBM Plex Sans Variable',
      'Inter Variable',
      'JetBrains Mono Variable',
    ],
    classNames: ['fonts-loaded'],
  },
};
