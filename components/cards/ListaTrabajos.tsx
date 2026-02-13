// "use client";

// import { useEffect, useState } from "react";
// import { CardSmall } from "./card-target";
// import { createClient } from "@/lib/supabase/client";

// export function ListaTrabajos() {
//   const [jobs, setJobs] = useState<any[]>([]);
//   const supabase = createClient();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const { data, error } = await supabase
//         .from("empleos_activos2")
//         .select("*")

//         .order("fecha_emision", { ascending: false });

//       if (error) {
//         console.error("Error al traer empleos:", error);
//       } else {
//         setJobs(data || []);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-4">
//       {jobs.map((job) => (
//         <CardSmall
//           key={job.id}
//           title={job.titulo}
//           salary={job.salario}
//           location={job.departamento}
//           date={job.fecha_emision}
//           description={job.descripcion}
//           badgeText={job.tiempo_restante}
//           onAction={() => alert(`Postulaste a ${job.titulo}`)}
//         />
//       ))}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { CardSmall } from "./card-target";
import { createClient } from "@/lib/supabase/client";

export function ListaTrabajos() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("empleos_activos2")
        .select("*")
        .order("fecha_emision", { ascending: false });

      if (error) {
        console.error("Error al traer empleos:", error);
      } else {
        setJobs(data || []);
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
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
              permiteLlamadas={job.permite_llamadas} // <-- aquí
              permiteWhatsapp={job.permite_whatsapp} // <-- y aquí
              contact={job.numero_contacto}
              // onAction={() => alert(`Postulaste a ${job.titulo}`)}
            />
          ))}
    </div>
  );
}
