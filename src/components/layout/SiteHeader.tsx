import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          MarketBridge Wholesale
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#marketplaces" className="hover:text-foreground transition-colors">Marketplaces</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button variant="hero" size="sm">Partner with us</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
