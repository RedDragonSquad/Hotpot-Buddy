export interface Ingredient {
  name: string;
  category: string;
  cookTime: number;
}

export interface PotContent {
  id: string;
  name: string;
  category: string;
  currentTime: number;
  endTime: number;
  timeLeft: number;
  cookTime: number;
}

export interface AddFoodTimer {
  addFoodTimer: (
    itemName: string,
    itemCategory: string,
    startTime: number,
    finishTime: number,
    remainingTime: number,
    cookTime: number
  ) => void;
}

export interface HotPotDuration {
  hotPotStartTime: number;
  hotPotElapsedTime: number;
}

export interface ProgressData {
  id: string;
  name: string;
  value: number;
  category: string;
  color: string;
}
