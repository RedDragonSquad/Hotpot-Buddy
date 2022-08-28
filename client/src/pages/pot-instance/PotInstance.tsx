import { FC, useState } from 'react';
import { Button } from '@mui/material';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import { PotContent } from 'pages/pot-instance/models';
import FoodTimerList from './components/FoodTimerList/FoodTimerList';
import styles from './styles.module.css';

const PotInstance: FC = () => {
  const [potType, usePotType] = useState(0);
  const [hotpotStart, useHotpotStart] = useState(false);
  const [cookedPotContent, useCookedPotContent] = useState<PotContent[]>([]);

  // functions to update the landing page
  const updatePotType = (type: number) => {
    usePotType(type);
  };

  const startHotPot = () => {
    useHotpotStart(true);
  };

  // should we add time when item was completed to this?
  const addCookedPot = (food: PotContent) => {
    const tempArray = cookedPotContent;
    tempArray.push(food);
    useCookedPotContent([...tempArray]);
  };

  return (
    <>
      <LandingPage
        updatePotType={updatePotType}
        startHotPot={startHotPot}
        hotpotStart={hotpotStart}
      />
      <FoodTimerList hotpotStart={hotpotStart} addCookedPot={addCookedPot} />
      <div>Pot Type: {potType} Flavor </div>
      <Button id={styles.endSession} variant="contained">
        End Session
      </Button>
    </>
  );
};

export default PotInstance;
