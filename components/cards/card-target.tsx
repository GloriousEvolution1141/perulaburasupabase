"use client";

import { Badge } from "@/components/ui/badge";
import { Banknote, Calendar, Eye, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { DialogCard } from "./modal-card-target"; // tu ruta

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardSmallProps {
  title: string;
  salary: string;
  location: string;
  date: string;
  description: string;
  badgeText?: string;
  onAction?: () => void;
}

export function CardSmall({
  title,
  salary,
  location,
  date,
  description,
  badgeText,
  onAction,
}: CardSmallProps) {
  return (
    <Card className=" w-[250px] max-w-sm gap-0 py-4">
      <CardHeader className="px-3">
        <div className="flex items-start justify-between w-full gap-2">
          <CardTitle className="line-clamp-2 ">{title}</CardTitle>
          <div>
            <DialogCard
              title={title}
              salary={salary}
              location={location}
              date={date}
              description={description}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-700 mt-1">
          <div className="flex items-center gap-1 text-green-600 font-medium">
            <Banknote className="h-3 w-3" />
            <span>{salary}</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-gray-400" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[95px] overflow-hidden px-3">
        <p className="line-clamp-4 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>

      <CardFooter className="grid grid-cols-3 gap-0 px-3 items-center">
        <div className="flex justify-start">
          {badgeText && (
            <Badge
              variant="outline"
              className="bg-red-100 border-red-500 text-red-700"
            >
              {badgeText}
            </Badge>
          )}
        </div>

        <div className="col-span-2 flex justify-end">
          {onAction && (
            <Button
              size="sm"
              className="w-full max-w-[200px]"
              onClick={onAction}
            >
              {/* Postular */}
              <MdLocalPhone className="text-white-500 mr-2" />

              <FaWhatsapp className="text-white-500 mr-2" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
