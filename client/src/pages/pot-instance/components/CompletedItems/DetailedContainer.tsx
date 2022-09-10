import { FC } from 'react';
import { Stack } from '@mui/material';
import { PotContent } from 'pages/pot-instance/models';
import CompletedItems from 'pages/pot-instance/components/CompletedItems/CompletedItems';
import styles from './styles.module.css';

interface Props {
  cookedPotContent: PotContent[];
}

const DetailedContainer: FC<Props> = ({ cookedPotContent }) => {
  return (
    <Stack id={styles.foodTimerContainer} spacing={1}>
      <CompletedItems cookedPotContent={cookedPotContent} />
    </Stack>
  );
};

export default DetailedContainer;
