import NavBar from "@/components/content/NavBarMain";
import ContentMain from "@/components/content/ContentMain";
import FooterMain from "@/components/content/FooterMain";
import { Toaster } from "@/components/ui/sonner";
import SharedInputs from "./pruebaContext/SharedInputs";
import { SearchProvider } from "./pruebaContext/SearchContext";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <SearchProvider> */}
        <NavBar />
        <ContentMain />
        {/* </SearchProvider> */}
      </div>
      {/* <SharedInputs />; */}
    </>
  );
}
