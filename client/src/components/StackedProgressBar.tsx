import { Typography } from '@mui/material';
import { ProgressData } from 'pages/pot-instance/models';
import styles from './styles.module.css';

interface Props {
  data: ProgressData[];
}
const WIDTH = 90;
const StackedProgressBar = ({ data }: Props) => {
  return (
    <>
      <div className={styles.progressBarContainer}>
        {data.map((section) => {
          const innerStyle = {
            backgroundColor: section.color,
            right: `${(section.value / 100) * WIDTH}vw`
          };

          return (
            <div
              key={section.id}
              className={styles.progressBarItem}
              style={innerStyle}
            />
          );
        })}
      </div>
      <div className={styles.legend}>
        <Typography>Raw</Typography>
        <Typography>Cooked</Typography>
      </div>
    </>
  );
};

export default StackedProgressBar;
