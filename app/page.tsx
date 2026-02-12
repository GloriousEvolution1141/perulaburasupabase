import NavBar from "@/components/content/NavBarMain";
import ContentMain from "@/components/content/ContentMain";
import FooterMain from "@/components/content/FooterMain";
import { Toaster } from "@/components/ui/sonner";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ContentMain />
      <FooterMain />
    </div>
  );
}
