import { Departamento } from "@/app/data/provincia";
import { AuthButton } from "@/components/auth-button";
import { ListaTrabajos } from "@/components/cards/ListaTrabajos";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { DropdownSelect } from "../ui/dropdownSelect";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ThemeSwitcher } from "../theme-switcher";
export default function NavBar() {
  return (
    <nav className="sticky top-0 border-b border-border bg-white dark:bg-[#0B1B2B] z-50">
      <div className="flex h-16 w-full items-center justify-between px-4">
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

        {/* <div className="hidden md:flex flex-1 justify-center px-4"> */}
        <div className="">
          <InputGroup className="relative w-[400px]">
            <InputGroupInput placeholder="Buscar empleo..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex-shrink-0 flex items-center gap-4 min-w-[350px]">
          <ThemeSwitcher></ThemeSwitcher>
          <DropdownSelect items={Departamento} defaultValue="Tacna" />
          <Suspense>
            <AuthButton />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
