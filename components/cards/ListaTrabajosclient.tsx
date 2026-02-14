"use client";

import { useState } from "react";
import { CardSmall } from "./card-target";

export function ListaTrabajosClient({ initialJobs }: { initialJobs: any[] }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [loading] = useState(false);

  return (
    <div className="flex flex-wrap justify-start gap-5 max-w-fit mx-auto p-4">
      {loading
        ? Array(28)
            .fill(0)
            .map((_, i) => <CardSmall key={i} isLoading />)
        : jobs.map((job) => (
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
  );
}
