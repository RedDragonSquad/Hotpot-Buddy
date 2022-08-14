/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { FC } from 'react';

interface Props {
  foodTimerObj: {
    id: string;
    name: string;
    cookTime: number;
    category: string;
  }[];
  deleteFoodTimer: (uniqid: string) => void;
  hotPotDuration: number;
}

const FoodTimer: FC<Props> = ({
  foodTimerObj,
  deleteFoodTimer,
  hotPotDuration
}) => {
  return (
    <div>
      Duration: {hotPotDuration};
      {Object.entries(foodTimerObj).map(([key, value]) => {
        // const [timeLeft, useTimeLeft] = useState(value.cookTime);
        // const [elapsedTime, useElapsedTime] = useState(value.cookTime);

        // const handleTime = () => {
        //   if (timeLeft !== 0) {
        //     useElapsedTime(elapsedTime + 1);
        //     useTimeLeft(timeLeft - 1);
        //   }
        // };

        // useEffect(() => {
        //   const timer = setInterval(handleTime, 1000);

        //   return () => clearInterval(timer);
        // });

        return (
          <div key={key}>
            {key} {value.name} {value.category} {value.id}
            Start Time: {value.cookTime}
            <button
              type="button"
              onClick={() => {
                deleteFoodTimer(value.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FoodTimer;
