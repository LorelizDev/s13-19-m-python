import { create } from "zustand";

export type FoodStateTypes = {
  foodType: "lunch" | "dinner" | "snacks" | "breakfast" | "drinks";
  setFoodType: (payload: "lunch" | "dinner" | "snacks" | "breakfast" | "drinks") => void;
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
