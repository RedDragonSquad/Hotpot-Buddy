import { Dispatch, FC, SetStateAction } from 'react';
import { Stack } from '@mui/material';
import { filter } from 'lodash';
import { PotContent } from 'pages/pot-instance/models';
import FoodTimer from './FoodTimer';
import styles from './styles.module.css';

interface Props {
  potContent: PotContent[];
  setPotContent: Dispatch<SetStateAction<PotContent[]>>;
  // TODO: Add functionality for cooked stuff back
  // addCookedPot: (food: PotContent) => void;
}

const FoodTimerList: FC<Props> = ({ potContent, setPotContent }) => {
  // function deletes the specific object within the potContent, and updates cookedPot in potInstance
  const deleteFoodTimer = (uniqueid: string) => {
    // addCookedPot(tempObj[tempObj.findIndex((item) => item.id === uniqueid)]);

    const newPotContent = filter(potContent, (item) => item.id !== uniqueid);
    setPotContent(newPotContent);
  };

  return (
    <Stack id={styles.foodTimerContainer} spacing={1}>
      {potContent.map((potItem) => (
        <FoodTimer potItem={potItem} deleteFoodTimer={deleteFoodTimer} />
      ))}
    </Stack>
  );
};

export default FoodTimerList;
