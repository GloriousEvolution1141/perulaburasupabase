import { createClient } from "@/lib/supabase/server";
import { ListaTrabajosClient } from "./ListaTrabajosclient";

export async function ListaTrabajos() {
  const supabase = await createClient();

  const { data: jobs, error } = await supabase
    .from("empleos_activos2")
    .select("*")
    .order("fecha_emision", { ascending: false });

  if (error) {
    console.error(error);
  }

  return <ListaTrabajosClient initialJobs={jobs || []} />;
}
