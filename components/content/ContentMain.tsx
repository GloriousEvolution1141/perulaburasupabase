import { ListaTrabajos } from "@/components/cards/ListaTrabajos";

export default function ContentMain() {
  return (
    <main className="flex-1 flex flex-col gap-5 p-5">
      <ListaTrabajos />
    </main>
  );
}
