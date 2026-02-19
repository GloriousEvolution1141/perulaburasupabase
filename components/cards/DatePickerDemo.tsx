"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronDownIcon } from "lucide-react";

type DatePickerDemoProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

export function DatePickerDemo({ value, onChange }: DatePickerDemoProps) {
  const [open, setOpen] = React.useState(false);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const formatDateES = (date: Date) => {
    const formatted = format(date, "dd/MM/yyyy", { locale: es });

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between font-normal"
        >
          {value ? (
            formatDateES(value)
          ) : (
            <span className="text-gray-500">Selecciona el día</span>
          )}
          <ChevronDownIcon className="size-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[150%] p-0 -translate-x-10 md:translate-x-0"
        align="start"
      >
        <Calendar
          mode="single"
          selected={value ?? undefined}
          onSelect={(selectedDate) => {
            onChange(selectedDate ?? null); // 🔥 enviamos al padre
            setOpen(false);
          }}
          locale={es}
          weekStartsOn={0}
          disabled={{ before: tomorrow }}
        />
      </PopoverContent>
    </Popover>
  );
}
