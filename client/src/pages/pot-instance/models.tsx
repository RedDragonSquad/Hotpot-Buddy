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
}

export interface AddFoodTimer {
  addFoodTimer: (
    itemName: string,
    itemCategory: string,
    startTime: number,
    finishTime: number,
    remainingTime: number
  ) => void;
}
