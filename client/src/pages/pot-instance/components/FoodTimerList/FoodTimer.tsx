import { FC } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  potItem: PotContent;
  deleteFoodTimer: (uniqueid: string) => void;
}

const FoodTimer: FC<Props> = ({ potItem, deleteFoodTimer }) => (
  <div className={styles.timerComponent} key={potItem.id}>
    <div className={styles.timerInformation}>
      <div className={styles.itemName}>{potItem.name}</div>
      <div>Time Remaining: {potItem.timeLeft}s</div>
    </div>

    <IconButton
      key={potItem.id}
      color="primary"
      onClick={() => deleteFoodTimer(potItem.id)}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  </div>
);

export default FoodTimer;
