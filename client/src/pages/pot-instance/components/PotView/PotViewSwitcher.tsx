import React from 'react';
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';
import PotViewState from './PotViewState';
import styles from './styles.module.css';

interface Props {
  selectedValue: PotViewState;
  onChange: (value: keyof typeof PotViewState) => void;
}

const PotViewSwitcher = ({ selectedValue, onChange }: Props) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: keyof typeof PotViewState
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <Paper id={styles.potViewSwitcherContainer} elevation={0}>
      <ToggleButtonGroup
        exclusive
        color="primary"
        onChange={handleChange}
        value={selectedValue}
      >
        {Object.entries(PotViewState).map(([state, value]) => (
          <ToggleButton key={`potViewState-${state}`} value={state}>
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Paper>
  );
};

export default PotViewSwitcher;
