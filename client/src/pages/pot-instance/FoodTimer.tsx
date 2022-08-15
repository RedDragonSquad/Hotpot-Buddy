/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { Stack, Button } from '@mui/material';

interface Props {
  foodTimerObj: {
    id: string;
    name: string;
    cookTime: number;
    category: string;
  }[];
  deleteFoodTimer: (uniqid: string) => void;
  hotPotDuration: number;
}

const FoodTimer: FC<Props> = ({
  foodTimerObj,
  deleteFoodTimer,
  hotPotDuration
}) => {
  return (
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
              className="removeBtn"
              onClick={() => {
                deleteFoodTimer(value.id);
              }}
            >
              Remove
            </Button>
          </div>
        );
      })}
      Hot Pot Duration: {hotPotDuration}
    </Stack>
  );
};

export default FoodTimer;
