import { create } from "zustand";

export type FoodStateTypes = {
  foodType: "lunch" | "dinner" | "snacks" | "breakfast" | "drink";
  setFoodType: (payload: "lunch" | "dinner" | "snacks" | "breakfast" | "drink") => void;
};

export const useFoodState = create<FoodStateTypes>((set) => ({
  foodType: "lunch",
  setFoodType: (payload) => {
    set((state) => ({
      ...state,
      foodType: payload,
    }));
  },
}));
