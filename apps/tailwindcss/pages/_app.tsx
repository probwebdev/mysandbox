import { Analytics } from '@vercel/analytics/react';
import { type AppProps } from 'next/app';

import { FontFaceLoader } from '~components/FontFaceLoader';
import { ThemeProvider } from '~theme/ThemeProvider';

import '~/src/css/core.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <FontFaceLoader>
      <Component {...pageProps} />
      <Analytics />
    </FontFaceLoader>
  </ThemeProvider>
);

export default MyApp;
