import { FC, useState } from 'react';
import { Button } from '@mui/material';
import uniqid from 'uniqid';
import { AddIngredients } from 'pages/pot-instance/components';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import PotView, {
  PotViewState
} from 'pages/pot-instance/components/PotView/PotView';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

const PotInstance: FC = () => {
  const [potType, usePotType] = useState(0);
  const [hotpotStart, setHotpotStart] = useState(false);
  const [potContent, setPotContent] = useState<PotContent[]>([]);
  const [cookedPotContent, setCookedPotContent] = useState<PotContent[]>([]);

  // functions to update the landing page
  const updatePotType = (type: number) => {
    usePotType(type);
  };

  const startHotPot = () => {
    setHotpotStart(true);
  };

  const endHotPotSession = () => {
    setHotpotStart(false);
  };

  // TODO: should we add time when item was completed to this?
  const addToCookedPot = (foods: PotContent[]) => {
    setCookedPotContent([...cookedPotContent, ...foods]);
  };

  // function takes in the item sent by the parent when an ingredients is added to the pot and updates the foodtimerObj state
  const addFoodTimer = (
    itemName: string,
    itemCategory: string,
    startTime: number,
    finishTime: number,
    remainingTime: number
  ) => {
    const tempObj = potContent;
    let addObj = {} as PotContent;
    addObj = {
      id: uniqid(),
      name: itemName,
      category: itemCategory,
      currentTime: startTime,
      endTime: finishTime,
      timeLeft: remainingTime
    };
    tempObj.push(addObj);
    tempObj.sort((a, b) => a.currentTime - b.currentTime);
    setPotContent([...tempObj]);
  };

  return (
    <>
      <LandingPage
        updatePotType={updatePotType}
        startHotPot={startHotPot}
        hotpotStart={hotpotStart}
      />

      <AddIngredients addFoodTimer={addFoodTimer} />

      <PotView
        state={PotViewState.Detailed}
        potContent={potContent}
        setPotContent={setPotContent}
        addToCookedPot={addToCookedPot}
      />

      <div>Pot Type: {potType} Flavor </div>

      <Button
        id={styles.endSession}
        variant="contained"
        onClick={endHotPotSession}
      >
        End Session
      </Button>
    </>
  );
};

export default PotInstance;
