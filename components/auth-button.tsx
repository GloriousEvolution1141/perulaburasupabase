"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { Button } from "./ui/button";
import { DialogJobForm } from "./cards/card-forms";

export function AuthButton() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getClaims();
      setUser(data?.claims || null);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    // Skeleton mientras se carga
    return (
      <>
        <div className="flex items-center gap-4">
          <div className="w-[121px] h-9 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-[120px] h-9 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </>
    );
  }

  return user ? (
    <div className="flex items-center gap-4">
      <DialogJobForm user={user} />
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-4">
      <Button variant={"outline"} asChild className="min-w-[120px]">
        <Link href="/auth/login">Entrar</Link>
      </Button>
      <Button variant={"ghost"} asChild className="min-w-[120px]">
        <Link href="/auth/sign-up">Registrar</Link>
      </Button>
    </div>
  );
}
