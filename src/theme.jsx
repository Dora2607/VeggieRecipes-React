import { createTheme } from '@mui/material/styles';

const lightThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8da745',
    },
    secondary: {
      main: '#fed511',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      section: 'rgba(254, 213, 17, 0.2)'
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightRegular: 400,
  },
};

const darkThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#8da745',
    },
    secondary: {
      main: '#fed511',
    },
    background: {
      default: '#121212',
      paper: '#121212',
      section: 'rgba(0, 0, 0, 0.3)'
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightRegular: 400,
  },
};

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

export { lightThemeOptions, darkThemeOptions, lightTheme, darkTheme };
