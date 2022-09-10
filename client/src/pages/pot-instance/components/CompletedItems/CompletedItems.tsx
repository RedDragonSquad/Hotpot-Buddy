import { FC } from 'react';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  return (
    <>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        return (
          <div className={styles.timerComponent} key={key}>
            <div className={styles.timerInformation}>
              <div className={styles.itemName}>{value.name}</div>
              <div>Finished at: </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CompletedItems;
