import React from "react";

type Props = {};

export default function CreditCards({}: Props) {
  return (
    <div
      className="flex justify-center items-start min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/imagen/service.webp')" }}
    >
      <div className="absolute shadow-xl"></div>
      <div className="">
        <div className="bg-[#515151] p-6 mt-28 rounded-lg flex flex-col pl-6  items-center h-[500px] w-[500px]">
          <div className="flex flex-col justify-center items-center mb-10 mt-10 ">
            <h2 className="mb-4 text-xl">Credito </h2>
            <p className="text-sm text-gray-300">
              Selecciona el banco y un mozo se acercará con el
            </p>
            <p className="mb-8 text-sm text-gray-300">posnet</p>
            <button className="text-sm mb-2 w-32 md:w-48 h-16 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
              <img
                className="w-32 md:w-48 h-16"
                src="/imagen/mastercard.svg"
                alt="Mastercard"
              />
            </button>
            <button className="text-sm mb-2 w-32 md:w-48 h-16 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
              <img
                className="w-32 md:w-48 h-16"
                src="/imagen/visa.svg"
                alt="Visa"
              />
            </button>
            <button className="text-sm mb-8 w-32 md:w-48 h-16 shadow-xl bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
              <img
                className="w-32 md:w-48 h-20"
                src="/imagen/American-Express.svg"
                alt="American Express"
              />
            </button>

            <button className="text-sm mb-2 w-32 md:w-64 h-8 shadow-xl bg-[#917E72] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
              <h2>Confirmar</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
