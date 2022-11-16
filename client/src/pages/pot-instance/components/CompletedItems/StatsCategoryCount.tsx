import { capitalize } from 'lodash';
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
      {Object.entries(categoryCount).map(([category, count]) => {
        const capitalizeCategory = capitalize(category);
        return (
          <div key={category}>
            {capitalizeCategory}s eaten: {count}
          </div>
        );
      })}
    </>
  );
};

export default StatsCategoryCount;
