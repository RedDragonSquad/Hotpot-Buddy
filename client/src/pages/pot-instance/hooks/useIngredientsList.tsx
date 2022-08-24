import { useEffect, useState } from 'react';
import { Ingredient } from 'pages/pot-instance/models';

const useIngredientsList = (): {
  loading: boolean;
  ingredients: Ingredient[];
} => {
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = () => {
    fetch('./mockData/ingredients.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      // TODO: handle api error case
      .then((jsonData) => {
        setIngredients(jsonData);
      })
      .catch(() => {
        // TODO: Better error handling for FE
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return { loading, ingredients };
};

export default useIngredientsList;
