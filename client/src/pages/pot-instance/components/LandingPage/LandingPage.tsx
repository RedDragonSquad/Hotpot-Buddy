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
  const [potType, usePotType] = useState(0);
  const [soupbase, useSoupbase] = useState(['']);
  // use to set the toggleButtons via mui
  const [alignment, setAlignment] = useState('one');

  // functions to update the landing page
  const selectPotType = (type: number) => {
    usePotType(type);
    // queue for soupbase based on potType number
    const soupbaseTemp = soupbase;
    let i = soupbaseTemp.length;
    while (i > type) {
      soupbaseTemp.shift();
      i -= 1;
    }
    useSoupbase([...soupbaseTemp]);
  };

  // stores soupbase based on a queue datastructure depending on the length specified by potType.
  const selectSoupBase = (type: string) => {
    const soupbaseTemp = soupbase;
    let i = soupbaseTemp.length;
    while (i >= potType) {
      soupbaseTemp.shift();
      i -= 1;
    }
    soupbaseTemp.push(type);
    useSoupbase([...soupbaseTemp]);
  };

  // updates the toggle buttons for pot type
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
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
            value={alignment}
            onChange={handleChange}
            className={styles.selectType}
          >
            <ToggleButton
              value="one"
              onClick={() => {
                selectPotType(1);
              }}
              className={styles.flavors}
            >
              One Flavor
            </ToggleButton>
            <ToggleButton
              value="two"
              onClick={() => {
                selectPotType(2);
              }}
              className={styles.flavors}
            >
              Two Flavors
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={styles.selectBroth}>
          Select Soupbase
          <div className={styles.selectBrothType}>
            <button
              onClick={() => selectSoupBase('spicy')}
              type="button"
              className={styles.soupbases}
            >
              Spicy Soupbase
            </button>
            <button
              onClick={() => selectSoupBase('bone')}
              type="button"
              className={styles.soupbases}
            >
              Ox Bone Soupbase
            </button>
            <button
              onClick={() => selectSoupBase('tomato')}
              type="button"
              className={styles.soupbases}
            >
              Tomato Soupbase
            </button>
          </div>
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
