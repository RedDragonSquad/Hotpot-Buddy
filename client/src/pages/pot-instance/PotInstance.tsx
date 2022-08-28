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

  // TO DO:
  // cookedPotContent should be in this page.
  // have it also get added to potContent via addFoodtimer. It can handle the movement there on its own.
  // Once it gets REMOVED from the potContent, have it callback and add to cookedpotcontent here.
  // That way the timer does not affect this component.
  // Can create components that use the state of cookedPotContent
  // like stats + rating + details + end screen etc.

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
