import { create } from "zustand";

export type UseSuccessModalType = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
};

export const useSuccessModal = create<UseSuccessModalType>((set) => ({
  isOpen: false,

  setOpen: () => {
    set((state) => ({
      ...state,
      isOpen: true,
    }));
  },

  setClose: () => {
    set((state) => ({
      ...state,
      isOpen: false,
    }));
  },
}));
