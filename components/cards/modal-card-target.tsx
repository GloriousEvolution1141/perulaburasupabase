import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { Banknote, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DialogDemoProps {
  title: string;
  salary: string;
  location: string;
  date: string;
  description: string;
}

export function DialogCard({
  title,
  salary,
  location,
  date,
  description,
}: DialogDemoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Eye className="h-3 w-3" />
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 backdrop-blur-sm" />

        <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-sm !duration-0">
          <DialogHeader>
            <DialogTitle>Detalles de Oferta</DialogTitle>
          </DialogHeader>
          <hr className="border-t border-gray-300" />

          <div className="flex flex-col gap-3 ">
            <div className="flex items-center justify-center gap-3">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 uppercase"
              >
                <MapPin className="h-3 w-3 text-gray-400" />
                {location}
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center gap-1 uppercase"
              >
                <Calendar className="h-3 w-3 text-gray-400" />
                {date}
              </Badge>
            </div>

            <h2 className="text-xl font-bold text-center">{title}</h2>

            <div className="flex items-center justify-center gap-1 text-green-400 font-semibold">
              <Badge
                variant="outline"
                className="bg-green-100 border-green-500 text-green-700 flex items-center gap-1"
              >
                <Banknote className="h-5 w-5" />
                {salary}
              </Badge>
            </div>

            <p className="text-sm text-gray-600 text-center">{description}</p>
          </div>

          <DialogFooter className="flex gap-4 sm:justify-center mt-4">
            <Button variant="outline" className="flex items-center gap-2 px-6">
              <MdLocalPhone />
              Llamar
            </Button>
            <Button
              variant="default"
              className="flex items-center gap-2 px-6 bg-green-600 hover:bg-green-700"
            >
              <FaWhatsapp />
              WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
