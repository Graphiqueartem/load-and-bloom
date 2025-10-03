import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, Users, Globe, TrendingUp } from 'lucide-react';

const heroImage = '/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png';

const Sponsors = () => {
  React.useEffect(() => {
    document.title = "Sponsors - Partner with LoveDanceLive";
  }, []);

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with thousands of dancers across 5 continents',
      gradient: 'from-turquoise/10 to-turquoise/5'
    },
    {
      icon: Users,
      title: 'Engaged Audience',
      description: 'Passionate community of performers and dance enthusiasts',
      gradient: 'from-neon-pink/10 to-baby-pink/5'
    },
    {
      icon: TrendingUp,
      title: 'Brand Visibility',
      description: 'Featured placement at live events and digital platforms',
      gradient: 'from-light-blue/10 to-turquoise/5'
    },
  ];

  return (
    <div className="page-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Corporate partnership and sponsorship opportunities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Handshake className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Partner With Passion
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Reach a global audience of dancers & fans.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-5 pb-0">
        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                Sponsorship with LoveDanceLive connects your brand with thousands of dancers worldwide. From live events to digital platforms, partners gain exposure, loyalty, and meaningful engagement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Why Partner With Us
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`bg-gradient-to-br ${benefit.gradient} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-6">
                    <benefit.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Sponsorship Packages
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Tailored for brands of all sizes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                      Custom Partnership Opportunities
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      We offer flexible sponsorship packages designed to meet your brand's unique goals and budget.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-lg">Event Sponsorship</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>Logo placement at regional events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>Stage and venue branding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>VIP hospitality packages</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-lg">Digital Sponsorship</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                          <span>Website and social media features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                          <span>Live stream ad placements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                          <span>Email marketing campaigns</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Sponsors */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Current Sponsors
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Join our family of trusted partners.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/10 via-background to-baby-pink/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <p className="text-base sm:text-lg text-muted-foreground">
                  Sponsorship opportunities are available for the upcoming season. Contact us to learn more about how your brand can be part of our global dance movement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6">
                Interested in Partnership?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/contact">Explore Sponsorship Opportunities</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
