import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
  fontVariationSettings: '"slnt" 0',
});

globalStyle('html', {
  MozTextSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('#root, #__next', {
  isolation: 'isolate',
});

globalStyle('textarea', {
  fontSize: 'inherit',
});

globalStyle('pre, code, kbd, samp', {
  fontFamily: 'monospace',
  fontSize: '1rem',
  lineHeight: '1.5',
});
