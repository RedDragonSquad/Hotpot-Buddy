import { FC } from 'react';
import { PotContent } from 'pages/pot-instance/models';
import CompletedItems from 'pages/pot-instance/components/CompletedItems/CompletedItems';

interface Props {
  cookedPotContent: PotContent[];
}

const TestContainer: FC<Props> = ({ cookedPotContent }) => {
  return (
    <div>
      <CompletedItems cookedPotContent={cookedPotContent} />
    </div>
  );
};

export default TestContainer;
