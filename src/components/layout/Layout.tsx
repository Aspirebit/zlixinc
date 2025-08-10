import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import BackToTopButton from "@/components/BackToTopButton";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <BackToTopButton />
      <SiteFooter />
    </div>
  );
};

export default Layout;
