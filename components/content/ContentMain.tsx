import { ListaTrabajos } from "@/components/cards/ListaTrabajos";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function ListaTrabajosSkeleton() {
  return (
    <div className="flex flex-wrap justify-start gap-5 max-w-fit mx-auto p-4">
      {Array(28)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <Card className="w-[250px] max-w-sm gap-0 py-4">
              <CardHeader className="px-3">
                <div className="flex items-start justify-between w-full gap-2">
                  <Skeleton className="h-5 w-2/3 rounded" />
                  <Skeleton className="h-5 w-6 rounded" />
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-700 mt-0">
                  <Skeleton className="h-3 w-10 rounded" />
                  <Skeleton className="h-3 w-8 rounded" />
                </div>
              </CardHeader>

              <CardContent className="h-[95px] overflow-hidden px-3 pt-2">
                <Skeleton className="h-4 w-full mb-1 rounded" />
                <Skeleton className="h-4 w-full mb-1 rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
              </CardContent>

              <CardFooter className="grid grid-cols-3 gap-0 px-3 items-center">
                <Skeleton className="h-6 w-16 rounded" />
                <div className="col-span-2 flex justify-center gap-2">
                  <Skeleton className="h-8 w-32 rounded" />
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default function ContentMain() {
  return (
    <Suspense fallback={<ListaTrabajosSkeleton />}>
      <ListaTrabajos />
    </Suspense>
  );
}
