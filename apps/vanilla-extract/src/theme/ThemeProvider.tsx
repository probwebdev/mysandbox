import { createContext, type PropsWithChildren } from 'react';

import { theme } from './index';

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
