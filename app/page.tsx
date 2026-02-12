import { AuthButton } from "@/components/auth-button";
import Image from "next/image";
import { Suspense } from "react";
import { ListaTrabajos } from "@/components/cards/ListaTrabajos";
import { Search, Moon, MapPin, Plus } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 border-b border-border bg-white dark:bg-[#0B1B2B] z-50">
        {" "}
        <div className="flex h-16 w-full items-center justify-between px-6">
          {/* IZQUIERDA — Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-red-600">
              <Image
                src="/favicon.ico"
                alt="PeruLabura Logo"
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="leading-tight">
              <p className="text-lg font-semibold">
                Peru<span className="text-red-500">Labura</span>
              </p>
              <p className="text-xs text-gray-400">PORTAL NACIONAL</p>
            </div>
          </div>

          {/* CENTRO — Buscador expandible */}
          <div className="hidden w-full max-w-md md:flex">
            {/* <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar empleo..."
                className="pl-9  border-none text-white placeholder:text-gray-400 focus-visible:ring-0"
              />
            </div> */}
            <InputGroup className="relative w-full">
              <InputGroupInput placeholder="Buscar empleo..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
          {/* DERECHA — Acciones */}

          <div className="flex items-center gap-4">
            <ThemeSwitcher></ThemeSwitcher>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2 ">
                  <MapPin className="h-4 w-4" />
                  Tacna
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Lima</DropdownMenuItem>
                <DropdownMenuItem>Arequipa</DropdownMenuItem>
                <DropdownMenuItem>Tacna</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Suspense>
              <AuthButton />
            </Suspense>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col gap-5 p-5">
        <ListaTrabajos />
      </main>

      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-4">
        <p>PeruLabura © 2026 - Impulsando el Empleo Local</p>
      </footer>
    </div>
  );
}
