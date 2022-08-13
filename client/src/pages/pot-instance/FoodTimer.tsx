/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { FC } from 'react';

interface Props {
  foodTimerObj: {
    uniqid?: string;
    name?: string;
    cookTime?: number;
    category?: string;
  }[];
}

const FoodTimer: FC<Props> = ({ foodTimerObj }) => {
  return (
    <div>
      {Object.entries(foodTimerObj).map(([key, value]) => {
        return (
          <div key={key}>
            {key} {value.name} {value.cookTime} {value.category}
            <button type="button"> Delete </button>
          </div>
        );
      })}
    </div>
  );
};

export default FoodTimer;
