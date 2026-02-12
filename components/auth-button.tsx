import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { Button } from "./ui/button";
import { DialogJobForm } from "./cards/card-forms";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">
      <DialogJobForm />

      {/* Hey, {user.email}! */}
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-4">
      <Button asChild>
        <Link href="/auth/login">Acceder</Link>
      </Button>

      <Button asChild>
        <Link href="/auth/sign-up">Registrar</Link>
      </Button>
    </div>
  );
}
