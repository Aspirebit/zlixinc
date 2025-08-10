const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex flex-col items-center md:items-start">
          <p>© {new Date().getFullYear()} ZLIX INC. All rights reserved.</p>
          <p className="text-xs">sales@zlixinc.com | +1 (416) 717-7856</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="/privacy-policy" className="hover:text-foreground">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-foreground">Terms of Service</a>
          <a href="/contact" className="hover:text-foreground">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
