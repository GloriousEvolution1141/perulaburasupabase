"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

interface CardActionsProps {
  permiteLlamadas?: boolean;
  permiteWhatsapp?: boolean;
  contact?: string;
  title?: string;

  onAction?: (tipo: "llamada" | "whatsapp") => void;
}

export function CardActions({
  permiteLlamadas = false,
  permiteWhatsapp = false,
  contact = "",
  title = "",
  //   onAction,
}: CardActionsProps) {
  // Si no hay contacto o ningún canal permitido, no renderizamos nada
  if (!contact || (!permiteLlamadas && !permiteWhatsapp)) return null;

  const handleClick = (tipo: "llamada" | "whatsapp") => {
    // if (onAction) {
    //   onAction(tipo);
    //   return;
    // }

    if (tipo === "whatsapp") {
      // Mensaje de WhatsApp predeterminado
      const mensaje = encodeURIComponent(
        `Hola, estoy interesado en la publicación "${title}" en TacnaLabura.`,
      );
      window.open(`https://wa.me/${contact}?text=${mensaje}`, "_blank");
    }

    if (tipo === "llamada") {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = `tel:${contact}`;
      } else {
        // Desktop: mostramos número
        alert(`Llamar a: ${contact}`);
      }
    }
  };

  // Detectamos si hay solo un canal activo
  const singleChannel =
    permiteLlamadas !== permiteWhatsapp
      ? permiteLlamadas
        ? "llamada"
        : "whatsapp"
      : null;

  return (
    <div className="col-span-2 flex justify-end gap-2 w-full max-w-[200px]">
      {singleChannel ? (
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2"
          onClick={() => handleClick(singleChannel)}
        >
          {permiteLlamadas && <MdLocalPhone className="text-blue-500" />}
          {permiteWhatsapp && <FaWhatsapp className="text-green-500" />}
        </Button>
      ) : (
        <>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => handleClick("llamada")}
          >
            <MdLocalPhone className="text-blue-500" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => handleClick("whatsapp")}
          >
            <FaWhatsapp className="text-green-500" />
          </Button>
        </>
      )}
    </div>
  );
}
