/* eslint-disable react/function-component-definition */

import { FC, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import uniqid from 'uniqid';
import AddIcon from '@mui/icons-material/Add';
import FoodTimer from 'pages/pot-instance/FoodTimer';
import LandingPage from 'pages/landing-page/LandingPage';

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
    <>
      <LandingPage />
      <div>
        <Button id="addItemBtn" variant="contained">
          <AddIcon />
        </Button>
        <FoodTimer
          foodTimerObj={foodTimerObj}
          deleteFoodTimer={deleteFoodTimer}
          hotPotDuration={hotPotDuration}
        />
        <button
          type="button"
          onClick={() => {
            addFoodTimer('meat', Math.floor(Math.random() * 30) + 1);
          }}
        >
          add meat
        </button>
        <button
          type="button"
          onClick={() => {
            addFoodTimer('veggie', Math.floor(Math.random() * 60) + 1);
          }}
        >
          add veggie
        </button>
        <Button id="endSession" variant="contained">
          End Session
        </Button>
      </div>
    </>
  );
};

export default FoodTimerList;
