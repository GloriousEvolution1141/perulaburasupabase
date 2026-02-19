"use client";

import { Departamentos } from "@/app/data/provincia";
import { AuthButton } from "@/components/auth-button";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import { Suspense, useState } from "react";
import { DropdownSelect } from "../ui/dropdownSelect";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useSearch } from "@/app/pruebaContext/SearchContext";
import { IoMdMenu } from "react-icons/io";

export default function NavBar({}: {}) {
  const { search, setSearch } = useSearch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-b border-border bg-white dark:bg-[#0B1B2B] z-50">
      <div className="flex h-16 w-full items-center justify-between px-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-red-600">
            <Image
              src="/favicon.ico"
              alt="TacnaLabura Logo"
              fill
              sizes="32px"
              className="object-contain p-2"
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-semibold">
              Tacna<span className="text-red-500">Labura</span>
            </p>
            <p className="text-xs text-gray-400">PORTAL</p>
          </div>
        </div>

        {/* ICONO DE MENÚ SOLO EN MÓVIL/TABLET */}
        <div className="flex md:hidden">
          <IoMdMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* CONTENIDO PARA DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <InputGroup className="relative w-[400px]">
            <InputGroupInput
              placeholder="Buscar empleo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="hidden md:flex gap-4">
          <Suspense>
            <DropdownSelect
              items={Departamentos.map((d) => d.name)}
              defaultValue="Tacna"
              disabled={true}
            />
            <AuthButton />
          </Suspense>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE EN MÓVIL/TABLET */}
      <div
        className={`md:hidden overflow-hidden transition-max-h duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col items-center gap-3 mt-2">
          <InputGroup className="relative w-full">
            <InputGroupInput
              placeholder="Buscar empleo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <Suspense>
            {/* <DropdownSelect
              items={Departamentos.map((d) => d.name)}
              defaultValue="Tacna"
              disabled={true}
            /> */}
            <AuthButton />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
