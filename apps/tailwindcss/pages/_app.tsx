import { Analytics } from '@vercel/analytics/react';
import { type AppProps } from 'next/app';

import '~/css/core.css';

import { FontFaceLoader } from '~/components/FontFaceLoader';
import { ThemeProvider } from '~/theme/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <FontFaceLoader>
      <Component {...pageProps} />
      <Analytics />
    </FontFaceLoader>
  </ThemeProvider>
);

export default MyApp;
