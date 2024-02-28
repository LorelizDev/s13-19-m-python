import { Text } from '@/components/ui/text'
import React from 'react'
import content from './content.json'
import Link from 'next/link'


type Props = {}

export function FoodTypes({}: Props) {
  return (
    <div className="bg-accent h-28 fixed w-11/12 flex flex-col gap-2">
          <Text type="title">Almuerzos</Text>
          <ul className="flex flex-wrap">
            {content.seleccion.map((botons) => (
              <li className="mb-3" key={botons.name}>
                <button className="text-sm mx-3 mb-3 w-32 md:w-48 h-10 bg-[#616161] text-white text-center rounded-lg py-6 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
                  <Link href={botons.url}>
                    {" "}
                    <Text type="semi-bold">{botons.name}</Text>{" "}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
  )
}