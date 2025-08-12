import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <picture>
            <source media="(max-width: 1024px)" srcSet="/lovable-uploads/9967362a-9b29-499c-9477-d392d1eb563a.png" />
            <img src="/lovable-uploads/4a0f4f9f-a11c-4e29-adb9-4d32e4ab24cb.png" alt="ZLIX INC brand logo" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
          </picture>
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
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="mt-8 grid gap-4 text-base text-muted-foreground">
                  <a href="/#about" className="hover:text-foreground transition-colors">About</a>
                  <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
                  <a href="/#marketplaces" className="hover:text-foreground transition-colors">Marketplaces</a>
                  <a href="/#process" className="hover:text-foreground transition-colors">Process</a>
                  <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
                  <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                  <div className="pt-2">
                    <Link to="/contact">
                      <Button className="w-full" variant="hero" size="sm">Partner with us</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link to="/contact">
            <Button variant="hero" size="sm">Partner with us</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
