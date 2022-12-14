import { FC } from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { PotContent } from 'pages/pot-instance/models';
import StatsCategoryCount from './StatsCategoryCount';
import styles from '../styles.module.css';

interface Props {
  finishedItems: PotContent[];
  COUNT_OF_FOOD_EATEN: string;
}

// TODO: Create switch cases and components for the different types of stats to display

const CompletedStats: FC<Props> = ({ finishedItems, COUNT_OF_FOOD_EATEN }) => {
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
      <StatsCategoryCount
        finishedItems={finishedItems}
        COUNT_OF_FOOD_EATEN={COUNT_OF_FOOD_EATEN}
      />
      <div className={styles.toggleButtonGroupClass}>
        <ToggleButtonGroup
          exclusive
          value={COUNT_OF_FOOD_EATEN}
          onChange={() => {
            // TODO - return clauses based on the togglebutton selections
            return null;
          }}
        >
          <ToggleButton value={COUNT_OF_FOOD_EATEN}>
            {COUNT_OF_FOOD_EATEN}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default CompletedStats;
