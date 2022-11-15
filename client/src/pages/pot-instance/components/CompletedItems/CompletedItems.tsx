import { FC } from 'react';
import { format } from 'date-fns';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  return (
    <div className={styles.contentContainer}>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        // date format 	12:00:00 AM was chosen. we can update to a custom format in the future if we choose. https://date-fns.org/v2.29.2/docs/format
        const formattedTime = format(new Date(value.endTime * 1000), 'pp');
        return (
          <div key={key}>
            <div className={styles.contentItem}>
              {value.name} <LocalDiningIcon fontSize="small" /> {formattedTime}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedItems;
