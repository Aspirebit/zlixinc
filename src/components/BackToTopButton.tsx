import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button variant="secondary" size="icon" aria-label="Back to top" onClick={scrollTop}>
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default BackToTopButton;
