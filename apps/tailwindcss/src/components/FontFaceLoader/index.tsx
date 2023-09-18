import { useEffect, type PropsWithChildren } from 'react';

import { useTheme } from '~/hooks/useTheme';

export const FontFaceLoader = ({ children }: PropsWithChildren) => {
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
