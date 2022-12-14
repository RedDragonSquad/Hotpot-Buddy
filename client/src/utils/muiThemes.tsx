import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      background: {
        main: string;
        secondary1: string;
        secondary2: string;
      };
      toggleButton: {
        main: string;
        secondary1: string;
      };
    };
  }
  // to create custom configurations using 'createTheme'
  interface ThemeOptions {
    customPalette?: {
      background?: {
        main?: string;
        secondary1?: string;
        secondary2?: string;
      };
      toggleButton?: {
        main?: string;
        secondary1?: string;
      };
    };
  }
}

const theme = createTheme({
  customPalette: {
    background: {
      main: '#14141499',
      secondary1: '#14141499',
      secondary2: '#23232399'
    },
    toggleButton: {
      main: '#140C064C',
      secondary1: '#140C0680'
    }
  }
});

export default theme;
