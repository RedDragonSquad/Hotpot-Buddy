import { ThemeProvider } from '@mui/material/styles';
import theme from 'utils/muiThemes';
import PotInstance from 'pages/pot-instance/PotInstance';
import './App.css';

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
