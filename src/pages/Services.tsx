import { Helmet } from "react-helmet-async";
import { Check, Shield, ShoppingBag, Megaphone, Store } from "lucide-react";

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Services | Amazon & Walmart Growth Partner</title>
        <meta name="description" content="Amazon-first marketplace partner: listing optimization, A+ Content, Amazon SEO & Ads, Walmart setup, and full-funnel media across Meta & Google." />
        <link rel="canonical" href="https://yourbrand.com/services" />
      </Helmet>

      <section className="container py-16 md:py-20">
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Services built to earn your LOA</h1>
          <p className="mt-4 text-muted-foreground">Amazon authority with Walmart expansion. 10+ years in digital marketing, 5+ years in Amazon operations, and an affiliate network of 500+ creators.</p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            { icon: Shield, title: "Brand Protection", desc: "MAP, contribution control, and unauthorized seller removal." },
            { icon: ShoppingBag, title: "Wholesale Operations", desc: "Reliable POs, in-stock SLAs, and FBA-first replenishment." },
            { icon: Check, title: "Listing Excellence", desc: "A+ Content, Amazon SEO, and conversion-focused creative." },
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
