import { capitalize } from 'lodash';
import { FC } from 'react';
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
  return (
    <>
      <div className={styles.contentTitle}>{COUNT_OF_FOOD_EATEN}</div>
      {Object.entries(categoryCount).map(([category, count]) => {
        const capitalizeCategory = capitalize(category);
        return (
          <div key={category}>
            {capitalizeCategory}s eaten: {count}
          </div>
        );
      })}
    </>
  );
};

export default StatsCategoryCount;
