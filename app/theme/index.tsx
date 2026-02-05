'use client';

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003876',
    },
    secondary: {
      main: '#E30238',
    },
    info: {
      main: '#6DB0E2',
    },
    background: {
      // default: "#EFF7FF",
      default: '#ffffff',
    },
  },

  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontWeight: '600',
      fontSize: '50px',
      lineHeight: '70px',
      color: '#003876',
    },
    h2: {
      fontWeight: '600',
      fontSize: '50px',
      lineHeight: '90px',
      color: '#6DB0E2',
    },
    h5: {
      fontWeight: '600',
    },
    body1: {
      fontSize: '18px',
      color: '#433E3E',
      fontWeight: '400',
      lineHeight: '35px',
    },
    body2: {
      fontSize: '18px',
      color: '#433E3E',
      fontWeight: '400',
      lineHeight: '35px',
    },
    subtitle2: {
      fontWeight: '700',
      fontSize: '32px',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: '60px',
          height: '40px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderTop: '4px solid red',
          boxShadow: '0px 3px 6px #f3f3f3',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: '16px',
          fontWeight: '400',
          color: '#003579',
          overflow: 'unset',

          '& span': {
            color: red[500],
          },
        },
      },
    },
    MuiFormLabel: {
      defaultProps: {
        sx: {
          fontSize: '16px',
          fontWeight: '400',

          '& span': {
            color: red[500],
          },
        },
      },
    },
    // MuiTextField: {
    //   defaultProps: {
    //     sx: {
    //       '& .MuiInputBase-root': {
    //         background: '#F8F8F8',
    //       },
    //     }
    //   }
    // },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: '#0087FF',
          },
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }: any) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
