import { useContext } from 'react';

import { ThemeContext } from '~/src/theme/ThemeProvider';

import type { Theme } from '~theme';

export const useTheme = (): Theme => useContext(ThemeContext);
