import { capitalize, countBy } from 'lodash';
import { FC, useState, useEffect } from 'react';
import { PotContent } from 'pages/pot-instance/models';
import styles from '../styles.module.css';

const COUNT_OF_FOOD_EATEN = 'Count of Food Eaten';

interface CategoryCount {
  meat?: number;
  vegetable?: number;
  seafood?: number;
}

interface Props {
  finishedItems: PotContent[];
}

const StatsCategoryCount: FC<Props> = ({ finishedItems }) => {
  const [categoryCount, setCategoryCount] = useState<CategoryCount>();

  useEffect(() => {
    const tempArray: any = [];
    finishedItems.forEach((value) => {
      tempArray.push(value.category);
    });
    const count = countBy(tempArray);

    setCategoryCount(count);
  }, [finishedItems]);

  if (categoryCount === undefined) {
    return null;
  }

  // eslint-disable-next-line consistent-return
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
    </>
  );
};

export default StatsCategoryCount;
