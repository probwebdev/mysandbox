import { FontFaceLoader } from '~components/FontFaceLoader';
import { ThemeProvider } from '~theme/ThemeProvider';

import '~/src/css/core.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <FontFaceLoader>
      <Component {...pageProps} />
    </FontFaceLoader>
  </ThemeProvider>
);

export default MyApp;
