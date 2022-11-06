const globalStylesOptions = {
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    margin: 0,
    fontFamily: `${({ theme: { typography } }) => typography.fontFamily}`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    background: `${({ theme: { palette } }) => palette.background.default}`,
    fontSize: `${({ theme: { typography } }) => typography.htmlFontSize}`,
  },
  '#root': {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  code: {
    fontFamily: [
      'Roboto',
      'source-code-pro',
      'Menlo',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ].join(','),
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  },
  p: {
    margin: 0,
  },
};
export default globalStylesOptions;
