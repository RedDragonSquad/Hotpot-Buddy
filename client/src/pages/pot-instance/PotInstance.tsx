import { FC, useState } from 'react';
import { Button } from '@mui/material';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import ShowCompleted from 'pages/pot-instance/components/StatsContainer/ShowStats';
import {
  PotView,
  PotViewState,
  PotViewSwitcher
} from 'pages/pot-instance/components/PotView';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

const PotInstance: FC = () => {
  const [hotpotStart, setHotpotStart] = useState(false);
  // used for stats, finished item tracker etc.
  const [finishedItems, setFinishedItems] = useState<PotContent[]>([]);
  const [soupbase, useSoupbase] = useState(['']);
  const [potViewState, setPotViewState] = useState<PotViewState>(
    PotViewState.Detailed
  );

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

  const addToCookedPot = (foods: PotContent[]) => {
    setFinishedItems([...finishedItems, ...foods]);
  };

  return (
    <>
      <LandingPage startHotPot={startHotPot} hotpotStart={hotpotStart} />

      <PotViewSwitcher
        selectedValue={potViewState}
        onChange={(value: PotViewState) => {
          setPotViewState(PotViewState[value]);
        }}
      />
      <PotView state={potViewState} addToCookedPot={addToCookedPot} />

      <div className={styles.potImgContainer}>
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

      <ShowCompleted finishedItems={finishedItems} />

      <div id={styles.endSessionBtnContainer}>
        <Button
          id={styles.endSession}
          variant="contained"
          onClick={endHotPotSession}
        >
          End Session
        </Button>
      </div>
    </>
  );
};

export default PotInstance;
