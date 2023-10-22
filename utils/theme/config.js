import { createTheme } from '@mui/material/styles'

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
};

const theme = createTheme(themeOptions);

export { theme }
