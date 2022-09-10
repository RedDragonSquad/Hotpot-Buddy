import { FC } from 'react';
import { IconButton } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { format } from 'date-fns';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  return (
    <>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        const formattedTime = format(new Date(value.endTime * 1000), 'p');
        return (
          <div className={styles.timerComponent} key={key}>
            <div className={styles.timerInformation}>
              <div className={styles.itemName}>{value.name}</div>
              <div>Finished at: {formattedTime} </div>
            </div>

            <IconButton key={key} color="primary">
              <RestaurantIcon fontSize="small" />
            </IconButton>
          </div>
        );
      })}
    </>
  );
};

export default CompletedItems;