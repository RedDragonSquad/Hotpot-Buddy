import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Stack } from '@mui/material';
import { groupBy } from 'lodash';
import { ProgressData } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  colorMap: ProgressData[];
  removeItem: (id: string) => void;
}

const LEGEND_ITEM_KEY = 'legendItem_';

const FoodLegendList = ({ colorMap, removeItem }: Props) => {
  const categoryMap = groupBy(colorMap, 'category');

  return (
    <div className={styles.foodLegendList}>
      {Object.entries(categoryMap).map(([category, categoryItems]) => (
        <Stack id={category} spacing={1}>
          {categoryItems.map((item) => (
            <div className={styles.legendText} key={LEGEND_ITEM_KEY + item.id}>
              <div
                className={styles.square}
                style={{ backgroundColor: item.color }}
              />
              {item.name}
              <IconButton
                key={`${LEGEND_ITEM_KEY}_button ${item.id}`}
                color="primary"
                onClick={() => removeItem(item.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          ))}
        </Stack>
      ))}
    </div>
  );
};

export default FoodLegendList;
