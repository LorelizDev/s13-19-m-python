import { create } from "zustand";

export type ProductType = {
  id: number;
  product_name: string;
  image: string;
  description: string;
  categories: string[];
  price: number;
};

export interface UserCartTypes {
  newProduct: boolean;
  productsInCart: ProductType[];
  addProduct: (payload: ProductType) => void;
  deleteProduct: (payload: ProductType["id"]) => void;
}

export const useCartState = create<UserCartTypes>((set) => ({
  newProduct: false,
  productsInCart: [],

  addProduct: (payload) => {
    function activateBounceAnimation(state: UserCartTypes) {
      state.newProduct = true;

      return setTimeout(() => {
        return false;
      }, 500);
    }

    set((state) => ({
      ...state,
      newProduct: activateBounceAnimation(state),
      productsInCart: [...state.productsInCart, payload],
    }));
  },

  deleteProduct: (payload) => {
    set((state) => ({
      ...state,
      productsInCart: [
        ...state.productsInCart.filter((product) => product.id !== payload),
      ],
    }));
  },
}));
