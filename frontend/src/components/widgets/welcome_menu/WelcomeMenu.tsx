import Link from "next/link";
import React from "react";

type Props = {};

export default function WelcomeMenu({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="bg-cover bg-center w-full h-full "
        style={{
          backgroundImage: "url('/imagen/service.webp')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex justify-center items-center backdrop-blur-sm">
          <div className="h-full pb-40 flex flex-col justify-end items-center ">
            <Link
              href={"menu/options?category=breakfast"}
              className="text-sm mb-3 w-32 md:w-96 h-10 bg-[#ddc2a5] text-white text-center rounded-2xl py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
            >
              <h2 className="text-xl font-bold text-[#a48f7e]">Desayuno</h2>
            </Link>

            <Link
              href={"menu/options?category=lunch"}
              className="text-sm mb-3 w-32 md:w-96 h-10 bg-[#ddc2a5] text-white text-center rounded-2xl py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
            >
              <h2 className="text-xl font-bold text-[#a48f7e]">Almuerzo</h2>
            </Link>

            <Link
              href={"menu/options?category=drink"}
              className="text-sm mb-3 w-32 md:w-96 h-10 bg-[#ddc2a5] text-white text-center rounded-2xl py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
            >
              <h2 className="text-xl font-bold text-[#a48f7e]">Bebida</h2>
            </Link>
            <Link
              href={"menu/options?category=snacks"}
              className="text-sm mb-3 w-32 md:w-96 h-10 bg-[#ddc2a5] text-white text-center rounded-2xl py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
            >
              <h2 className="text-xl font-bold text-[#a48f7e]">Merienda</h2>
            </Link>

            <Link
              href={"menu/options?category=dinner"}
              className="text-sm mb-3 w-32 md:w-96 h-10 bg-[#ddc2a5] text-white text-center rounded-2xl py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
            >
              <h2 className="text-xl font-bold text-[#a48f7e]">Cena</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
