import { FC } from 'react';
import { format } from 'date-fns';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { capitalize } from 'lodash';
import { PotContent } from 'pages/pot-instance/models';
import CompletedStats from './CompletedStats/CompletedStats';
import styles from './styles.module.css';

const FOOD_EATEN = 'Food Eaten';
const COUNT_OF_FOOD_EATEN = 'Count of Food Eaten';

interface Props {
  finishedItems: PotContent[];
}

const StatsContainer: FC<Props> = ({ finishedItems }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subCompletedContainer}>
        <div className={styles.contentTitle}>{FOOD_EATEN}</div>
        <div className={styles.completedContent}>
          {Object.entries(finishedItems).map(([key, value]) => {
            // date format 	12:00:00 AM was chosen. we can update to a custom format in the future if we choose. https://date-fns.org/v2.29.2/docs/format
            const formattedTime = format(new Date(value.endTime * 1000), 'pp');
            const capitalizeName = capitalize(value.name);
            return (
              <div key={key} className={styles.contentItem}>
                <span className={styles.contentSpan}>{capitalizeName}</span>
                <span>
                  <LocalDiningIcon
                    className={styles.eatIcon}
                    fontSize="small"
                  />
                </span>
                <span className={styles.contentSpan}>{formattedTime}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.subCompletedContainer}>
        <CompletedStats
          finishedItems={finishedItems}
          COUNT_OF_FOOD_EATEN={COUNT_OF_FOOD_EATEN}
        />
      </div>
    </div>
  );
};

export default StatsContainer;
