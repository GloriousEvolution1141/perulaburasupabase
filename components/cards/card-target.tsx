"use client";

import { Badge } from "@/components/ui/badge";
import { Banknote, Calendar, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { DialogCard } from "./modal-card-target";
import { CardActions } from "./buttonOptions"; // <-- importa tu nuevo componente

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

interface CardSmallProps {
  title?: string;
  salary?: string;
  location?: string;
  date?: string;
  description?: string;
  badgeText?: string;
  permiteLlamadas?: boolean;
  permiteWhatsapp?: boolean;
  contact?: string;
  pageName?: string;
  onAction?: () => void;
  isLoading?: boolean; // <-- nuevo prop
}

export function CardSmall({
  title,
  salary,
  location,
  date,
  description,
  badgeText,
  permiteLlamadas,
  permiteWhatsapp,
  contact,
  pageName,
  onAction,
  isLoading = false,
}: CardSmallProps) {
  function formatDate(fecha: string, format: "short" | "long" = "short") {
    const dateObj = new Date(fecha);

    if (format === "short") {
      const day = String(dateObj.getDate()).padStart(2, "0");
      const month = dateObj
        .toLocaleString("es-ES", { month: "short" })
        .toUpperCase();
      return `${day}-${month}`;
    }

    if (format === "long") {
      return dateObj.toLocaleDateString("es-PE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }

    return fecha;
  }

  // Render Skeleton
  if (isLoading) {
    return (
      <Card className="w-[20px] max-w-sm gap-0 py-4">
        <CardHeader className="px-3">
          <div className="flex items-start justify-between w-full gap-2">
            <Skeleton className="h-5 w-2/3 rounded" />
            <Skeleton className="h-5 w-6 rounded" />
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-700 mt-0">
            <Skeleton className="h-3 w-10 rounded" />
            <Skeleton className="h-3 w-12 rounded" />
            <Skeleton className="h-3 w-8 rounded" />
          </div>
        </CardHeader>

        <CardContent className="h-[95px] overflow-hidden px-3 pt-2">
          <Skeleton className="h-4 w-full mb-1 rounded" />
          <Skeleton className="h-4 w-full mb-1 rounded" />
          <Skeleton className="h-4 w-3/4 rounded" />
        </CardContent>

        <CardFooter className="grid grid-cols-3 gap-0 px-3 items-center">
          <Skeleton className="h-6 w-16 rounded" />
          <div className="col-span-2 flex justify-center gap-2">
            <Skeleton className="h-8 w-32 rounded" />
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Render Card real
  return (
    <Card
      className="w-[250px] max-w-sm gap-0 py-2 
                 max-sm:w-[170px] max-sm:py-2"
    >
      <CardHeader className="px-3 flex flex-col gap-2">
        <div className="flex items-center justify-between w-full gap-2">
          <CardTitle className="line-clamp-2 max-w-[80%]">{title}</CardTitle>
          <div className="flex-shrink-0">
            <DialogCard
              title={title!}
              salary={salary!}
              location={location!}
              date={date!}
              description={description!}
              permiteLlamadas={permiteLlamadas}
              permiteWhatsapp={permiteWhatsapp}
              contact={contact}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-700 mt-0">
          <div className="flex items-center gap-1 text-green-600 font-medium">
            <Banknote className="h-3 w-3" />
            <span>S/. {salary}</span>
          </div>

          <div className="flex items-center gap-1 uppercase text-gray-400 hidden">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
              {location}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(date!, "short")}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[95px] overflow-hidden px-3 pt-2">
        <p className="line-clamp-4 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>

      <CardFooter className="grid grid-cols-3 gap-0 px-3 items-center">
        <div className="flex justify-start">
          {badgeText && (
            <Badge
              variant="outline"
              className="bg-red-100 border-red-500 text-red-700 text-[10px] px-1 py-0.5 sm:text-xs sm:px-2 sm:py-1"
            >
              {badgeText}
            </Badge>
          )}
        </div>

        <CardActions
          permiteLlamadas={permiteLlamadas}
          permiteWhatsapp={permiteWhatsapp}
          contact={contact}
          title={title}
        />
      </CardFooter>
    </Card>
  );
}
