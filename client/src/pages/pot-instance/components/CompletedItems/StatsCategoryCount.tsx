import { FC } from 'react';

interface CategoryCount {
  meat?: number;
  vegetable?: number;
  seafood?: number;
}

interface Props {
  categoryCount: CategoryCount;
}

const StatsCategoryCount: FC<Props> = ({ categoryCount }) => {
  return (
    <>
      <div>Meats Eaten: {categoryCount.meat}</div>
      <div>Seafood Eaten: {categoryCount.seafood}</div>
      <div>Vegetable Eaten: {categoryCount.vegetable}</div>
    </>
  );
};

export default StatsCategoryCount;
