import { FC } from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { PotContent } from 'pages/pot-instance/models';
import StatsCategoryCount from './StatsCategoryCount';
import styles from '../styles.module.css';

const COUNT_OF_FOOD_EATEN = 'Count of Food Eaten';

interface Props {
  cookedPotContent: PotContent[];
}

// TODO: Create switch cases and components for the different types of stats to display

const CompletedStats: FC<Props> = ({ cookedPotContent }) => {
  // style overrides for ToggleButton
  const ToggleButton = styled(MuiToggleButton)({
    '&.MuiToggleButton-root': {
      backgroundColor: '#1A2027',
      color: '#eeeeee'
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: '#eeeeee',
      color: 'rgba(55, 55, 55, 0.7)',
      fontWeight: 'bold'
    }
  });

  return (
    <>
      <StatsCategoryCount cookedPotContent={cookedPotContent} />
      <div className={styles.toggleButtonGroupClass}>
        <ToggleButtonGroup
          exclusive
          value={COUNT_OF_FOOD_EATEN}
          onChange={() => {
            return COUNT_OF_FOOD_EATEN;
          }}
        >
          <ToggleButton value={COUNT_OF_FOOD_EATEN}>
            {COUNT_OF_FOOD_EATEN}
          </ToggleButton>
          {/* <ToggleButton value={1}>test</ToggleButton>
          <ToggleButton value={2}>test</ToggleButton>
          <ToggleButton value={3}>test</ToggleButton> */}
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default CompletedStats;
