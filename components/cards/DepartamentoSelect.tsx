"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Departamentos } from "@/app/data/provincia";

export function DepartamentoSelect({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Seleccione un departamento" />
      </SelectTrigger>

      <SelectContent className="!max-h-60" position="popper">
        <SelectGroup>
          {Departamentos.map((dep) => (
            <SelectItem
              key={dep.id}
              defaultValue={"Tacna"}
              value={dep.id.toString()}
            >
              {dep.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
