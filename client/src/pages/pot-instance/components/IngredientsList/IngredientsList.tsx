import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ from 'lodash';
import { useEffect, useState, FC } from 'react';
import useIngredientsList from 'pages/pot-instance/hooks';
import { useDebounce } from 'utils';
import { Ingredient } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  addFoodTimer: (
    itemName: string,
    itemCategory: string,
    startTime: number,
    finishTime: number,
    remainingTime: number,
    cookTime: number
  ) => void;
  drawerOpen: boolean;
}

const IngredientsList: FC<Props> = ({ addFoodTimer, drawerOpen }) => {
  // Local cart that will be forwarded to parent
  const [ingredientsCart, setIngredientsCart] = useState<Ingredient[]>([]);

  // Debounce the items selected in the cart before sending it to parent.
  const debouncedCart = useDebounce(ingredientsCart, 2000);
  useEffect(() => {
    if (debouncedCart.length === 0) {
      return;
    }

    debouncedCart.forEach((ingredient) => {
      const startTime = Math.floor(Date.now() / 1000);
      const finishTime = startTime + ingredient.cookTime;
      const remainingTime = ingredient.cookTime;
      addFoodTimer(
        ingredient.name,
        ingredient.category,
        startTime,
        finishTime,
        remainingTime,
        ingredient.cookTime
      );
    });
    // resets the cart
    setIngredientsCart([]);
  }, [debouncedCart]);

  // When drawercloses, force push the ingredients from the cart to pot, bypassing the debounce function
  useEffect(() => {
    ingredientsCart.forEach((ingredient) => {
      const currentTime = Math.floor(Date.now() / 1000);
      const finishTime = currentTime + ingredient.cookTime;
      const remainingTime = ingredient.cookTime;
      addFoodTimer(
        ingredient.name,
        ingredient.category,
        currentTime,
        finishTime,
        remainingTime,
        ingredient.cookTime
      );
    });
    setIngredientsCart([]);
  }, [drawerOpen]);

  const { loading, ingredients } = useIngredientsList();
  if (loading) {
    return <div />;
  }

  // Aggregate to display items per category
  const aggIngredients = _.groupBy(ingredients, 'category');

  return (
    <div className={styles.ingredientsListContainer}>
      {Object.keys(aggIngredients).map((category) => (
        <Accordion key={category}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{category}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            {aggIngredients[category].map((ingredient) => (
              <Typography key={`${category}_${ingredient.name}`}>
                <Button
                  className={styles.ingredientsButton}
                  onClick={() =>
                    setIngredientsCart([...ingredientsCart, ingredient])
                  }
                >
                  {`${ingredient.name} - ${ingredient.cookTime}s`}
                </Button>
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default IngredientsList;
