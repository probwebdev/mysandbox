import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '~/css/core.css';

import { FontFaceLoader } from '~/components/FontFaceLoader';
import { ThemeProvider } from '~/theme/ThemeProvider';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <FontFaceLoader>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </FontFaceLoader>
  </ThemeProvider>
);

export default MyApp;
