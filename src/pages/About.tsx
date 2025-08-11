import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/HeroBanner";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About ZLIX INC — Amazon & Walmart Growth Partner</title>
        <meta name="description" content="About ZLIX INC: 10+ years in digital marketing, 5+ years Amazon selling. Amazon authority with Walmart capability, 500+ affiliates, and full-funnel ads." />
        <link rel="canonical" href="https://yourbrand.com/about" />
      </Helmet>

      <HeroBanner title="About ZLIX INC" subtitle="Amazon-first wholesale partner with Walmart capability and full-funnel growth." imageSrc="/images/fulfillment-hero.jpg" alt="Amazon warehouse operations" />

      <div className="container py-16 md:py-20 max-w-4xl">

        <section className="space-y-4">
          <p className="text-foreground/90">
            We build brand authority on Amazon while operating effectively on Walmart. Our team brings 10+ years of
            digital marketing experience and 5+ years operating Amazon accounts at scale — from SEO and A+ Content to
            ads and inventory discipline.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Amazon & Walmart Ads (PPC, Sponsored Products/Brands, DSP where applicable)</li>
            <li>500+ affiliate partners to accelerate launches and rank important keywords</li>
            <li>Shopify/ecommerce store builds and CRO, with Meta and Google Ads driving demand</li>
            <li>Brand protection, MAP adherence, and unauthorized seller enforcement</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Our promise</h2>
          <p className="mt-3 text-muted-foreground">
            We prioritize long-term partnerships, transparent reporting, and operational excellence. The goal: reliable
            seven-figure annual revenue on Amazon for every qualified brand partner.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
