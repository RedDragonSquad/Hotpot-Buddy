import { FC, useState } from 'react';
import { Button } from '@mui/material';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

const PotInstance: FC = () => {
  const [potType, usePotType] = useState(0);
  const [hotpotStart, setHotpotStart] = useState(false);
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

  return (
    <>
      <LandingPage
        updatePotType={updatePotType}
        startHotPot={startHotPot}
        hotpotStart={hotpotStart}
      />

      <PotView state={PotViewState.Detailed} addToCookedPot={addToCookedPot} />

      <div>Pot Type: {potType} Flavor </div>

      <Button
        id={styles.endSession}
        variant="contained"
        onClick={endHotPotSession}
      >
        End Session
      </Button>
      {/* to remove: temporary component to hold the cooked items list */}
      <TestContainer cookedPotContent={cookedPotContent} />
    </>
  );
};

export default PotInstance;
