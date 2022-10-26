import { useEffect } from 'react';

import { useTheme } from '~hooks/useTheme';

import type { PropsWithChildren } from '~types';

export const FontFaceLoader = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const {
    fonts: { typefaces = [], classNames },
  } = useTheme();

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await Promise.all(
          typefaces.map(
            async (name) => await document.fonts.load(`normal 1em ${name}`)
          )
        );

        document.body.classList.add(...classNames);
      } catch {
        console.error('An error occurred during font loading');
      }
    })();
  }, [typefaces, classNames]);

  return <div id="font-face-loader">{children}</div>;
};
