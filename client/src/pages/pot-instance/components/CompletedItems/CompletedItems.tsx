import { FC, useState, useEffect } from 'react';
import { format } from 'date-fns';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { capitalize, countBy } from 'lodash';
import { PotContent } from 'pages/pot-instance/models';
import StatsCategoryCount from 'pages/pot-instance/components/CompletedItems/StatsCategoryCount';
import styles from './styles.module.css';

const FOOD_EATEN = 'Food Eaten';

interface Props {
  cookedPotContent: PotContent[];
}

interface CategoryCount {
  meat?: number;
  vegetable?: number;
  seafood?: number;
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  const [categoryCount, setCategoryCount] = useState<CategoryCount>();

  useEffect(() => {
    const tempArray: any = [];
    cookedPotContent.forEach((value) => {
      tempArray.push(value.category);
    });
    const count = countBy(tempArray);

    setCategoryCount(count);
  }, [cookedPotContent]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subCompletedContainer}>
        <div className={styles.contentTitle}>{FOOD_EATEN}</div>
        <div className={styles.completedContent}>
          {Object.entries(cookedPotContent).map(([key, value]) => {
            // date format 	12:00:00 AM was chosen. we can update to a custom format in the future if we choose. https://date-fns.org/v2.29.2/docs/format
            const formattedTime = format(new Date(value.endTime * 1000), 'pp');
            const capitalizeName = capitalize(value.name);
            return (
              <div key={key} className={styles.contentItem}>
                {capitalizeName} <LocalDiningIcon fontSize="small" />{' '}
                {formattedTime}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.subCompletedContainer}>
        {categoryCount !== undefined ? (
          <StatsCategoryCount categoryCount={categoryCount} />
        ) : (
          <div> false </div>
        )}
      </div>
    </div>
  );
};

export default CompletedItems;
