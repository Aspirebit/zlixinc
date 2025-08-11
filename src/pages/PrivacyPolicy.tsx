import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/HeroBanner";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ZLIX INC</title>
        <meta name="description" content="Privacy Policy for ZLIX INC - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://yourbrand.com/privacy-policy" />
      </Helmet>
      
      <HeroBanner title="Privacy Policy" subtitle={"Last updated: " + new Date().toLocaleDateString()} imageSrc="/images/contact-hero.jpg" alt="Privacy policy background" />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">Privacy Policy</h2>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name and contact information</li>
                  <li>Business information and authorization documents</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our wholesale services</li>
                  <li>Process brand authorization requests</li>
                  <li>Communicate with you about our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Information</h2>
                <div className="text-muted-foreground">
                  <p className="mb-2"><strong>ZLIX INC</strong></p>
                  <p className="mb-2">87 Hill Cress, Scarborough, ON, M1M1J3</p>
                  <p className="mb-2">Email: <a href="mailto:sales@zlixinc.com" className="underline">sales@zlixinc.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;