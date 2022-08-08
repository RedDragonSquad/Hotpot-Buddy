import { useEffect, useState } from 'react';
import { Ingredient } from 'pages/pot-instance/models';

const useIngredientsList = (): {
  loading: boolean;
  data: Ingredient[];
} => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchIngredients = () => {
    fetch('./mockData/ingredients.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((jsonData) => {
        setLoading(false);
        setData(jsonData);
      });
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return { loading, data };
};

export default useIngredientsList;
