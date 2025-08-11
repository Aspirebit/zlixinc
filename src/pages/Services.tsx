import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/HeroBanner";
import { Check, Shield, ShoppingBag, Megaphone, Store, Package, Truck } from "lucide-react";

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Services | Amazon & Walmart Growth Partner</title>
        <meta name="description" content="Amazon-first marketplace partner: listing optimization, A+ Content, Amazon SEO & Ads, Walmart setup, and full-funnel media across Meta & Google." />
        <link rel="canonical" href="https://yourbrand.com/services" />
      </Helmet>

      <HeroBanner title="Services built to earn your LOA" subtitle="Amazon authority with Walmart expansion. 10+ years in digital marketing, 5+ years in Amazon operations, and an affiliate network of 500+ creators." imageSrc="/images/fulfillment-hero.jpg" alt="Amazon services operations" />

      <section className="container py-12 md:py-16">

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, title: "Brand Protection", desc: "MAP, contribution control, and unauthorized seller removal." },
            { icon: ShoppingBag, title: "Wholesale Operations", desc: "Reliable POs, in-stock SLAs, and FBA-first replenishment." },
            { icon: Check, title: "Listing Excellence", desc: "A+ Content, Amazon SEO, and conversion-focused creative." },
            { icon: Package, title: "FBA Operations", desc: "Inbound, prep, restock discipline, and inventory forecasting." },
            { icon: Truck, title: "FBM Capability", desc: "Fast merchant-fulfilled dispatch for seasonal or oversized SKUs." },
            { icon: Megaphone, title: "Ads That Compound", desc: "Amazon & Walmart ads plus Meta/Google to boost demand." },
            { icon: Store, title: "DTC & Shopify", desc: "Build/optimize your Shopify store to complement marketplace growth." },
            { icon: Check, title: "Analytics & Reporting", desc: "Clear weekly reporting and retail-aware insights." },
          ].map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-lg border p-6">
              <Icon className="text-[hsl(var(--primary))]" />
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
