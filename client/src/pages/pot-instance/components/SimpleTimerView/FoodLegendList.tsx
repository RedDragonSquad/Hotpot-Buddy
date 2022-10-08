import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Stack } from '@mui/material';
import timerStyles from 'pages/pot-instance/components/FoodTimerList/styles.module.css';
import { ProgressData } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  colorMap: ProgressData[];
  removeItem: (id: string) => void;
}

const LEGEND_ITEM_KEY = 'legendItem_';

const FoodLegendList = ({ colorMap, removeItem }: Props) => {
  return (
    <Stack id={timerStyles.foodTimerContainer} spacing={1}>
      {colorMap.map((legend) => (
        <div
          className={timerStyles.timerComponent}
          key={LEGEND_ITEM_KEY + legend.id}
        >
          <div
            className={styles.square}
            style={{ backgroundColor: legend.color }}
          />
          {legend.name}
          <IconButton
            key={`${LEGEND_ITEM_KEY}_button ${legend.id}`}
            color="primary"
            onClick={() => removeItem(legend.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      ))}
    </Stack>
  );
};

export default FoodLegendList;
