// departamentosPeru.ts

export const Departamentos = [
  // { id: 1, name: "Amazonas" },
  // { id: 2, name: "Áncash" },
  // { id: 3, name: "Apurímac" },
  // { id: 4, name: "Arequipa" },
  // { id: 5, name: "Ayacucho" },
  // { id: 6, name: "Cajamarca" },
  // { id: 7, name: "Cusco" },
  // { id: 8, name: "Huancavelica" },
  // { id: 9, name: "Huánuco" },
  // { id: 10, name: "Ica" },
  // { id: 11, name: "Junín" },
  // { id: 12, name: "La Libertad" },
  // { id: 13, name: "Lambayeque" },
  // { id: 14, name: "Lima" },
  // { id: 15, name: "Loreto" },
  // { id: 16, name: "Madre de Dios" },
  // { id: 17, name: "Moquegua" },
  // { id: 18, name: "Pasco" },
  // { id: 19, name: "Piura" },
  // { id: 20, name: "Puno" },
  // { id: 21, name: "San Martín" },
  { id: 22, name: "Tacna" },
  // { id: 23, name: "Tumbes" },
  // { id: 24, name: "Ucayali" }
] as const;

// Tipo para el objeto completo (ej: { id: 1, name: "Amazonas" })
export type Departamento = typeof Departamentos[number];

// Tipo para extraer solo los nombres si los necesitas (ej: "Amazonas" | "Áncash" ...)
export type DepartamentoNombre = typeof Departamentos[number]["name"];

// Tipo para extraer solo los IDs si los necesitas (ej: 1 | 2 ...)
export type DepartamentoId = typeof Departamentos[number]["id"];