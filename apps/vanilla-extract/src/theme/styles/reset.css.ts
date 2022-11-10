import { globalStyle } from '@vanilla-extract/css';

globalStyle(':where(*, *::before, *::after)', {
  boxSizing: 'border-box',
});

globalStyle(':where(*)', {
  margin: 0,
  fontVariationSettings: '"slnt" 0',
});

globalStyle(':where(html)', {
  MozTextSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
});

globalStyle(':where(html, body)', {
  height: '100%',
});

globalStyle(':where(body)', {
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
});

globalStyle(':where(img, picture, video, canvas, svg)', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle(':where(input, button, textarea, select)', {
  font: 'inherit',
});

globalStyle(':where(p, h1, h2, h3, h4, h5, h6)', {
  overflowWrap: 'break-word',
});

globalStyle(':where(#root, #__next)', {
  isolation: 'isolate',
});

globalStyle(':where(textarea)', {
  fontSize: 'inherit',
});

globalStyle(':where(pre, code, kbd, samp)', {
  fontFamily: 'monospace',
  fontSize: '1rem',
  lineHeight: '1.5',
});
