import { Button, Drawer } from '@mui/material';
import { useState } from 'react';
import IngredientsList from 'pages/pot-instance/components/IngredientsList/IngredientsList';

const AddIngredients = () => {
  const [drawerOpen, toggleDrawer] = useState(false);

  return (
    <>
      <Button onClick={() => toggleDrawer(!drawerOpen)}>OPEN ME</Button>
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
