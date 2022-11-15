import { FC, useState, useEffect } from 'react';
import { format } from 'date-fns';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { PotContent } from 'pages/pot-instance/models';
import StatsCategoryCount from 'pages/pot-instance/components/CompletedItems/StatsCategoryCount';
import styles from './styles.module.css';

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
    const catCount = cookedPotContent.reduce(
      (count: any, item) => {
        if (!count[item.category]) {
          count[item.category] = 0;
        }
        count[item.category] += 1;
        return count;
      },
      { category: {} }
    );

    setCategoryCount(catCount);
  }, [cookedPotContent]);

  useEffect(() => {
    console.log(categoryCount);
    console.log('HERE', cookedPotContent);
  }, [categoryCount]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.subCompletedContainer}>
        {Object.entries(cookedPotContent).map(([key, value]) => {
          // date format 	12:00:00 AM was chosen. we can update to a custom format in the future if we choose. https://date-fns.org/v2.29.2/docs/format
          const formattedTime = format(new Date(value.endTime * 1000), 'pp');
          return (
            <div key={key}>
              <div className={styles.contentItem}>
                {value.name} <LocalDiningIcon fontSize="small" />{' '}
                {formattedTime}
              </div>
            </div>
          );
        })}
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
