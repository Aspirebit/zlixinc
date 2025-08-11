import { Helmet } from "react-helmet-async";
import LeadForm from "@/components/forms/LeadForm";

const FreeListingAssessment = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Free Amazon Listing Assessment | ZLIX INC</title>
        <meta name="description" content="Get a free Amazon listing assessment: SEO, A+ Content, images, reviews, and ads readiness. Actionable recommendations within 48 hours." />
        <link rel="canonical" href="https://yourbrand.com/free-listing-assessment" />
      </Helmet>

      <section className="container py-16 md:py-20">
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Free Amazon Listing Assessment</h1>
          <p className="mt-4 text-muted-foreground">We’ll review SEO, A+ Content, images, reviews, and ads readiness. Expect clear, prioritized recommendations.</p>
        </header>

        <div className="mt-10 max-w-3xl mx-auto">
          <LeadForm />
          <p className="mt-4 text-center text-sm text-muted-foreground">Prefer email? Reach us at <a className="underline" href="mailto:sales@zlixinc.com">sales@zlixinc.com</a></p>
        </div>
      </section>
    </main>
  );
};

export default FreeListingAssessment;
