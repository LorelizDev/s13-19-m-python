"use client";

import React from "react";

import { FiCheckCircle } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { usePaymentModal } from "@/state/paymentModal.store";

type Props = {};

export function PaymentDialog() {
  const { isOpen, setClose } = usePaymentModal((state) => state);

  return (
    <div className="relative">
      <Dialog open={isOpen}>
        <DialogTrigger className="hidden">Open</DialogTrigger>
        <DialogContent className="text-sm mb-3 w-[500px] md:w-[500px] h-[350px] bg-[#616161] text-white text-center rounded-lg py-28 flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogClose
              onClick={setClose}
              className="absolute px-2 right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              X
            </DialogClose>
          </DialogHeader>
          <div className="mb-3">
            <FiCheckCircle className="text-5xl mb-6 text-green-500" />
          </div>
          <div className="mb-8">
            <h2>Gracias por tu preferencia</h2>
          </div>
          <div className="mb-8">
            <h2>El mozo se acercará en breve a tomar el pago.</h2>
          </div>
          <div className="mb-8"></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
