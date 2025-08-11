import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { caseStudies } from "./case-studies/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/HeroBanner";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Amazon Case Studies - ZLIX INC</title>
        <meta
          name="description"
          content="Real Amazon results: 7-figure run rates, 100k+ monthly units across 10+ brands. Explore ZLIX INC case studies."
        />
        <link rel="canonical" href="https://yourbrand.com/case-studies" />
      </Helmet>

      <HeroBanner
        title="Amazon Case Studies"
        subtitle="Proof of performance across the US, Canada, and Mexico marketplaces. We partner long-term and scale responsibly."
        imageSrc="/images/fulfillment-hero.jpg"
        alt="Case studies background"
      />

      <div className="container py-12 md:py-16">
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Card key={cs.slug}>
              <CardHeader>
                <CardTitle>{cs.title}</CardTitle>
                <CardDescription>
                  {cs.category} • {cs.timeframe}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cs.summary}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-md border p-3">
                    <strong>Revenue</strong>
                    <div className="text-muted-foreground">{cs.metrics.revenueLift}</div>
                  </div>
                  <div className="rounded-md border p-3">
                    <strong>Units/mo</strong>
                    <div className="text-muted-foreground">{cs.metrics.unitsPerMonth}</div>
                  </div>
                  <div className="rounded-md border p-3">
                    <strong>Buy Box</strong>
                    <div className="text-muted-foreground">{cs.metrics.buyBox}</div>
                  </div>
                  <div className="rounded-md border p-3">
                    <strong>Reviews</strong>
                    <div className="text-muted-foreground">{cs.metrics.reviewGrowth}</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to={`/case-studies/${cs.slug}`}>Read case study</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;
