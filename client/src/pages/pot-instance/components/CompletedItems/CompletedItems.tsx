import { FC } from 'react';
import { format } from 'date-fns';
import { PotContent } from 'pages/pot-instance/models';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  return (
    <>
      <div>test</div>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        // date format 	12:00:00 AM was chosen. we can update to a custom format in the future if we choose. https://date-fns.org/v2.29.2/docs/format
        const formattedTime = format(new Date(value.endTime * 1000), 'pp');
        return (
          <div key={key}>
            <div>
              {value.name} || Consumed Time: {formattedTime}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CompletedItems;
