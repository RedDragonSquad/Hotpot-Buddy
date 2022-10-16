import { Typography } from '@mui/material';
import { ProgressData } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  data: ProgressData[];
  toggleModal: (isOpen: boolean) => void;
  completedCount: number;
}
const WIDTH = 100;
const StackedProgressBar = ({ data, toggleModal, completedCount }: Props) => {
  return (
    <>
      <div className={styles.progressBarContainer}>
        {data.map((section) => {
          const innerStyle = {
            backgroundColor: section.color,
            right: `${(section.value / 100) * WIDTH}%`
          };

          return (
            <div
              key={section.id}
              className={styles.progressBarItem}
              style={innerStyle}
            />
          );
        })}
        {completedCount > 0 && (
          <div
            id={styles.completedCount}
            onClick={() => toggleModal(true)}
            aria-hidden="true"
          >
            {completedCount}
          </div>
        )}
      </div>
      <div className={styles.legend}>
        <Typography>Raw</Typography>
        <Typography>Cooked</Typography>
      </div>
    </>
  );
};

export default StackedProgressBar;
