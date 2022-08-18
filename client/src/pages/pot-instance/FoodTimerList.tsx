<<<<<<< HEAD
/* eslint-disable react/function-component-definition */

import { FC, useEffect, useState } from 'react';
=======
import { FC, useState, useEffect } from 'react';
>>>>>>> 649f3c1 (updated code with comments from code review)
import { Button } from '@mui/material';
import uniqid from 'uniqid';
import AddIcon from '@mui/icons-material/Add';
<<<<<<< HEAD
import FoodTimer from 'pages/pot-instance/FoodTimer';
<<<<<<< HEAD
import LandingPage from 'pages/landing-page/LandingPage';

interface FoodTimerObj {
  id: string;
  name: string;
  cookTime: number;
  category: string;
}
=======
import { FoodTimerObj } from 'pages/pot-instance/models';
>>>>>>> 649f3c1 (updated code with comments from code review)
=======
import FoodTimer from 'pages/pot-instance/components/FoodTimer/FoodTimer';
import { FoodTimerObj } from 'pages/pot-instance/models';
/* to remove when merge with addingredient feature */
import TempAddIngredient from 'pages/pot-instance/temp-component/TempAddIngredient';
import styles from './styles.module.css';
>>>>>>> 2410f06 (align with code review comments)

const FoodTimerList: FC = () => {
  const [foodTimerObj, useFoodTimerObj] = useState<FoodTimerObj[]>([]);
  const [hotPotDuration, useHotPotDuration] = useState(0);

<<<<<<< HEAD
  const [potType, usePotType] = useState(0);
  const [hotpotStart, useHotpotStart] = useState(false);

  // functions to update the foodtimers
  const addFoodTimer = (item: string, cookTimes: number) => {
=======
  // function takes in the item sent by the parent when an igredient is added to the pot and updates the foodtimerObj state
  const addFoodTimer = (
    itemName: string,
    cookTimes: number,
    itemCategory: string
  ) => {
>>>>>>> 2410f06 (align with code review comments)
    const tempObj = foodTimerObj;
    let addObj = {} as FoodTimerObj;
    addObj = {
      id: uniqid(),
      name: itemName,
      cookTime: cookTimes,
      category: itemCategory
    };
    tempObj.push(addObj);
    tempObj.sort((a, b) => a.cookTime - b.cookTime);
    useFoodTimerObj([...tempObj]);
  };

  // function deletes the specific object within the foodTimerObj
  const deleteFoodTimer = (uniqueid: string) => {
    const tempObj = foodTimerObj;
    tempObj.splice(
      tempObj.findIndex((item) => item.id === uniqueid),
      1
    );
    useFoodTimerObj([...tempObj]);
  };

  // function that handles the timer countdown for each object in foodTimerObj. timer stops when the counter reaches 0. counter is read from cookTime
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

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hotpotStart) {
      const timer = setInterval(handleTime, 1000);
      return () => clearInterval(timer);
    }
  });

  // functions to update the landing page
  const updatePotType = (type: number) => {
    usePotType(type);
    console.log(potType);
  };

  const startHotPot = () => {
    useHotpotStart(true);
  };

  return (
<<<<<<< HEAD
    <>
      <LandingPage
        updatePotType={updatePotType}
        startHotPot={startHotPot}
        hotpotStart={hotpotStart}
      />
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
=======
    <div>
      <Button id={styles.addItemBtn} variant="contained">
        <AddIcon />
      </Button>
      <FoodTimer
        foodTimerObj={foodTimerObj}
        deleteFoodTimer={deleteFoodTimer}
        hotPotDuration={hotPotDuration}
      />
      {/* to remove when merge with addingredient feature */}
      <TempAddIngredient addFoodTimer={addFoodTimer} />
      <Button id={styles.endSession} variant="contained">
        End Session
      </Button>
    </div>
>>>>>>> 2410f06 (align with code review comments)
  );
};

export default FoodTimerList;
