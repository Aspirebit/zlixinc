import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/lovable-uploads/9967362a-9b29-499c-9477-d392d1eb563a.png" alt="ZLIX INC logo" className="h-7 w-7 rounded-sm" />
          <span>ZLIX INC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="/#marketplaces" className="hover:text-foreground transition-colors">Marketplaces</a>
          <a href="/#process" className="hover:text-foreground transition-colors">Process</a>
          <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact">
            <Button variant="hero" size="sm">Partner with us</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
