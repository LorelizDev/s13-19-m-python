"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut
} from "@/components/ui/menubar"

export const NavBar = () => {
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
                </a>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <FiAlignJustify data-collapse-toggle="navbar-hamburger" type="button" className="p-2 w-10 h-full text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-label="Open main menu" aria-controls="navbar-hamburger" aria-expanded="false" />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Menú</MenubarItem>
                            <MenubarItem>Llamar al mozo</MenubarItem>
                            <MenubarItem>Pedir la cuenta</MenubarItem>
                            <MenubarItem>Reseñas</MenubarItem>
                            <MenubarItem>Sobre nosotros</MenubarItem>
                            <MenubarItem>Medios de pago</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                {/* </div> */}
            </div>
        </nav >
    )
}
