import { FC, useState } from 'react';
import { Button } from '@mui/material';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import PotView, {
  PotViewState
} from 'pages/pot-instance/components/PotView/PotView';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

const PotInstance: FC = () => {
  const [hotpotStart, useHotpotStart] = useState(false);
  const [cookedPotContent, useCookedPotContent] = useState<PotContent[]>([]);

  const startHotPot = () => {
    useHotpotStart(true);
  };

  const endHotPotSession = () => {
    setHotpotStart(false);
  };

  // TODO: should we add time when item was completed to this?
  const addToCookedPot = (foods: PotContent[]) => {
    setCookedPotContent([...cookedPotContent, ...foods]);
  };

  return (
    <>
      <LandingPage startHotPot={startHotPot} hotpotStart={hotpotStart} />
      <FoodTimerList hotpotStart={hotpotStart} addCookedPot={addCookedPot} />
      <div>
        <img
          className={styles.leftPot}
          src={`${process.env.PUBLIC_URL}/assets/spicy.svg`}
          alt="leftPot"
        />
        <img
          className={styles.rightPot}
          src={`${process.env.PUBLIC_URL}/assets/bone.svg`}
          alt="rightPot"
        />
      </div>
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
