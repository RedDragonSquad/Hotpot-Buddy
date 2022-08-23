import { Button } from '@mui/material';
import { FC } from 'react';
import styles from './styles.module.css';

// https://pngtree.com/free-backgrounds-photos/spicy-hot-pot

interface Props {
  updatePotType: (type: number) => void;
  startHotPot: () => void;
  hotpotStart: boolean;
}

const LandingPage: FC<Props> = ({
  updatePotType,
  startHotPot,
  hotpotStart
}) => {
  if (hotpotStart) {
    return <>error</>;
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
                updatePotType(1);
              }}
              className={styles.flavors}
            >
              One Flavor
            </button>
            <button
              type="button"
              onClick={() => {
                updatePotType(2);
              }}
              className={styles.flavors}
            >
              Two Flavors
            </button>
            <button
              type="button"
              onClick={() => {
                updatePotType(4);
              }}
              className={styles.flavors}
            >
              Four Flavors
            </button>
          </div>
        </div>
        <div className={styles.selectBroth}>
          Select Broth
          <div className={styles.selectBrothType}>
            <button type="button" className={styles.soupbases}>
              Sukiyaki Soupbase
            </button>
            <button type="button" className={styles.soupbases}>
              Spicy Soupbase
            </button>
            <button type="button" className={styles.soupbases}>
              Ox Bone Soupbase
            </button>
            <button type="button" className={styles.soupbases}>
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
