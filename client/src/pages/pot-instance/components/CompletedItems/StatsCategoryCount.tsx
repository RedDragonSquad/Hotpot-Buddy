import { capitalize } from 'lodash';
import { FC } from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import styles from './styles.module.css';

const COUNT_OF_FOOD_EATEN = 'Count of Food Eaten';

interface CategoryCount {
  meat?: number;
  vegetable?: number;
  seafood?: number;
}

interface Props {
  categoryCount: CategoryCount;
}

const StatsCategoryCount: FC<Props> = ({ categoryCount }) => {
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
      <div className={styles.contentTitle}>{COUNT_OF_FOOD_EATEN}</div>
      <div className={styles.completedStatContent}>
        {Object.entries(categoryCount).map(([category, count]) => {
          const capitalizeCategory = capitalize(category);
          return (
            <div key={category} className={styles.categoryEntries}>
              {capitalizeCategory}s Eaten: {count} pieces
            </div>
          );
        })}
      </div>
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
          <ToggleButton value={1}>test</ToggleButton>
          <ToggleButton value={2}>test</ToggleButton>
          <ToggleButton value={3}>test</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default StatsCategoryCount;
