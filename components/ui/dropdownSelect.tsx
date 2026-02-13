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
  items: readonly string[]; // <-- aceptar readonly arrays
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function DropdownSelect({
  items,
  defaultValue,
  onChange,
}: DropdownSelectProps) {
  const [selected, setSelected] = useState(defaultValue || items[0]);

  const handleSelect = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button className="flex items-center gap-1"> */}
        <Button
          variant={"secondary"}
          className="flex items-center gap-1 w-32 justify-center"
        >
          <MapPin className="h-4 w-4" />
          {selected}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item} onClick={() => handleSelect(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
