import { Dispatch, SetStateAction, useEffect } from 'react';
import _ from 'lodash';
import { PotContent } from 'pages/pot-instance/models';
import { FoodTimerList } from 'pages/pot-instance/components';

export enum PotViewState {
  Simple,
  Detailed
}

interface Props {
  state: PotViewState;
  potContent: PotContent[];
  setPotContent: Dispatch<SetStateAction<PotContent[]>>;
  addToCookedPot: (foods: PotContent[]) => void;
}

// Data and timer handler for things in a pot instance.
const PotView = ({
  state,
  potContent,
  setPotContent,
  addToCookedPot
}: Props) => {
  const handleTime = () => {
    // function that handles the timer countdown for each object in foodTimerObj. timer stops when
    // the counter reaches 0. counter is read from the resulting calculation from endtime and current time
    const updatedPotContent = potContent.map((potItem) => ({
      ...potItem,
      currentTime: Math.floor(Date.now() / 1000),
      timeLeft: Math.max(0, potItem.endTime - potItem.currentTime)
    }));

    const cookedItems = _.remove(
      updatedPotContent,
      (item) => item.timeLeft === 0
    );

    addToCookedPot(cookedItems);
    setPotContent(updatedPotContent);
  };

  // starts hotpot timer when the "start" button is selected.
  // Can update to when an ingredient gets added in the future.
  useEffect(() => {
    // Pot timers will only start up if there are in progress items in the pot
    if (potContent.length === 0) {
      return () => {};
    }

    const timer = setInterval(handleTime, 1000);
    return () => clearInterval(timer);
  }, [handleTime, potContent]);

  // TODO: Remove dependency on view types and use enum for dynamic render
  switch (state) {
    case PotViewState.Simple:
      return <div>Simple View</div>;
    case PotViewState.Detailed:
      return (
        <FoodTimerList potContent={potContent} setPotContent={setPotContent} />
      );
    default:
      return <div>Unknown View Selected</div>;
  }
};

export default PotView;
