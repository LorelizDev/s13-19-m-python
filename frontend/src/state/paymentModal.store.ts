import { create } from "zustand";

export type PaymentModalType = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
};

export const usePaymentModal = create<PaymentModalType>((set) => ({
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
