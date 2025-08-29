import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - ZLIX INC</title>
        <meta name="description" content="Contact ZLIX INC for Amazon wholesale partnerships. Reach us in Canada or USA for brand authorization opportunities." />
        <link rel="canonical" href="https://yourbrand.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="w-full">
          <img src="/zlixinc/images/contact-hero.jpg" alt="Contact ZLIX INC" className="w-full h-56 object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Contact ZLIX INC</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to partner with us? Get in touch to discuss brand authorization and wholesale opportunities.
              </p>
            </div>

            <div className="mb-12">
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle>Tell us about your brand</CardTitle>
                  <CardDescription>Amazon & Walmart focus. We reply within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <LeadForm />
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Canada - Ontario
                  </CardTitle>
                  <CardDescription>Headquarters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>ZLIX INC</strong></p>
                    <p>87 Hill Cres</p>
                    <p>Scarborough, ON, M1M1J3</p>
                    <p>Canada</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Canada Warehouse
                  </CardTitle>
                  <CardDescription>Warehouse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>ZLIX INC</strong></p>
                    <p>76 Riverbrook way SE</p>
                    <p>Calgary, Alberta, T2C3R6</p>
                    <p>Canada</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    USA Warehouse
                  </CardTitle>
                  <CardDescription>Primary storage & dispatch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>ZLIX INC</strong></p>
                    <p>9 N Fork Eagle Mountain Rd</p>
                    <p>Columbus, Montana, USA 59019-7379</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    USA Mailing Address
                  </CardTitle>
                  <CardDescription>Official correspondence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>ZLIX INC</strong></p>
                    <p>115 ZABRISKIE ST FL 2</p>
                    <p>Jersey City, NJ, USA 07307</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    India Office
                  </CardTitle>
                  <CardDescription>Sourcing center</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>ZLIX INC</strong></p>
                    <p>SCO 344 Orchid Harmony, Near Palanpore Fire Station, Gauravpath Road, Pal Adajan, Surat 395009, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>


            <div className="grid md:grid-cols-2 gap-6 mb-12 justify-center">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground text-center">
                    <a href="mailto:sales@zlixinc.com" className="underline">sales@zlixinc.com</a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground text-center">
                    <p>Monday - Friday</p>
                    <p>10:00 AM - 5:00 PM MST</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Ready to Partner With Us?</CardTitle>
                  <CardDescription>
                    Join our network of successful brands and start generating seven-figure revenue 
                    through our Amazon wholesale expertise.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full md:w-auto"
                  >
                    <Link to="/free-listing-assessment">Start Partnership Discussion</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;