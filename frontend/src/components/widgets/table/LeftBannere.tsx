import React from "react";

type Props = {};

export default function LeftBannere({}: Props) {
  return (
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
  );
}
