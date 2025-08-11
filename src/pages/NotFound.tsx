import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner title="Page not found" subtitle={`Requested URL: ${location.pathname}`} imageSrc="/images/fulfillment-hero.jpg" alt="Not found background" />
      <div className="container pb-20">
        <div className="text-center">
          <a href="/" className="underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
