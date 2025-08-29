import { Linkedin, Facebook } from "lucide-react";
const SiteFooter = () => {
  return <footer className="border-t">
      <div className="container py-10 flex flex-col items-center gap-8 text-sm text-muted-foreground">
        <img src={`${import.meta.env.BASE_URL}lovable-uploads/9967362a-9b29-499c-9477-d392d1eb563a.png`} alt="ZLIX INC logo" className="h-24 w-auto" />

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a href="/" className="hover:text-foreground">Home</a>
          <a href="/#about" className="hover:text-foreground">About Us</a>
          <a href="/#services" className="hover:text-foreground">Services</a>
          <a href="/free-listing-assessment" className="hover:text-foreground">Free Listing Assessment</a>
          <a href="/case-studies" className="hover:text-foreground">Case Studies</a>
          <a href="/careers" className="hover:text-foreground">Careers</a>
          <a href="/privacy-policy" className="hover:text-foreground">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-foreground">Terms of Service</a>
          <a href="/contact" className="hover:text-foreground">Contact Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/zlix/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <a href="https://www.facebook.com/zlix.ca/" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-foreground"><Facebook className="h-5 w-5" /></a>
        </div>

        <div className="text-center text-xs">
          <p>© {new Date().getFullYear()} ZLIX INC. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default SiteFooter;