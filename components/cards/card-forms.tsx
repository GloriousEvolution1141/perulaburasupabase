"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { DepartamentoSelect } from "./DepartamentoSelect";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function DialogJobForm() {
  const [whatsapp, setWhatsapp] = useState(false);
  const [call, setCall] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDepartamento, setSelectedDepartamento] = useState("");

  const handlePostular = () => {
    setOpen(false);
    toast.success("¡Postulación enviada correctamente!", {
      position: "top-left",
      duration: 1000,
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Button variant="destructive">Crear Empleo</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg !duration-0">
            <DialogHeader>
              <DialogTitle>Crear un Empleo</DialogTitle>
              <DialogDescription>
                Completa la información del puesto y los medios de contacto.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              {/* Título y Ubicación */}
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label htmlFor="title">Título del puesto</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Ej: Desarrollador Frontend"
                    required
                  />
                </Field>
                <Field>
                  <Label htmlFor="location">Departamento</Label>
                  <DepartamentoSelect
                    value={selectedDepartamento}
                    onChange={(val) => setSelectedDepartamento(val)}
                  />
                </Field>
              </div>

              {/* Descripción */}
              <Field>
                <Label htmlFor="description">Descripción del puesto</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Breve descripción de responsabilidades y requisitos"
                  rows={4}
                  required
                />
              </Field>

              {/* Salario y Fecha */}
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label htmlFor="salary">Salario estimado</Label>
                  <Input
                    id="salary"
                    name="salary"
                    placeholder="Ej: S/ 3000"
                    required
                  />
                </Field>
                <Field>
                  <Label htmlFor="date">Fecha de emisión</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    disabled
                    className="bg-gray-200 text-gray-500 cursor-not-allowed"
                  />
                </Field>
              </div>

              {/* Medio de contacto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-3">
                  <Label>Medio de contacto</Label>
                  <div className="flex gap-6">
                    <button
                      type="button"
                      onClick={() => setWhatsapp(!whatsapp)}
                      className={`w-24 h-9 flex items-center justify-center rounded-lg border transition ${
                        whatsapp
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-transparent text-green-500 border-green-500"
                      }`}
                    >
                      <FaWhatsapp size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setCall(!call)}
                      className={`w-24 h-9 flex items-center justify-center rounded-lg border transition ${
                        call
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-transparent text-blue-500 border-blue-500"
                      }`}
                    >
                      <MdLocalPhone size={20} />
                    </button>
                  </div>
                </div>

                <Field>
                  <Label htmlFor="contact">Número de contacto</Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder="987654321"
                    disabled={!(whatsapp || call)}
                    required={whatsapp || call}
                    className={`transition-colors ${
                      whatsapp || call
                        ? "bg-white text-black border-gray-300"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  />
                </Field>
              </div>
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>

              <Button type="button" onClick={handlePostular}>
                Postular
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
