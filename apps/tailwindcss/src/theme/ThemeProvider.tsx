import { createContext } from 'react';

import { theme } from './index';

import type { Theme } from './index';
import type { PropsWithChildren } from '~types';

export const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
