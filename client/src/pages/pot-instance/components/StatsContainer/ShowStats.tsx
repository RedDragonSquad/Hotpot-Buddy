import { FC, useState } from 'react';
import { Button } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { PotContent } from 'pages/pot-instance/models';
import StatsContainer from 'pages/pot-instance/components/StatsContainer/StatsContainer';
import styles from './styles.module.css';

interface Props {
  finishedItems: PotContent[];
}

const ShowCompleted: FC<Props> = ({ finishedItems }) => {
  const [drawerOpen, toggleDrawer] = useState(false);

  return (
    <>
      <div className={styles.statsBtn}>
        <Button variant="contained" onClick={() => toggleDrawer(!drawerOpen)}>
          <QueryStatsIcon />
        </Button>
      </div>
      {drawerOpen && (
        <div
          className={styles.outerCompletedContainer}
          onClick={() => toggleDrawer(false)}
          onKeyPress={() => toggleDrawer(false)}
          role="button"
          tabIndex={0}
        >
          <div className={styles.completedContainer}>
            <StatsContainer finishedItems={finishedItems} />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowCompleted;
