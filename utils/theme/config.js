import { createTheme } from '@mui/material/styles';

const themeOptions = {
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#B9A9B3',
        },
        accent: {
            main: '#B5C9C9'
        },
    },
    // typography: {
    //     fontFamily: 'glacial-regular',
    // },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //         @font-face {
    //             font-family: 'glacial-regular';
    //             scr: local('glacial-regular'), url('./fonts/glacial-regular.woff') format('woff');
    //         }`,
    //     },
    // },
    // typography: {
    //     fontFamily: 'Breathing',
    // },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //         @font-face {
    //             font-family: 'Breathing';
    //             scr: local('Breathing'), url('./fonts/Breathing.tff') format('ttf');
    //         }`,
    //     },
    // },
};

const theme = createTheme(themeOptions);

export { theme }
