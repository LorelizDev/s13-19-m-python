import React from "react";
import { FiCheckCircle } from "react-icons/fi";


type Props = {};
export default function page({}: Props) {
  return (
    <div className="text-sm mb-3 w-[500px] md:w-[500px] h-[350px] bg-[#616161] text-white text-center rounded-lg py-28 flex flex-col items-center justify-center">
    <div className="mb-3">
        <FiCheckCircle className="text-5xl mb-6 text-green-500" />
    </div>
    <div className="mb-8">
        <h2>Pedido realizado con éxito!</h2>
    </div>
    <div className="mb-8">
        <h2>Numero de orden: <strong>#616161</strong></h2>
    </div>
    <div className="mb-8">
        <h2>tiempo de espera estimado: <strong className="text-amber-200">30 minutos</strong></h2>
    </div>
</div>
    
  );
}