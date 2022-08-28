import { FC, useState, useEffect } from 'react';
import uniqid from 'uniqid';
import FoodTimer from 'pages/pot-instance/components/FoodTimer/FoodTimer';
import { PotContent } from 'pages/pot-instance/models';
import AddIngredients from 'pages/pot-instance/components/AddIngredients/AddIngredients';

interface Props {
  hotpotStart: boolean;
  addCookedPot: (food: PotContent) => void;
}

const FoodTimerList: FC<Props> = ({ hotpotStart, addCookedPot }) => {
  const [potContent, usePotContent] = useState<PotContent[]>([]);
  const [hotPotDuration, useHotPotDuration] = useState(0);

  // function takes in the item sent by the parent when an igredient is added to the pot and updates the foodtimerObj state
  const addFoodTimer = (
    itemName: string,
    itemCategory: string,
    startTime: number,
    finishTime: number,
    remainingTime: number
  ) => {
    const tempObj = potContent;
    let addObj = {} as PotContent;
    addObj = {
      id: uniqid(),
      name: itemName,
      category: itemCategory,
      currentTime: startTime,
      endTime: finishTime,
      timeLeft: remainingTime
    };
    tempObj.push(addObj);
    tempObj.sort((a, b) => a.currentTime - b.currentTime);
    usePotContent([...tempObj]);
  };

  // function deletes the specific object within the potContent, and updates cookedPot in potInstance
  const deleteFoodTimer = (uniqueid: string) => {
    const tempObj = potContent;
    addCookedPot(tempObj[tempObj.findIndex((item) => item.id === uniqueid)]);

    tempObj.splice(
      tempObj.findIndex((item) => item.id === uniqueid),
      1
    );
    usePotContent([...tempObj]);
  };

  // function that handles the timer countdown for each object in foodTimerObj. timer stops when the counter reaches 0. counter is read from cookTime
  const handleTime = () => {
    useHotPotDuration(hotPotDuration + 1);
    Object.entries(potContent).forEach(([key, value]) => {
      if (value.timeLeft > 0) {
        const tempObj = potContent;
        const currentObj = potContent[parseInt(key, 10)];
        currentObj.currentTime = Math.floor(Date.now() / 1000);
        currentObj.timeLeft = currentObj.endTime - currentObj.currentTime;
        tempObj.splice(parseInt(key, 10), 1, currentObj);
        usePotContent(tempObj);
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

  return (
    <>
      <AddIngredients addFoodTimer={addFoodTimer} />
      <FoodTimer
        potContent={potContent}
        deleteFoodTimer={deleteFoodTimer}
        hotPotDuration={hotPotDuration}
      />
    </>
  );
};

export default FoodTimerList;
