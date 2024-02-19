"use client"
import Image from 'next/image';
import React from 'react'
import { FiAlignJustify, FiHome, FiX } from "react-icons/fi";

import {
    Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarSub, MenubarShortcut
} from "@/components/ui/menubar"
import { cn } from '@/lib/utils';

export const NavBar = () => {
    return (
        <nav className="dark bg-nero border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo</span>
                </a>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <FiAlignJustify data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center w-4 h-4 text-sm text-white-500 rounded-m" aria-label="Open main menu" aria-controls="navbar-hamburger" aria-expanded="false" />
                        </MenubarTrigger>
                        <MenubarContent className={cn("dark bg-nero w-screen h-screen")}>
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
