import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - ZLIX INC</title>
        <meta name="description" content="Contact ZLIX INC for Amazon wholesale partnerships. Reach us in Canada or USA for brand authorization opportunities." />
        <link rel="canonical" href="https://yourbrand.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Contact ZLIX INC</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to partner with us? Get in touch to discuss brand authorization and wholesale opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Canada Headquarters
                  </CardTitle>
                  <CardDescription>Our main office location</CardDescription>
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
                    USA Office
                  </CardTitle>
                  <CardDescription>Our United States presence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Aspirebit Technolab LLC</strong></p>
                    <p>18585 Coastal Hwy Unit 10 PMB 1089</p>
                    <p>Rehoboth Beach, DE 19971-6147</p>
                    <p>United States</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">partnerships@zlix.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Mailing Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground">
                    <p>76 Riverbrook way SE</p>
                    <p>Calgary, Alberta, T2C3R6</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM EST</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Ready to Partner With Us?</CardTitle>
                  <CardDescription>
                    Join our network of successful brands and start generating six-figure revenue 
                    through our Amazon wholesale expertise.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto"
                    onClick={() => window.location.href = 'mailto:partnerships@zlix.com?subject=Brand Partnership Inquiry'}
                  >
                    Start Partnership Discussion
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