import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import useIngredientsList from 'pages/pot-instance/hooks';
import { useDebounce } from 'utils';
import { AddFoodTimer, Ingredient } from 'pages/pot-instance/models';
import styles from './styles.module.css';

const IngredientsList = ({ addFoodTimer }: AddFoodTimer) => {
  // Local cart that will be forwarded to parent
  const [ingredientsCart, setIngredientsCart] = useState<Ingredient[]>([]);

  // Debounce the items selected in the cart before sending it to parent.
  const debouncedCart = useDebounce(ingredientsCart, 2000);
  useEffect(() => {
    debouncedCart.forEach((ingredient) => {
      addFoodTimer(ingredient.name, ingredient.cookTime, ingredient.category);
    });
    // resets the cart
    setIngredientsCart([]);
  }, [debouncedCart]);

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
