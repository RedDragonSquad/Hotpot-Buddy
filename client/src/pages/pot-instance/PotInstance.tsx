import { FC, useState } from 'react';
import { Button } from '@mui/material';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import PotView, {
  PotViewState
} from 'pages/pot-instance/components/PotView/PotView';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

const PotInstance: FC = () => {
  const [hotpotStart, setHotpotStart] = useState(false);
  const [cookedPotContent, setCookedPotContent] = useState<PotContent[]>([]);
  const [soupbase, useSoupbase] = useState(['']);

  const startHotPot = (newSoupbase: string[]) => {
    setHotpotStart(true);
    const potImages = 2;
    const tempSoupbase = newSoupbase;
    // If there is only one flavor selected, this duplicates the soupbase so that it can render both sides of the pot
    if (tempSoupbase.length < potImages) {
      tempSoupbase.push(tempSoupbase[0]);
    }
    useSoupbase(tempSoupbase);
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

      <PotView state={PotViewState.Detailed} addToCookedPot={addToCookedPot} />

      <div>
        <img
          className={styles.leftPot}
          src={`${process.env.PUBLIC_URL}/assets/${soupbase[0]}.svg`}
          alt="leftPot"
        />
        <img
          className={styles.rightPot}
          src={`${process.env.PUBLIC_URL}/assets/${soupbase[1]}.svg`}
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
