import React from "react";

type Props = {};

const comensales = [
  { nombre: "Jostin" },
  { nombre: "Yolly" },
  { nombre: "Julian" },
  {nombre: "Adel"}
];

export default function page({}: Props) {
  return (
    <div className="w-screen h-screen bg-[#252525] flex">
      <div
        id="parte1"
        className="w-2/5 flex flex-col justify-evenly text-center text-2xl font-bold text-white mb-28"
      >
        <h1>LOGO</h1>
        <h2 className="text-xl">
          Bienvenidos a una experiencia unica <br /> <span> COMENCEMOS </span>
        </h2>
        <h3>Agrega un nombre y elige un avatar por cada comensal</h3>
      </div>
      <div id="parte2" className="w-3/5 h-full bg-[#1E1E1E]">
        <div className="flex flex-col h-3/5 justify-center items-center gap-5">
          {comensales.map((comensal, i) => (
            <div key={i} className="flex justify-center items-center gap-5">
              <div className="size-20 bg-gray-50 rounded-full flex justify-center items-center">
                avatar
              </div>
              <div className="w-96 h-10 bg-gray-50 text-center rounded-lg">
                nombre
              </div>
            </div>
          ))}
        </div>
        <div className="h-2/5">seccion 2</div>
      </div>
    </div>
  );
}
