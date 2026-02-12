import { redirect } from "next/navigation";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import Home from "../page";
import { Toaster } from "sonner";
async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  // return JSON.stringify(data.claims, null, 2);
  console.log(data.claims);
  return null;
}

export default function ProtectedPage() {
  return (
    // <div className="flex-1 w-full flex flex-col gap-12">
    //   <div className="w-full">
    //     {" "}
    //     <Suspense>
    //       <UserDetails />
    //     </Suspense>
    //   </div>
    // </div>
    <>
      <Home />
    </>
  );
}
