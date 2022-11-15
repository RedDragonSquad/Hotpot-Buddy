import { FC, useState } from 'react';
import { Button } from '@mui/material';
import CompletedItems from 'pages/pot-instance/components/CompletedItems/CompletedItems';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  cookedPotContent: PotContent[];
}

const ShowCompleted: FC<Props> = ({ cookedPotContent }) => {
  const [drawerOpen, toggleDrawer] = useState(false);

  return (
    <>
      <Button
        id={styles.addItemBtn}
        variant="contained"
        onClick={() => toggleDrawer(!drawerOpen)}
      >
        TEST SHOW BUTTON
      </Button>
      {drawerOpen ? (
        <div className={styles.outerCompletedContainer}>
          <div className={styles.completedContainer}>
            <CompletedItems cookedPotContent={cookedPotContent} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShowCompleted;
