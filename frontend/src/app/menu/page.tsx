import React from "react";
import content from "./content.json";
import { LuHome } from "react-icons/lu";
import { RiRestaurantFill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { CiCreditCard1 } from "react-icons/ci";
import Link from "next/link";
import Icon from '@/components/ui/icon';
import Image from "next/image";



type Props = {};
export default function page({}: Props){
    return(
        <div>

        
        <div className="w-full h-full bg-[#0A0A0A] flex">
            <div
            id="part1"
            className="w-[151px] flex flex-col justify-evenly text-center text-xl md:text-2xl font-bold text-white mb-20 md:mb-28">
                <div>
                <ul>
                {content.menu.fields.options.map((menus) => (
                    <li className="text-sm mt-3 py-6">
                        <Link href={menus.url}>{menus.name} <Icon className="bg-white" iconName={menus.icone} />  </Link>
                    </li>
                ))}
                </ul>
                </div>
            </div>


            <div id="part2" className="w-full h-full bg-[#1E1E1E]">
            <div className="flex flex-col h-2/3 gap-5 my-4 ml-6 mt-6 text-xl text-white ">
                <h2>Almuerzo</h2>
        <ul className="flex flex-wrap">
                {content.menu.fields.seleccion.map((botons) => (
                    <li className="mb-3" key={botons.name}>
                <button className="text-sm mx-3 mb-3 w-32 md:w-48 h-10 bg-[#616161] text-white text-center rounded-lg py-6 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
                <Link href={botons.url}>{botons.name}</Link>
                 </button>
                    </li>
        ))}
        </ul>

        <div>
    <ul className="flex flex-wrap">
        {content.menu.fields.items.map((productos) => (
            <li className="mb-3 w-1/4" key={productos.name}>
                <img className="items-center rounded-lg" src={productos.imagen} alt={productos.name} height={140} width={140}/>
                <div className="pb-5">
                    <h2 className="text-sm mx-3 mb-3 w-32 md:w-48 h-10 text-white rounded-lg py-6 flex">{productos.name}</h2>
                    <h2 className="text-xs">{productos.detalle}</h2>
                </div>
                <h2 className="mt-3 flex">
                    ${productos.precio}

                </h2>
                <div>
                    
                </div>
            </li>
        ))}
    </ul>
</div>
            </div>
            
        </div>
          </div>
          
          </div>
    )
}