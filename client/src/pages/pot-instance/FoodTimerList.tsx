/* eslint-disable react/function-component-definition */

import { FC, useState } from 'react';
import uniqid from 'uniqid';
import FoodTimer from 'pages/pot-instance/FoodTimer';

interface FoodTimerObj {
  id: string;
  name: string;
  cookTime: number;
  category: string;
}

const FoodTimerList: FC = () => {
  const [foodTimerObj, useFoodTimerObj] = useState<FoodTimerObj[]>([]);

  const addFoodTimer = (item: string) => {
    const tempObj = foodTimerObj;
    let addObj = {} as FoodTimerObj;
    if (item === 'meat') {
      addObj = {
        id: uniqid(),
        name: 'beef',
        cookTime: 30,
        category: 'meat'
      };
    } else if (item === 'veggie') {
      addObj = {
        id: uniqid(),
        name: 'mushroom',
        cookTime: 60,
        category: 'veggie'
      };
    }
    tempObj.push(addObj);
    useFoodTimerObj([...tempObj]);
    console.log(tempObj);
  };

  const deleteFoodTimer = (uniqueid: string) => {
    const tempObj = foodTimerObj;
    tempObj.splice(
      tempObj.findIndex((item) => item.id === uniqueid),
      1
    );
    useFoodTimerObj([...tempObj]);
  };

  return (
    <div>
      Test
      <FoodTimer
        foodTimerObj={foodTimerObj}
        deleteFoodTimer={deleteFoodTimer}
      />
      <button
        type="button"
        onClick={() => {
          addFoodTimer('meat');
        }}
      >
        add meat
      </button>
      <button
        type="button"
        onClick={() => {
          addFoodTimer('veggie');
        }}
      >
        add veggie
      </button>
    </div>
  );
};

export default FoodTimerList;
