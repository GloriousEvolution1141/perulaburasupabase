"use client";
import { CardSmall } from "./card-target";
import { jobs } from "@/app/data/jobs";

export function ListaTrabajos() {
  return (
    <div className="flex flex-wrap gap-4">
      {jobs.map((job) => (
        <CardSmall
          key={job.id}
          title={job.title}
          salary={job.salary}
          location={job.location} // <-- nuevo
          date={job.date} // <-- nuevo
          description={job.description}
          badgeText={job.badgeText}
          onAction={() => alert(`Postulaste a ${job.title}`)}
        />
      ))}
    </div>
  );
}
