import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/HeroBanner";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ZLIX INC</title>
        <meta name="description" content="Terms of Service for ZLIX INC - Read our terms and conditions for using our wholesale services." />
        <link rel="canonical" href="https://yourbrand.com/terms-of-service" />
      </Helmet>
      
      <HeroBanner title="Terms of Service" subtitle={"Last updated: " + new Date().toLocaleDateString()} imageSrc="/images/contact-hero.jpg" alt="Terms of service background" />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">Terms of Service</h2>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using ZLIX INC's services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  ZLIX INC provides wholesale and marketplace business services, specializing in 
                  Amazon selling worldwide, particularly in the USA, Canada, and Mexico. We generate 
                  seven-figure business revenue per year for our partners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Brand Authorization</h2>
                <p className="text-muted-foreground mb-4">
                  All brand partnerships require proper authorization. Brands must provide written 
                  authorization for ZLIX INC to sell their products on various marketplaces including 
                  Amazon, Walmart, and eBay.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content and materials on this website are the property of ZLIX INC or its 
                  licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  ZLIX INC shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms shall be interpreted and governed in accordance with the laws of Ontario, 
                  Canada, and any disputes relating to these terms will be subject to the exclusive 
                  jurisdiction of the courts of Ontario.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
                <div className="text-muted-foreground">
                  <p className="mb-2"><strong>ZLIX INC</strong></p>
                  <p className="mb-2">87 Hill Cress, Scarborough, ON, M1M1J3</p>
                  <p className="mb-2">Email: sales@zlixinc.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;