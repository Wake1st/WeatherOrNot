import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#29b6f6',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#4caf50',
    },
  },
});