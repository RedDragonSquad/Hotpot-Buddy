/* eslint-disable react/function-component-definition */

import { FC, useState, useEffect } from 'react';
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
  const [hotPotDuration, useHotPotDuration] = useState(0);

  const addFoodTimer = (item: string, cookTimes: number) => {
    const tempObj = foodTimerObj;
    let addObj = {} as FoodTimerObj;
    if (item === 'meat') {
      addObj = {
        id: uniqid(),
        name: 'beef',
        cookTime: cookTimes,
        category: 'meat'
      };
    } else if (item === 'veggie') {
      addObj = {
        id: uniqid(),
        name: 'mushroom',
        cookTime: cookTimes,
        category: 'veggie'
      };
    }
    tempObj.push(addObj);
    tempObj.sort((a, b) => a.cookTime - b.cookTime);
    useFoodTimerObj([...tempObj]);
  };

  const deleteFoodTimer = (uniqueid: string) => {
    const tempObj = foodTimerObj;
    tempObj.splice(
      tempObj.findIndex((item) => item.id === uniqueid),
      1
    );
    useFoodTimerObj([...tempObj]);
  };

  const handleTime = () => {
    useHotPotDuration(hotPotDuration + 1);
    Object.entries(foodTimerObj).forEach(([key, value]) => {
      if (value.cookTime > 0) {
        const tempObj = foodTimerObj;
        const currentObj = foodTimerObj[parseInt(key, 10)];
        currentObj.cookTime -= 1;
        tempObj.splice(parseInt(key, 10), 1, currentObj);
        useFoodTimerObj(tempObj);
      }
    });
  };

  useEffect(() => {
    const timer = setInterval(handleTime, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      Test
      <FoodTimer
        foodTimerObj={foodTimerObj}
        deleteFoodTimer={deleteFoodTimer}
        hotPotDuration={hotPotDuration}
      />
      <button
        type="button"
        onClick={() => {
          addFoodTimer('meat', 5);
        }}
      >
        add meat
      </button>
      <button
        type="button"
        onClick={() => {
          addFoodTimer('veggie', 60);
        }}
      >
        add veggie
      </button>
    </div>
  );
};

export default FoodTimerList;
