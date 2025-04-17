import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'ltr', // Explicitly set to LTR
  palette: {
    primary: {
      main: '#2E7D32', // Green
      light: '#81C784',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFA000', // Amber
      light: '#FFC947',
      dark: '#FF8F00',
      contrastText: '#000000',
    },
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans Devanagari',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

export default theme;