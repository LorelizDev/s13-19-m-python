import { create } from "zustand";

export type ProductType = {
  id: number;
  product_name: string;
  image: string;
  description: string;
  categories: string[];
  price: number;
  quantity?: number;
  orderedBy?: string;
};

export interface UserCartTypes {
  newProduct: boolean;
  productsInCart: ProductType[];
  addProduct: (payload: ProductType) => void;
  deleteProduct: (payload: ProductType["id"]) => void;
  deleteAll: (id: ProductType["id"]) => void;
}

export const useCartState = create<UserCartTypes>((set) => ({
  newProduct: false,
  productsInCart: [],

  addProduct: (payload) => {
    set((state) => {
      const existingProductIndex = state.productsInCart.findIndex(
        (product) => product.id === payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.productsInCart];
        updatedProducts[existingProductIndex].quantity =
          (updatedProducts[existingProductIndex].quantity || 0) + 1;

        return {
          ...state,
          newProduct: true,
          productsInCart: updatedProducts,
        };
      }

      return {
        ...state,
        newProduct: true,
        productsInCart: [...state.productsInCart, { ...payload, quantity: 1 }],
      };
    });
  },

  deleteProduct: (payload) => {
    set((state) => {
      const existingProductIndex: number = state.productsInCart.findIndex(
        (product) => product.id === payload
      );

      if (
        existingProductIndex !== -1 &&
        (state.productsInCart[existingProductIndex]?.quantity ?? 0) > 1
      ) {
        const updatedProducts = [...state.productsInCart];
        updatedProducts[existingProductIndex].quantity =
          (updatedProducts[existingProductIndex].quantity ?? 0) - 1;

        return {
          ...state,
          newProduct: true,
          productsInCart: updatedProducts,
        };
      }

      if (existingProductIndex !== -1) {
        return {
          ...state,
          productsInCart: [
            ...state.productsInCart.filter((product) => product.id !== payload),
          ],
        };
      }

      return state;
    });
  },

  deleteAll: (id) => {
    set((state) => ({
      ...state,
      productsInCart: state.productsInCart.map((product) =>
        product.id === id ? { ...product, quantity: 0 } : product
      ),
    }));
  },
}));
