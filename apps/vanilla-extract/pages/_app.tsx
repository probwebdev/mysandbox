import { type AppProps } from 'next/app';

import { FontFaceLoader } from '~/components/FontFaceLoader';
import { ThemeProvider } from '~/theme/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <FontFaceLoader>
      <Component {...pageProps} />
    </FontFaceLoader>
  </ThemeProvider>
);

export default MyApp;
