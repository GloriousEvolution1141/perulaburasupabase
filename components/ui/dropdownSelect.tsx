// components/ui/DropdownSelect.tsx
"use client";

import { useState } from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { MapPin } from "lucide-react";
interface DropdownSelectProps {
  items: readonly string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean; // <-- nueva prop
}

export function DropdownSelect({
  items,
  defaultValue,
  onChange,
  disabled = false, // valor por defecto
}: DropdownSelectProps) {
  const [selected, setSelected] = useState(defaultValue || items[0]);

  const handleSelect = (value: string) => {
    if (disabled) return; // prevenir cambios si está deshabilitado
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center gap-1 w-32 justify-center"
          disabled={disabled} // <-- deshabilitar el botón
        >
          <MapPin className="h-4 w-4" />
          {selected}
        </Button>
      </DropdownMenuTrigger>
      {!disabled && ( // <-- ocultar items si está deshabilitado
        <DropdownMenuContent>
          {items.map((item) => (
            <DropdownMenuItem key={item} onClick={() => handleSelect(item)}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
