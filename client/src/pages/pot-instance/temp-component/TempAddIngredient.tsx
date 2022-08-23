/* to remove when merge with addingredient feature */
import { FC, useState } from 'react';
import { Button } from '@mui/material';
import * as ingre from './ingredients.json';

interface Props {
  addFoodTimer: (
    itemName: string,
    cookTimes: number,
    itemCategory: string
  ) => void;
}

const TempAddIngredient: FC<Props> = ({ addFoodTimer }) => {
  const [ingredients] = useState(ingre);
  const [randomIngredient, useRandomIngredient] = useState(0);

  const randomIngredientGen = () => {
    useRandomIngredient(Math.floor(Math.random() * ingredients.length));
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        randomIngredientGen();
        addFoodTimer(
          ingredients[randomIngredient].name,
          ingredients[randomIngredient].cookTime,
          ingredients[randomIngredient].category
        );
      }}
    >
      Add random ingredient btn
    </Button>
  );
};

export default TempAddIngredient;
