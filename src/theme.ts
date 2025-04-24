import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create base theme with responsive values
let theme = createTheme({
  palette: {
    primary: {
      main: "#c96342",
      light: "#d7815e",
      dark: "#b84a2e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f0eee6",
      light: "#faf9f6",
      dark: "#d8d6cf",
      contrastText: "#000000",
    },
    background: {
      default: "#faf9f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
    error: {
      main: "#ca061b",
    },
    warning: {
      main: "#f9a901",
    },
    info: {
      main: "#5f007d",
    },
    success: {
      main: "#107d47",
    },
  },
  typography: {
    fontFamily:
      "'Taurusgroteskroman Vf', 'Apple UI', 'Lato', 'Outfit', sans-serif",
    h1: {
      fontSize: "clamp(32px, 7vw, 64px)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(28px, 5vw, 48px)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(22px, 4vw, 36px)",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "clamp(18px, 3vw, 28px)",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "clamp(16px, 2.5vw, 24px)",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "clamp(14px, 2vw, 20px)",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "clamp(14px, 1.5vw, 18px)",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "clamp(12px, 1.2vw, 14px)",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 8px 16px rgba(201, 99, 66, 0.2)",
          },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "@media (max-width:600px)": {
            padding: "8px 16px",
            fontSize: "14px",
          },
        },
        contained: {
          "&:hover": {
            backgroundColor: "#b84a2e",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
        // Size variants for better mobile support
        sizeSmall: {
          padding: "6px 16px",
          fontSize: "0.8125rem",
        },
        sizeMedium: {
          padding: "8px 20px",
          fontSize: "0.875rem",
        },
        sizeLarge: {
          padding: "10px 22px",
          fontSize: "0.9375rem",
          "@media (min-width:600px)": {
            padding: "12px 24px",
            fontSize: "1rem",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: "16px",
        },
        elevation1: {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        },
        elevation2: {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        },
        elevation3: {
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
        },
        elevation4: {
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "64px",
          "@media (min-width: 600px)": {
            minHeight: "72px",
          },
          "@media (min-width: 960px)": {
            minHeight: "80px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textRendering: "optimizeLegibility",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          hyphens: "auto",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overscroll-behavior: none;
          scroll-behavior: smooth;
        }
        @media (max-width: 600px) {
          html {
            font-size: 14px;
          }
        }
        @media (min-width: 601px) and (max-width: 960px) {
          html {
            font-size: 15px;
          }
        }
        @media (min-width: 961px) {
          html {
            font-size: 16px;
          }
        }
        img {
          max-width: 100%;
          height: auto;
        }
        /* Touch-friendly buttons for mobile */
        @media (max-width: 600px) {
          button, [role="button"], a.MuiButtonBase-root {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `,
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "@media (max-width: 600px)": {
            padding: "8px",
          },
        },
        sizeSmall: {
          "@media (max-width: 600px)": {
            padding: "4px",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
  factor: 2, // Larger factor means less variation
});

export default theme;
