/* eslint-disable react/function-component-definition */

import { FC, useState } from 'react';
import uniqid from 'uniqid';
import FoodTimer from 'pages/pot-instance/FoodTimer';
// import myJson from 'pages/pot-instance/timerIngredients.json';

interface FoodTimerObj {
  uniqid?: string;
  name?: string;
  cookTime?: number;
  category?: string;
}

const FoodTimerList: FC = () => {
  const [foodTimerObj, useFoodTimerObj] = useState<FoodTimerObj[]>([]);

  const addFoodTimer = (item: string) => {
    const tempObj = foodTimerObj;
    let addObj: FoodTimerObj = {};
    if (item === 'meat') {
      addObj = {
        uniqid: uniqid(),
        name: 'beef',
        cookTime: 30,
        category: 'meat'
      };
    } else if (item === 'veggie') {
      addObj = {
        uniqid: uniqid(),
        name: 'mushroom',
        cookTime: 60,
        category: 'veggie'
      };
    }
    tempObj.push(addObj);
    useFoodTimerObj([...tempObj]);
    console.log(tempObj);
  };

  return (
    <div>
      Test
      <FoodTimer foodTimerObj={foodTimerObj} />
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
