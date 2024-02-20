"use client";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormNewUser from "./FormNewUser";

export default function ModalNewUser() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Agregar Comensal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Comensal</DialogTitle>
          <DialogDescription>
            Ingrese el nombre del comensal y seleccione un avatar.
          </DialogDescription>
        </DialogHeader>
        <FormNewUser setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
