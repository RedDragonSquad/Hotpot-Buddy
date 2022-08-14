/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { Stack } from '@mui/system';
import { FC } from 'react';

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
    <Stack spacing={2}>
      Duration: {hotPotDuration};
      {Object.entries(foodTimerObj).map(([key, value]) => {
        return (
          <div key={key}>
            {key} {value.name} {value.category} {value.id}
            Cook Time: {value.cookTime}
            <button
              type="button"
              onClick={() => {
                deleteFoodTimer(value.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </Stack>
  );
};

export default FoodTimer;
