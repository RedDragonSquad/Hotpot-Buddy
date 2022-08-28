import { FC } from 'react';
import { Stack, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  potContent: PotContent[];
  deleteFoodTimer: (uniqid: string) => void;
  hotPotDuration: number;
}

const FoodTimer: FC<Props> = ({
  potContent,
  deleteFoodTimer,
  hotPotDuration
}) => (
  <Stack id={styles.foodTimerContainer} spacing={1}>
    {Object.entries(potContent).map(([key, value]) => {
      return (
        <div className={styles.timerComponent} key={key}>
          <div className={styles.timerInformation}>
            <div className={styles.itemName}>{value.name}</div>
            <div>Time Remaining: {value.timeLeft}s</div>
          </div>
          <Button
            type="button"
            variant="contained"
            className={styles.removerTimer}
            onClick={() => {
              deleteFoodTimer(value.id);
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
        </div>
      );
    })}
    Hot Pot Duration: {hotPotDuration}
  </Stack>
);

export default FoodTimer;
