import { type AppProps } from 'next/app';

import { FontFaceLoader } from '~components/FontFaceLoader';

import { ThemeProvider } from '~/src/theme/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <FontFaceLoader>
      <Component {...pageProps} />
    </FontFaceLoader>
  </ThemeProvider>
);

export default MyApp;
