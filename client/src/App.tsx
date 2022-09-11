import { createTheme, ThemeProvider } from '@mui/material/styles';
import PotInstance from 'pages/pot-instance/PotInstance';
import './App.css';

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      background: {
        main: string;
        secondary1: string;
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
      secondary1: '#14141499'
    },
    toggleButton: {
      main: '#140C064C',
      secondary1: '#140C0680'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <PotInstance />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
