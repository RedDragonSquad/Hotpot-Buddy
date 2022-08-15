import { Button } from '@mui/material';
import FoodTimerList from 'pages/pot-instance/FoodTimerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* TODO: remove later, testing material-ui */}
        <Button variant="contained">Contained</Button>
        <FoodTimerList />
      </header>
    </div>
  );
}

export default App;
