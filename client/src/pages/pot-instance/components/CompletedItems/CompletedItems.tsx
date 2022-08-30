import { FC } from 'react';
import { PotContent } from 'pages/pot-instance/models';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  return (
    <>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        const date = new Date(value.endTime * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        return (
          <div key={key}>
            <div>Item: {value.name}</div>
            <div>Consumed Time: {formattedTime}</div>
          </div>
        );
      })}
    </>
  );
};

export default CompletedItems;
