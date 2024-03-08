import React from "react";

type Props = {};

export default function QrCode({}: Props) {
  return (
    <div
      className="flex justify-center items-start min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/imagen/service.webp')" }}
    >
      <div className="absolute  shadow-xl rounded-3xl overflow-hidden"></div>
      <div className="">
        <div className="bg-[#515151] p-6 mt-28 rounded-lg flex flex-col   items-center h-[500px] w-[500px]">
          <div className="flex flex-col justify-center items-center mb-10 mt-10 ">
            <h2 className="mb-4 text-xl">QR </h2>
            <p className="text-sm text-gray-300">
              Escanea el código desde tu plataforma de pago
            </p>

            <img
              className="w-72 md:w-48 h-72"
              src="/imagen/QR.svg"
              alt="Codigo QR"
            />

            <button className="text-sm mb-2 w-32 md:w-64 h-8 shadow-xl bg-[#917E72] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
              <h2>Confirmar</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
