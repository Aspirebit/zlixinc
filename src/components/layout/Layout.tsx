import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollToTop from "@/components/ScrollToTop";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ScrollToTop />
        <div key={location.pathname} className="animate-fade-in">
          <Outlet />
        </div>
      </main>
      <BackToTopButton />
      <SiteFooter />
    </div>
  );
};

export default Layout;
