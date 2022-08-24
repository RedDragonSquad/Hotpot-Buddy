import { FC, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import uniqid from 'uniqid';
import FoodTimer from 'pages/pot-instance/components/FoodTimer/FoodTimer';
import { FoodTimerObj } from 'pages/pot-instance/models';
import LandingPage from 'pages/pot-instance/components/LandingPage/LandingPage';
import AddIngredients from 'pages/pot-instance/components/AddIngredients/AddIngredients';
import styles from './styles.module.css';

const FoodTimerList: FC = () => {
  const [foodTimerObj, useFoodTimerObj] = useState<FoodTimerObj[]>([]);
  const [hotPotDuration, useHotPotDuration] = useState(0);

  const [potType, usePotType] = useState(0);
  const [hotpotStart, useHotpotStart] = useState(false);

  // function takes in the item sent by the parent when an igredient is added to the pot and updates the foodtimerObj state
  const addFoodTimer = (
    itemName: string,
    cookTimes: number,
    itemCategory: string
  ) => {
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

  // starts hotpot timer when the "start" button is selected. Can update to when an ingredient gets added in the future.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hotpotStart) {
      const timer = setInterval(handleTime, 1000);
      return () => clearInterval(timer);
    }
  }, [hotpotStart, handleTime]);

  // functions to update the landing page
  const updatePotType = (type: number) => {
    usePotType(type);
    console.log(potType);
  };

  const startHotPot = () => {
    useHotpotStart(true);
  };

  return (
    <>
      <LandingPage
        updatePotType={updatePotType}
        startHotPot={startHotPot}
        hotpotStart={hotpotStart}
      />
      <div>
        <AddIngredients addFoodTimer={addFoodTimer} />
        <FoodTimer
          foodTimerObj={foodTimerObj}
          deleteFoodTimer={deleteFoodTimer}
          hotPotDuration={hotPotDuration}
        />
        <Button id={styles.endSession} variant="contained">
          End Session
        </Button>
      </div>
    </>
  );
};

export default FoodTimerList;
