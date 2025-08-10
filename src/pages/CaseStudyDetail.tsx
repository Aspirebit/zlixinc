import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "./case-studies/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-semibold">Case study not found</h1>
        <p className="mt-2 text-muted-foreground">The case study you are looking for does not exist.</p>
        <div className="mt-6">
          <Button asChild variant="outline"><Link to="/case-studies">Back to all case studies</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-16 md:py-20">
      <Helmet>
        <title>{cs.title} - ZLIX INC</title>
        <meta name="description" content={`${cs.title} — ${cs.summary}`} />
        <link rel="canonical" href={`https://yourbrand.com/case-studies/${cs.slug}`} />
      </Helmet>

      <article className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">{cs.title}</h1>
          <p className="mt-2 text-muted-foreground">{cs.category} • {cs.timeframe}</p>
        </header>

        <section className="grid sm:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>Overview</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{cs.summary}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
              <CardDescription>Outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Revenue lift:</strong> {cs.metrics.revenueLift}</li>
                <li><strong>Units per month:</strong> {cs.metrics.unitsPerMonth}</li>
                <li><strong>Buy Box share:</strong> {cs.metrics.buyBox}</li>
                <li><strong>Review growth:</strong> {cs.metrics.reviewGrowth}</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>What we did</CardTitle>
              <CardDescription>Strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {cs.strategies.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-10 text-center">
          <Button asChild>
            <Link to="/contact">Discuss a partnership</Link>
          </Button>
          <div className="mt-4">
            <Button asChild variant="link"><Link to="/case-studies">← Back to Case Studies</Link></Button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CaseStudyDetail;
