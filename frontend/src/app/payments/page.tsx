import React from 'react'
import { Button } from "@/components/ui/button"
import { FaCreditCard } from "react-icons/fa";
import { PiPaypalLogoDuotone } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";




function Payments() {
    return (
        <div>
      <div className='h-16 w-15 flex border border-dashed justify-center border-red-500'>
          <h2>nav</h2>
      </div>

      <div className='flex flex-col mt-14'>
          <h2 className='pl-24 mb-10 lg:ml-96'>MEDIOS DE PAGO DISPONIBLES</h2>
          
          <div className='pr-4 pl-4 md:pr-14 md:pl-52 lg:ml-96'>
              <Button className='w-[350px] h-[70px] mb-6 gap-2 flex text-black bg-[#D9D9D9] items-center justify-center hover:bg-slate-400'>
                <FaCreditCard className='mr-2' size={20} /> Tarjeta de crédito o Debito
              </Button>
              <Button className='w-[350px] h-[70px] mb-6 gap-1 flex text-black bg-[#D9D9D9] items-center justify-center hover:bg-slate-400'>
                <PiPaypalLogoDuotone className='mr-2' size={25} /> Paypal
              </Button>
              <Button className='w-[350px] h-[70px] mb-6 gap-2 flex text-black bg-[#D9D9D9] items-center justify-center hover:bg-slate-400'>
                <BsCashCoin className='mr-2' size={20} /> Efectivo
              </Button>
          </div>
      </div>

   
    </div>

    
  );

  }     
export default Payments