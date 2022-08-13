/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { FC } from 'react';

interface Props {
  foodTimerObj: {
    id: string;
    name: string;
    cookTime: number;
    category: string;
  }[];
  deleteFoodTimer: (uniqid: string) => void;
}

const FoodTimer: FC<Props> = ({ foodTimerObj, deleteFoodTimer }) => {
  return (
    <div>
      {Object.entries(foodTimerObj).map(([key, value]) => {
        return (
          <div key={key}>
            {key} {value.name} {value.cookTime} {value.category} {value.id}
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
    </div>
  );
};

export default FoodTimer;
