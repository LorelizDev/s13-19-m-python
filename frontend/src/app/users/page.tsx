import React from "react";

type Props = {};

const comensales = [
  { nombre: "Jostin" },
  { nombre: "Yolly" },
  { nombre: "Julian" },
  {nombre: "Adel"}
];
const selecciones = [
  {op1: "Agregar otro comensal"},
  {op2: "Enviar a la cocina"}
];

export default function page({}: Props) {
  return (
    <div className="w-screen h-screen bg-[#252525] flex">
      <div
        id="parte1"
        className="w-2/5 flex flex-col justify-evenly text-center text-xl md:text-2xl font-bold text-white mb-20 md:mb-28"
      >
        <h1>LOGO</h1>
        <h2>
          Bienvenidos a una experiencia única <br /> <span> COMENCEMOS </span>
        </h2>
        <h3>Agrega un nombre y elige un avatar por cada comensal</h3>
      </div>
      <div id="parte2" className="w-3/5 h-full bg-[#1E1E1E]">
        <div className="flex flex-col h-3/5 justify-center items-center gap-5 my-4">
          {comensales.map((comensal, i) => (
            <div key={i} className="flex justify-center items-center gap-5 ">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-50 rounded-full flex justify-center items-center">
              avatar
            </div>
            <input
              type="text"
              className="w-32 md:w-48 lg:w-96 h-10 bg-gray-50 text-center rounded-lg"
              placeholder="Nombre"
            />
          </div>
          ))}
        </div>
        <div className="h-2/5 text-center text-white py-3">
          <div>
            <h2>Una vez seleccionado.....</h2>
          </div>
          <div className="py-10">
            {selecciones.map((seleccion, u) => (
              <div key={u} className="flex justify-center items-center gap-5 py-2 ml-6 ">
                <button className="w-48 md:w-96 h-10 bg-gray-50 text-black text-center rounded-lg py-6">
                  
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
            }