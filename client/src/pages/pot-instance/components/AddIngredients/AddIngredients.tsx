import { Button, Drawer } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import IngredientsList from 'pages/pot-instance/components/IngredientsList/IngredientsList';
import styles from './styles.module.css';

const AddIngredients = () => {
  const [drawerOpen, toggleDrawer] = useState(false);

  return (
    <>
      <Button
        id={styles.addItemBtn}
        variant="contained"
        onClick={() => toggleDrawer(!drawerOpen)}
      >
        <AddIcon />
      </Button>
      {/* Drawer is built on MUI Pager allowing us to scale the component  through its props eventhough Drawer doesn't expose them */}
      <Drawer
        PaperProps={{
          sx: { width: '65%' }
        }}
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <IngredientsList />
      </Drawer>
    </>
  );
};
export default AddIngredients;
