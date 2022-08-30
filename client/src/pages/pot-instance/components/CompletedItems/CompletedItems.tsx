import { FC } from 'react';
import { PotContent } from 'pages/pot-instance/models';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  return (
    <>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        return (
          <div key={key}>
            <div>Item: {value.name}</div>
            <div>Consumed Time: {}</div>
          </div>
        );
      })}
    </>
  );
};

export default CompletedItems;
