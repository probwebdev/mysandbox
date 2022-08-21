import { useContext } from 'react';

import { ThemeContext } from '~theme/ThemeProvider';

import type { Theme } from '~/src/theme';

export const useTheme = (): Theme => useContext<Theme>(ThemeContext);
