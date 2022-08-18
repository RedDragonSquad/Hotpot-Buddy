// to decide if global disable is required
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  if (!hotpotStart) {
    return (
      <div id={styles.selectPotContainer}>
        <img
          id={styles.hotpotBackground}
          // eslint-disable-next-line global-require
          src={require('./assets/hotPotBackground.jpg')}
          alt="hotpot background"
        />
        <div id={styles.selectPot}>
          <div className={styles.selectItem}>
            Select Pot Type
            <div className={styles.selectType}>
              <div
                onClick={() => {
                  updatePotType(1);
                }}
                className={styles.flavors}
              >
                One Flavor
              </div>
              <div
                onClick={() => {
                  updatePotType(2);
                }}
                className={styles.flavors}
              >
                Two Flavors
              </div>
              <div
                onClick={() => {
                  updatePotType(4);
                }}
                className={styles.flavors}
              >
                Four Flavors
              </div>
            </div>
          </div>
          <div className={styles.selectBroth}>
            Select Broth
            <div className={styles.selectBrothType}>
              <div className={styles.soupbases}>Sukiyaki Soupbase</div>
              <div className={styles.soupbases}>Spicy Soupbase</div>
              <div className={styles.soupbases}>Ox Bone Soupbase</div>
              <div className={styles.soupbases}>Tomato Soupbase</div>
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
  }
  return <>error</>;
};

export default LandingPage;
