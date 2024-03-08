"use client";

import { PaymentModalType, usePaymentModal } from "@/state/paymentModal.store";
import Link from "next/link";
import React from "react";

type Props = {};

async function sendOrder(setOpen: PaymentModalType["setOpen"]) {
  setOpen();
  console.log("me activé");
}

export default function PaymentHome({}: Props) {
  const { setOpen } = usePaymentModal((state) => state);
  return (
    <div
      className="flex justify-center items-start min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/imagen/service.webp')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm shadow-xl"></div>
      <div className="bg-[#515151] bg-opacity-90 p-6 mt-28 rounded-lg flex flex-col items-center relative z-10">
        <div className="flex flex-col justify-center items-center mb-10 mt-10 ">
          <h2 className="mb-4 text-xl">Métodos de pago </h2>
          <p className="text-sm text-gray-300">
            Selecciona un método de pago a continuación.{" "}
          </p>
          <p className="mb-8 text-sm text-gray-300">
            Por favor, verifica dos veces antes de finalizar el pago.
          </p>
          <Link
            href={"/payment-methods/qr_code"}
            className="text-sm mb-2 w-32 md:w-48 h-10 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
          >
            <h2>QR</h2>
          </Link>
          <Link
            href={"/payment-methods/credit_cards"}
            className="text-sm mb-2 w-32 md:w-48 h-10 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
          >
            <h2>Credito</h2>
          </Link>
          <button className="text-sm mb-2 w-32 md:w-48 h-10 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
            <h2>Debito</h2>
          </button>
          <button
            onClick={() => sendOrder(setOpen)}
            className="text-sm mb-2 w-32 md:w-48 h-10 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
          >
            <h2>Efectivo</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
