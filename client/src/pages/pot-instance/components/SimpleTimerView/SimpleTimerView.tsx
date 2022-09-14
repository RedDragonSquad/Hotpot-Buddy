/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import StackedProgressBar from 'components/StackedProgressBar';
import { PotContent, ProgressData } from 'pages/pot-instance/models';
import getRGBPerCategory from 'utils/colors';

interface Props {
  potContent: PotContent[];
  setPotContent: Dispatch<SetStateAction<PotContent[]>>;
}

interface Data extends PotContent {
  color: string;
}

const SimpleTimerView = ({ potContent, setPotContent }: Props) => {
  console.log(setPotContent);
  const [data, setData] = useState<Map<string, Data>>(new Map());

  const [outputData, setOutData] = useState<ProgressData[]>([]);
  useEffect(() => {
    potContent.forEach((potItem) => {
      data.set(potItem.id, {
        ...potItem,
        color: data.get(potItem.id)?.color || getRGBPerCategory()
      });
    });
    // TODO: Clean up renmoved items
    setData(new Map(data));
  }, [potContent, setData]);

  useEffect(() => {
    const temp = Array.from(data.values()).map((d) => ({
      id: d.id,
      name: d.name,
      color: d.color,
      value: (d.timeLeft / d.cookTime) * 100
    }));

    setOutData(temp);
  }, [data, setOutData]);

  return <StackedProgressBar data={outputData} />;
};

export default SimpleTimerView;
