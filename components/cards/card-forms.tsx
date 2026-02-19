"use client";
import { User } from "@supabase/supabase-js";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
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
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { DatePickerDemo } from "./DatePickerDemo";

export function DialogJobForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const router = useRouter();

  const [whatsapp, setWhatsapp] = useState(false);
  const [call, setCall] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [loading, setLoading] = useState(false);

  const [fechaFinalizacion, setFechaFinalizacion] = useState<Date | null>(null);

  const handlePostular = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      toast.error("Debes iniciar sesión");
      setLoading(false);
      return;
    }

    const form = e.target as HTMLFormElement; // 👈 CAMBIO
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const salary = formData.get("salary") as string;
    const contact = formData.get("contact") as string;

    if (!selectedDepartamento) {
      toast.error("Debes seleccionar un departamento");
      setLoading(false);
      return;
    }

    if (!fechaFinalizacion) {
      toast.error("Debes seleccionar una fecha de finalización");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("empleos").insert([
      {
        usuario_id: user.id,
        titulo: title,
        descripcion: description,
        salario: salary && salary.trim() !== "" ? Number(salary) : null,
        departamento_id: Number(selectedDepartamento),
        fecha_emision: new Date().toISOString(),
        fecha_finalizacion: fechaFinalizacion.toISOString(),
        numero_contacto: contact,
        permite_llamadas: call,
        permite_whatsapp: whatsapp,
      },
    ]);

    if (error) {
      console.error(error);
      toast.error("Error al crear el empleo");
      setLoading(false);
      return;
    }

    toast.success("¡Empleo creado correctamente!");

    setOpen(false);
    setWhatsapp(false);
    setCall(false);
    setSelectedDepartamento("");
    setLoading(false);

    window.location.reload();
    // router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="min-w-[120px]">
          Crear Empleo
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 backdrop-blur-sm" />

        <DialogContent className="sm:max-w-lg !duration-0">
          <DialogHeader>
            <DialogTitle>Crear un Empleo</DialogTitle>
            <DialogDescription>
              Completa la información del puesto y los medios de contacto.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePostular}>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label htmlFor="title">Título del puesto</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Ej: Cocinero, almacenero, etc"
                    required
                  />
                </Field>

                <Field>
                  <Label>Departamento</Label>
                  <DepartamentoSelect
                    value={selectedDepartamento}
                    onChange={(val) => setSelectedDepartamento(val)}
                  />
                </Field>
              </div>

              <Field>
                <Label htmlFor="description">Descripción del puesto</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  placeholder="Explica en qué consiste el trabajo."
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label htmlFor="salary">Salario estimado S/.</Label>
                  <Input
                    id="salary"
                    name="salary"
                    type="number"
                    max={999999}
                    min={0}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      if (e.currentTarget.value.length > 6) {
                        e.currentTarget.value = e.currentTarget.value.slice(
                          0,
                          6,
                        );
                      }
                    }}
                    placeholder="Ej: 1130"
                  />{" "}
                </Field>

                <Field>
                  <Label>Fecha de finalización</Label>
                  <DatePickerDemo
                    value={fechaFinalizacion}
                    onChange={setFechaFinalizacion}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-3">
                  <Label>Medio de contacto</Label>
                  <div className="flex gap-6 justify-center items-center">
                    <button
                      type="button"
                      onClick={() => setWhatsapp(!whatsapp)}
                      className={`w-24 h-9 flex items-center justify-center rounded-lg border transition ${
                        whatsapp
                          ? "bg-green-500 text-white border-green-500"
                          : "text-green-500 border-green-500"
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
                          : "text-blue-500 border-blue-500"
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
                    type="tel"
                    inputMode="numeric"
                    maxLength={9}
                    pattern="[0-9]{9}"
                    disabled={!(whatsapp || call)}
                    required={whatsapp || call}
                    placeholder="987654321"
                    className={`transition ${whatsapp || call ? "bg-white" : "bg-gray-300"}`}
                  />
                </Field>
              </div>
            </FieldGroup>

            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" disabled={loading}>
                {loading ? "Creando..." : "Crear Empleo"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
