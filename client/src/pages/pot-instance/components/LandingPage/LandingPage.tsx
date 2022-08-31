import { Button } from '@mui/material';
import { FC, useState } from 'react';
import styles from './styles.module.css';

// https://pngtree.com/free-backgrounds-photos/spicy-hot-pot

interface Props {
  startHotPot: () => void;
  hotpotStart: boolean;
}

const LandingPage: FC<Props> = ({ startHotPot, hotpotStart }) => {
  const [potType, usePotType] = useState(0);
  const [soupbase, useSoupbase] = useState(['']);

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

  // stores soupbase based on a queue datastructure depending on the length specified by potType
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
          <div className={styles.selectType}>
            <button
              type="button"
              onClick={() => {
                selectPotType(1);
              }}
              className={styles.flavors}
            >
              One Flavor
            </button>
            <button
              type="button"
              onClick={() => {
                selectPotType(2);
              }}
              className={styles.flavors}
            >
              Two Flavors
            </button>
          </div>
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
          onClick={startHotPot}
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
