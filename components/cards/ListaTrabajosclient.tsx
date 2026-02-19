"use client";
import { useMemo } from "react";
import { CardSmall } from "./card-target";
import { useSearch } from "@/app/pruebaContext/SearchContext";

export function ListaTrabajosClient({ initialJobs }: { initialJobs: any[] }) {
  const { search, setSearch } = useSearch();
  const jobs = initialJobs;
  const loading = false;

  // Filtrado optimizado
  const filteredJobs = useMemo(() => {
    if (!search.trim()) return jobs;
    const term = search.toLowerCase();
    return jobs.filter(
      (job) =>
        job.titulo?.toLowerCase().includes(term) ||
        job.descripcion?.toLowerCase().includes(term) ||
        job.departamento?.toLowerCase().includes(term),
    );
  }, [search, jobs]);

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Input opcional dentro de la lista */}
      <input
        type="text"
        placeholder="Buscar trabajo por título, descripción o ubicación..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hidden"
      />

      {/* Lista de trabajos */}
      <div className="flex flex-wrap justify-start gap-5 max-w-fit mx-auto h-[90%]">
        {loading
          ? Array(28)
              .fill(0)
              .map((_, i) => <CardSmall key={i} isLoading />)
          : filteredJobs.map((job) => (
              <CardSmall
                key={job.id}
                title={job.titulo}
                salary={job.salario}
                location={job.departamento}
                date={job.fecha_emision}
                description={job.descripcion}
                badgeText={job.tiempo_restante}
                permiteLlamadas={job.permite_llamadas}
                permiteWhatsapp={job.permite_whatsapp}
                contact={job.numero_contacto}
              />
            ))}
      </div>

      {!loading && filteredJobs.length === 0 && (
        <p className="mt-6 text-gray-500">No se encontraron resultados.</p>
      )}
    </div>
  );
}
