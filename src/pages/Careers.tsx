import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Careers | ZLIX INC</title>
        <meta name="description" content="Join ZLIX INC — Amazon-first marketplace team. Roles in operations, advertising, creative, and growth." />
        <link rel="canonical" href="https://yourbrand.com/careers" />
      </Helmet>

      <section className="container py-16 md:py-20">
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Careers at ZLIX INC</h1>
          <p className="mt-4 text-muted-foreground">We’re building an agile marketplace team focused on brand trust and compounding results. Remote-friendly.</p>
        </header>

        <div className="mt-10 max-w-3xl mx-auto grid gap-6">
          {[ 
            { title: "Amazon Account Manager", desc: "Own P&L, catalog health, and growth plans across categories.", type: "Full-time" },
            { title: "Amazon/Walmart Ads Specialist", desc: "Plan and optimize SP/SB/SD and Walmart Connect.", type: "Full-time" },
            { title: "Creative Producer (A+ / Images)", desc: "Build conversion-focused images and A+ Content.", type: "Contract" },
          ].map((role) => (
            <article key={role.title} className="rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{role.title}</h3>
                <span className="text-xs text-muted-foreground">{role.type}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{role.desc}</p>
              <div className="mt-4">
                <a href="mailto:sales@zlixinc.com?subject=Career%20Application:%20" target="_blank" rel="noopener">
                  <Button size="sm">Email resume</Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Careers;
