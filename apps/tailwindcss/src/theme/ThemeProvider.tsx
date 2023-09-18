import { createContext, type PropsWithChildren } from 'react';

import { theme } from './index';

import type { Theme } from './index';

export const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
