import { AuthButton } from "@/components/auth-button";
import { ListaTrabajos } from "@/components/cards/ListaTrabajos";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <>
      <nav className="sticky top-0 border-b border-border bg-white dark:bg-[#0B1B2B] z-50">
        {" "}
        <div className="flex h-16 w-full items-center justify-between px-6">
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

          <div className="hidden w-full max-w-md md:flex">
            <InputGroup className="relative w-full">
              <InputGroupInput placeholder="Buscar empleo..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
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
    </>
  );
}
