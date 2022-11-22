// import { capitalize, countBy, chain } from 'lodash';
import _ from 'lodash';
import { FC, useState, useEffect } from 'react';
import { PotContent } from 'pages/pot-instance/models';
import styles from '../styles.module.css';

interface Props {
  finishedItems: PotContent[];
  COUNT_OF_FOOD_EATEN: string;
}

const StatsCategoryCount: FC<Props> = ({
  finishedItems,
  COUNT_OF_FOOD_EATEN
}) => {
  const categoryCountInterface = {} as Record<string, number>;
  const [categoryCount, setCategoryCount] = useState(categoryCountInterface);

  useEffect(() => {
    const count: any = _.chain(finishedItems)
      .map((value) => {
        return value.category;
      })
      .countBy()
      .value();
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
          const capitalizeCategory = _.capitalize(category);
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
