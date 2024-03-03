import React from "react";
import LeftBannere from "./LeftBannere";
import RightBanner from "./RightBanner";

type Props = {};

const comensales = [
  { nombre: "Jostin" },
  { nombre: "Yolly" },
  { nombre: "Julian" },
  { nombre: "Adel" },
];
export default function Table({}: Props) {
  return (
    <div className="w-screen h-screen bg-[#252525] flex">
      <LeftBannere />
      <RightBanner comensales={comensales} />
    </div>
  );
}
