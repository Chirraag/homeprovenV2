import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c96342',
      light: '#d7815e',
      dark: '#b84a2e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f0eee6',
      light: '#faf9f6',
      dark: '#d8d6cf',
      contrastText: '#000000',
    },
    background: {
      default: '#faf9f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    error: {
      main: '#ca061b',
    },
    warning: {
      main: '#f9a901',
    },
    info: {
      main: '#5f007d',
    },
    success: {
      main: '#107d47',
    },
  },
  typography: {
    fontFamily: "'Taurusgroteskroman Vf', 'Apple UI', 'Lato', 'Outfit', sans-serif",
    h1: {
      fontSize: 'clamp(36px, 8vw, 64px)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(32px, 6vw, 48px)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 'clamp(24px, 4vw, 36px)',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 'clamp(20px, 3vw, 28px)',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 'clamp(18px, 2.5vw, 24px)',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 'clamp(16px, 2vw, 20px)',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 'clamp(16px, 1.5vw, 18px)',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '8px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(201, 99, 66, 0.2)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          '&:hover': {
            backgroundColor: '#b84a2e',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: '16px',
        },
        elevation1: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        },
        elevation3: {
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
        },
        elevation4: {
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '72px',
          '@media (min-width: 600px)': {
            minHeight: '80px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textRendering: 'optimizeLegibility',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

export default theme;