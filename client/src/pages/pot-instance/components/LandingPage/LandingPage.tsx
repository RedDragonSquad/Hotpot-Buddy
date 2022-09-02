import * as React from 'react';
import { Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { FC, useState } from 'react';
import styles from './styles.module.css';

// https://pngtree.com/free-backgrounds-photos/spicy-hot-pot

interface Props {
  startHotPot: (soupbase: string[]) => void;
  hotpotStart: boolean;
}

const LandingPage: FC<Props> = ({ startHotPot, hotpotStart }) => {
  const [potType, usePotType] = useState('1');
  const [soupbase, useSoupbase] = useState(['']);

  // functions to update the landing page
  const handlePotChange = (newAlignment: string) => {
    // queue for soupbase based on potType number
    const soupbaseTemp = soupbase;
    let i = soupbaseTemp.length;
    while (i > parseInt(newAlignment, 10)) {
      soupbaseTemp.shift();
      i -= 1;
    }
    useSoupbase([...soupbaseTemp]);
  };

  // stores soupbase based on a queue datastructure depending on the length specified by potType.
  const selectSoupBase = (type: string) => {
    const soupbaseTemp = soupbase;
    let i = soupbaseTemp.length;
    while (i >= parseInt(potType, 10)) {
      soupbaseTemp.shift();
      i -= 1;
    }
    soupbaseTemp.push(type);
    useSoupbase([...soupbaseTemp]);
  };

  // updates the toggle buttons for pot type. enforces that one is always toggled
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      usePotType(newAlignment);
      handlePotChange(newAlignment);
    }
  };

  if (hotpotStart) {
    return <> </>;
  }
  return (
    <div id={styles.selectPotContainer}>
      <img
        id={styles.hotpotBackground}
        src={`${process.env.PUBLIC_URL}/assets/hotPotBackground.jpg`}
        alt="hotpot background"
      />
      <div id={styles.selectPot}>
        <div className={styles.selectItem}>
          Select Pot Type
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={potType}
            onChange={handleChange}
            className={styles.selectType}
          >
            <ToggleButton value="1" className={styles.flavors}>
              One Flavor
            </ToggleButton>
            <ToggleButton value="2" className={styles.flavors}>
              Two Flavors
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={styles.selectBroth}>
          Select Soupbase
          <ToggleButtonGroup
            color="primary"
            value={soupbase}
            className={styles.selectBrothType}
          >
            <ToggleButton
              onClick={() => selectSoupBase('spicy')}
              value="spicy"
              className={styles.soupbases}
            >
              Spicy Soupbase
            </ToggleButton>
            <ToggleButton
              onClick={() => selectSoupBase('bone')}
              value="bone"
              className={styles.soupbases}
            >
              Ox Bone Soupbase
            </ToggleButton>
            <ToggleButton
              onClick={() => selectSoupBase('tomato')}
              value="tomato"
              className={styles.soupbases}
            >
              Tomato Soupbase
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Button
          onClick={() => startHotPot(soupbase)}
          type="button"
          variant="contained"
          id={styles.startHotPotBtn}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
