import { FC } from 'react';
import { Stack, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import './styles.css';
import { FoodTimerObj } from 'pages/pot-instance/models';

interface Props {
  foodTimerObj: FoodTimerObj[];
  deleteFoodTimer: (uniqid: string) => void;
  hotPotDuration: number;
}

const FoodTimer: FC<Props> = ({
  foodTimerObj,
  deleteFoodTimer,
  hotPotDuration
}) => (
  <Stack id="foodTimerContainer" spacing={1}>
    {Object.entries(foodTimerObj).map(([key, value]) => {
      return (
        <div className="timerComponent" key={key}>
          <div className="timerInformation">
            <div className="itemName">{value.name}</div>
            <div>Time Remaining: {value.cookTime}s</div>
          </div>
          <Button
            type="button"
            variant="contained"
            className="removerTimer"
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
