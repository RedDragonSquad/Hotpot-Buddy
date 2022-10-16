/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import _ from 'lodash';
import StackedProgressBar from 'components/StackedProgressBar';
import { PotContent, ProgressData } from 'pages/pot-instance/models';
import getRGBPerCategory from 'utils/colors';
import FoodLegendList from 'pages/pot-instance/components/SimpleTimerView/FoodLegendList';
import SimpleCompletedModal from 'pages/pot-instance/components/CompletedItems/SimpleCompleteModal';
import styles from './styles.module.css';

interface Props {
  potContent: PotContent[];
  setPotContent: Dispatch<SetStateAction<PotContent[]>>;
  cookedPotContent: PotContent[];
  removeFromCookedPot: (uniqueid: string) => void;
}

const SimpleTimerView = ({
  potContent,
  setPotContent,
  cookedPotContent,
  removeFromCookedPot
}: Props) => {
  const [outputData, setOutData] = useState<Record<string, ProgressData>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveItem = (id: String) => {
    const filteredContent = _.chain(potContent)
      .omitBy(['id', id])
      .toArray()
      .value();

    setPotContent(filteredContent);
  };

  useEffect(() => {
    // If item is new to the pot generate a new color if not use old color.
    const updatedData: Record<string, ProgressData> = Object.fromEntries(
      potContent.map(({ id, ...details }) => [
        id,
        {
          id,
          name: details.name,
          color: outputData[id]?.color || getRGBPerCategory(details.category),
          value: (details.timeLeft / details.cookTime) * 100,
          category: details.category
        }
      ])
    );

    setOutData(updatedData);
  }, [potContent]);

  return (
    <div className={styles.simpleViewContainer}>
      <SimpleCompletedModal
        cookedPotContent={cookedPotContent}
        removeFromCookedPot={removeFromCookedPot}
        openModal={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <StackedProgressBar
        data={Object.values(outputData)}
        toggleModal={(isOpen) => setIsModalOpen(isOpen)}
        completedCount={cookedPotContent.length}
      />
      <FoodLegendList
        colorMap={Object.values(outputData)}
        removeItem={handleRemoveItem}
      />
    </div>
  );
};

export default SimpleTimerView;
