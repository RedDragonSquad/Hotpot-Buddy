import { FC, useState, useEffect } from 'react';
import uniqid from 'uniqid';
import FoodTimer from 'pages/pot-instance/components/FoodTimer/FoodTimer';
import { PotContent, HotPotDuration } from 'pages/pot-instance/models';
import AddIngredients from 'pages/pot-instance/components/AddIngredients/AddIngredients';

interface Props {
  hotpotStart: boolean;
  addCookedPot: (food: PotContent) => void;
}

const FoodTimerList: FC<Props> = ({ hotpotStart, addCookedPot }) => {
  const [potContent, usePotContent] = useState<PotContent[]>([]);
  const [hotPotDuration, useHotPotDuration] = useState<HotPotDuration>({
    hotPotStartTime: 0,
    hotPotElapsedTime: 0
  });
  const [initializeToggle, useInitializeToggle] = useState(true);

  // function takes in the item sent by the parent when an ingredients is added to the pot and updates the foodtimerObj state
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

  const handleTime = () => {
    // function that updates the hotpotduration timer based on current time.
    const tempHotPotCurrent = Math.floor(Date.now() / 1000);
    const newElapsedTime = tempHotPotCurrent - hotPotDuration.hotPotStartTime;
    const tempHotPotObj = {
      hotPotStartTime: hotPotDuration.hotPotStartTime,
      hotPotElapsedTime: newElapsedTime
    };
    useHotPotDuration(tempHotPotObj);

    // function that handles the timer countdown for each object in foodTimerObj. timer stops when the counter reaches 0. counter is read from the
    // resulting calculation from endtime and currenttime
    Object.entries(potContent).forEach(([key, value]) => {
      if (value.timeLeft > 0) {
        const tempObj = potContent;
        const currentObj = potContent[parseInt(key, 10)];
        currentObj.currentTime = Math.floor(Date.now() / 1000);
        currentObj.timeLeft = currentObj.endTime - currentObj.currentTime;
        if (currentObj.timeLeft < 0) {
          currentObj.timeLeft = 0;
        }
        tempObj.splice(parseInt(key, 10), 1, currentObj);
        usePotContent(tempObj);
      }
    });
  };

  // function that initializes the HotPotDuration counters.
  const initializeHotPot = () => {
    if (initializeToggle && hotpotStart) {
      const startTime = Math.floor(Date.now() / 1000);
      const elapsedTime = 0;

      const hotPotDurationObj = {
        hotPotStartTime: startTime,
        hotPotElapsedTime: elapsedTime
      };
      useHotPotDuration(hotPotDurationObj);
      useInitializeToggle(false);
    }
  };

  // starts hotpot timer when the "start" button is selected. Can update to when an ingredient gets added in the future.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hotpotStart) {
      initializeHotPot();
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
