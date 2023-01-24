import { useContext } from 'react';

import type { Theme } from '~/theme';
import { ThemeContext } from '~/theme/ThemeProvider';

export const useTheme = (): Theme => useContext(ThemeContext);
