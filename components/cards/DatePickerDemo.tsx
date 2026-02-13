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
export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  // Función para capitalizar la primera letra
  const formatDateES = (date: Date) => {
    const formatted = format(date, "PPP", { locale: es });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between font-normal "
        >
          {date ? (
            formatDateES(date)
          ) : (
            <span className="text-gray-500">Selecciona el día</span>
          )}
          <ChevronDownIcon className="size-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" w-[150%] p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            setOpen(false); // cierra el popover al seleccionar
          }}
          locale={es}
          weekStartsOn={0} // 🌟 0 = domingo, 1 = lunes
          disabled={{ before: new Date() }} // 🌟 deshabilita días anteriores a hoy
        />
      </PopoverContent>
    </Popover>
  );
}
