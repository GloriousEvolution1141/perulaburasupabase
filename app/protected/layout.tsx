import { Toaster } from "sonner";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Suspense>
        <AuthButton />
      </Suspense> */}
      <div> {children}</div>
    </>
  );
}
