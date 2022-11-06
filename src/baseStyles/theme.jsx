import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    common: {
      dark: '#001e3c',
      white: '#cccdce',
    },
    primary: {
      main: '#039be5',
      secondary: '#cccdce',
      contrastText: '#eceff1',
    },
    secondary: {
      main: '#eceff1',
    },
    background: {
      paper: '#fefefe',
      default: '#e1f5fe',
    },
    text: {
      primary: '#001e3c',
      secondary: '#989a9b',
    },
    divider: '',
    actions: {},
  },
  spacing: factor => `${4 * factor}px`,
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    button: {
      textTransform: 'capitalize',
    },
  },
  transitions: {},
});

// export const theme = {
//   colors: {
//     blue: '#2979ff',
//     lightblue: 'lightblue',
//     lightgrey: 'lightgrey',
//     white: 'white',
//     black: 'black',
//     green: 'green',
//     red: 'red',
//   },
//   options: {
//     shadowInner: '0px 5px 10px 2px rgba(151, 163, 172, 0.5) inset',
//     borderRadius: '4px',
//     outlineColor: '#2979ff',
//     border: '1px solid rgb(41 121 255)',
//   },
//   spacing: value => `${4 * value}px`,
// };
// import { amber, deepOrange, grey } from '@mui/material/colors';

// export const getDesignTokens = prefersDarkMode => ({
//   palette: {
//     mode: prefersDarkMode ? 'dark' : 'light',
//     ...(prefersDarkMode === 'light'
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: '#2196f3',
//           background: {
//             default: '#0a1929',
//             paper: '#0a1929',
//           },
//           text: {
//             primary: '#cccdce',
//             secondary: '#cccdce',
//           },
//         }),
//   },
// });
