import { Toaster } from "sonner";
import FooterMain from "@/components/content/FooterMain";
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
