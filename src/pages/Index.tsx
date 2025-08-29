import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Globe2, Shield, ShoppingBag, Package, Truck } from "lucide-react";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Amazon Wholesale Partner for your Brand | USA, Canada, Mexico</title>
        <meta name="description" content="We help brands scale on Amazon worldwide with a specialty in USA, Canada, and Mexico. Wholesale and marketplace growth partner." />
        <link rel="canonical" href="https://yourbrand.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ZLIX INC",
          url: "https://zlixinc.com/",
          areaServed: ["US", "CA", "MX"],
          description: "Amazon wholesale and marketplace growth partner",
          sameAs: [
            "https://www.amazon.com/",
            "https://www.walmart.com/",
            "https://www.ebay.com/"
          ]
        })}</script>
      </Helmet>

      

      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={`${import.meta.env.BASE_URL}images/fulfillment-hero.jpg`} alt="Amazon fulfillment center background" className="h-full w-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
          </div>
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Trusted Amazon Wholesale Partner for Growing Brands
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                We operate at scale on Amazon (primary) and Walmart. We run high‑ROI ads across Amazon, Walmart, Meta, and Google — amplified by 500+ affiliates. 10+ years in digital marketing and 5+ years in Amazon operations.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <a href="#contact"><Button variant="hero" size="lg">Become a Partner</Button></a>
                <a href="/free-listing-assessment"><Button variant="outline" size="lg">Free Listing Assessment</Button></a>
              </div>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2"><Shield className="opacity-70" /> Authorized seller</div>
                <div className="flex items-center justify-center gap-2"><Globe2 className="opacity-70" /> North America focus</div>
                <div className="flex items-center justify-center gap-2"><ShoppingBag className="opacity-70" /> 100k+ Sales/month</div>
                <div className="flex items-center justify-center gap-2"><Check className="opacity-70" /> 10+ brands worldwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t">
          <div className="container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who we are</h2>
              <p className="mt-4 text-muted-foreground">
                We’re a lean, professional marketplace operator focused on long-term partnerships. We handle listings, compliance, marketing, and logistics so brands can expand on Amazon without extra overhead.
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Brand protection with strict MAP adherence",
                "Professional listing optimization and A+ content",
                "FBA-first logistics with fast replenishment",
                "Clear reporting and dependable payments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 text-[hsl(var(--primary))]" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t">
          <div className="container py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">What we do for partners</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Brand Protection", desc: "MAP enforcement, unauthorized seller monitoring, and compliance." },
                { icon: ShoppingBag, title: "Wholesale Purchasing", desc: "Consistent wholesale orders with predictable terms and timelines." },
                { icon: Globe2, title: "Global Reach", desc: "Focus on USA, Canada, Mexico with marketplace-specific strategy." },
                { icon: Check, title: "Listing Excellence", desc: "SEO-driven copy, A+ content, and conversion-focused images." },
                { icon: Package, title: "FBA Operations", desc: "Inbound, prep, inventory forecasting, and restock discipline." },
                { icon: Truck, title: "FBM Capability", desc: "Fast merchant-fulfilled dispatch for seasonal or oversized SKUs." },
              ].map(({ icon: Icon, title, desc }) => (
                <article key={title} className="rounded-lg border p-6 transition-transform duration-200 hover:-translate-y-0.5">
                  <Icon className="text-[hsl(var(--primary))]" />
                  <h3 className="mt-4 font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplaces */}
        <section id="marketplaces" className="border-t">
          <div className="container py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Primary marketplaces</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Amazon", note: "Primary growth focus", logo: `${import.meta.env.BASE_URL}images/amazon.svg`, alt: "Amazon logo for marketplace focus" },
                { name: "Walmart", note: "Selective assortment", logo: `${import.meta.env.BASE_URL}images/walmart.svg`, alt: "Walmart logo for marketplace focus" },
              ].map(({ name, note, logo, alt }) => (
                <div key={name} className="rounded-lg border p-8 flex flex-col items-center text-center">
                  <img src={logo} alt={alt} className="h-10 md:h-14 opacity-90" loading="lazy" />
                  <div className="mt-4 text-lg font-medium">{name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="border-t">
          <div className="container py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">What partners say</h2>
            <div className="mt-8">
              <TestimonialsMarquee />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t">
          <div className="container py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Simple partnering process</h2>
            <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Introduction", desc: "Quick call to align on goals and categories." },
                { step: 2, title: "Authorization", desc: "We sign terms and get approved as an authorized seller." },
                { step: 3, title: "Setup", desc: "We optimize listings, set MAP, and plan inventory." },
                { step: 4, title: "Scale", desc: "Regular POs, performance reporting, and steady growth." },
              ].map(({ step, title, desc }) => (
                <li key={step} className="rounded-lg border p-6">
                  <div className="text-sm text-muted-foreground">Step {step}</div>
                  <div className="mt-1 font-medium">{title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{desc}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t">
          <div className="container py-16 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s grow your brand on Amazon</h2>
              <p className="mt-3 text-muted-foreground">We typically generate 7‑figure annual revenue for partners. Share your catalog and we’ll get back within 24 hours.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <Button className="w-full" variant="hero" onClick={() => { window.location.href = 'mailto:sales@zlixinc.com'; }}>
                    Email us
                  </Button>
                  <Button asChild className="w-full" variant="outline">
                    <a href="#process">See our process</a>
                  </Button>
                </div>
              <p className="mt-4 text-xs text-muted-foreground">Serving USA, Canada, and Mexico. Wholesale and marketplace channels only.</p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Index;
