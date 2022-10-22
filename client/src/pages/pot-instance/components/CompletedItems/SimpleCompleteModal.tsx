import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import { FC } from 'react';
import CompletedItems from 'pages/pot-instance/components/CompletedItems/CompletedItems';
import { PotContent } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  cookedPotContent: PotContent[];
  removeFromCookedPot: (uniqueid: string) => void;
  openModal: boolean;
  onClose: () => void;
}

const SimpleCompletedModal: FC<Props> = ({
  cookedPotContent,
  removeFromCookedPot,
  openModal,
  onClose
}) => {
  return (
    <Dialog
      id={styles.foodTimerContainer}
      open={openModal}
      onClose={onClose}
      PaperProps={{
        sx: { backgroundColor: 'white' }
      }}
    >
      <DialogTitle color="white" sx={{ backgroundColor: 'primary.main' }}>
        Cooked Items
      </DialogTitle>
      <DialogContent>
        <Stack id={styles.simpleCookedItems} spacing={1}>
          <CompletedItems
            cookedPotContent={cookedPotContent}
            removeFromCookedPot={removeFromCookedPot}
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleCompletedModal;
