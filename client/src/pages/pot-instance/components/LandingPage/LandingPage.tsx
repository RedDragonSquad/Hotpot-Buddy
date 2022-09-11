import * as React from 'react';
import { Button, ToggleButtonGroup } from '@mui/material';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import { FC, useState } from 'react';
import styles from './styles.module.css';
// https://pngtree.com/free-backgrounds-photos/spicy-hot-pot

interface Props {
  startHotPot: (soupbase: string[]) => void;
  hotpotStart: boolean;
}

const LandingPage: FC<Props> = ({ startHotPot, hotpotStart }) => {
  const [potType, setPotType] = useState('1');
  const [soupbase, setSoupbase] = useState(['bone']);

  // function to update soupbase selection based on the number of pots selected
  const handlePotChange = (newAlignment: string) => {
    // queue for soupbase based on potType number
    const soupbaseTemp = soupbase;
    let i = soupbaseTemp.length;
    while (i > parseInt(newAlignment, 10)) {
      soupbaseTemp.shift();
      i -= 1;
    }
    setSoupbase([...soupbaseTemp]);
  };

  // updates the toggle buttons for pot type. enforces that one is always toggled
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setPotType(newAlignment);
      handlePotChange(newAlignment);
    }
  };

  const handleChangeSoup = (
    event: React.MouseEvent<HTMLElement>,
    type: string
  ) => {
    if (type !== null) {
      const soupbaseTemp = soupbase;
      let i = soupbaseTemp.length;
      while (i >= parseInt(potType, 10)) {
        soupbaseTemp.shift();
        i -= 1;
      }
      soupbaseTemp.push(type);
      setSoupbase([...soupbaseTemp]);
    }
  };

  // style overrides for Togglebutton
  const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
    '&.MuiToggleButton-root': {
      backgroundColor: theme.palette.grey[700]
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.palette.grey[900]
    }
  }));

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
            color="secondary"
            // exclusive is here for the onchange to return a single value rather than an array
            exclusive
            value={soupbase}
            onChange={handleChangeSoup}
            className={styles.selectBrothType}
          >
            <ToggleButton value="spicy" className={styles.soupbases}>
              Spicy Soupbase
            </ToggleButton>
            <ToggleButton value="bone" className={styles.soupbases}>
              Ox Bone Soupbase
            </ToggleButton>
            <ToggleButton value="tomato" className={styles.soupbases}>
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
