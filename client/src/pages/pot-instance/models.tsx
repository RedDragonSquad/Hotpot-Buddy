export interface Ingredient {
  name: string;
  category: string;
  cookTime: number;
}

export interface FoodTimerObj {
  id: string;
  name: string;
  cookTime: number;
  category: string;
}

export interface AddFoodTimer {
  addFoodTimer: (
    itemName: string,
    cookTimes: number,
    itemCategory: string
  ) => void;
}
