/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import StackedProgressBar from 'components/StackedProgressBar';
import FoodLegendList from 'pages/pot-instance/components/SimpleTimerView/FoodLegendList';
import { PotContent, ProgressData } from 'pages/pot-instance/models';
import getRGBPerCategory from 'utils/colors';

interface Props {
  potContent: PotContent[];
  setPotContent: Dispatch<SetStateAction<PotContent[]>>;
}

const SimpleTimerView = ({ potContent, setPotContent }: Props) => {
  const [outputData, setOutData] = useState<Record<string, ProgressData>>({});

  useEffect(() => {
    // If item is new to the pot generate a new color if not use old color.
    const updatedData: Record<string, ProgressData> = Object.fromEntries(
      potContent.map(({ id, ...details }) => [
        id,
        {
          id,
          name: details.name,
          color: outputData[id]?.color || getRGBPerCategory(),
          value: (details.timeLeft / details.cookTime) * 100
        }
      ])
    );

    setOutData(updatedData);
  }, [potContent]);

  return (
    <>
      <StackedProgressBar data={Object.values(outputData)} />
      <FoodLegendList colorMap={Object.values(outputData)} />
    </>
  );
};

export default SimpleTimerView;
