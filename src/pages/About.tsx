import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageContent } from '@/hooks/usePageContent';
const heroImage = '/lovable-uploads/7b552ba3-15eb-4c78-881a-39a59b4dde8c.png';
const communityImage1 = '/lovable-uploads/d2c069b1-e51d-49e4-abab-48fe272bce2a.png';
const communityImage2 = '/lovable-uploads/b0860258-46f0-4e90-abc6-5f88cb2d3f46.png';

const About = () => {
  const { getContent, loading } = usePageContent('about');
  
  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contemporary dance performance showcasing artistic movement" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Our Story, Our Mission
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Connecting dancers across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10">
        {/* Main Copy Section */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <div className="text-center mb-6">
                <Globe className="h-14 w-14 text-primary mx-auto mb-4 animate-scale-in" />
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
                  About LoveDanceLive
                </h2>
              </div>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  LoveDanceLive was born from a simple idea: bring dancers from every corner of the world together. We blend live competition energy with the power of digital connection, creating a platform that celebrates talent, culture, and creativity.
                </p>
                <p>
                  Our mission is to empower dancers and build a global family through the joy of dance. We believe dance is more than movement — it's expression, connection, and community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dance Community Images */}
        <div className="mb-8 sm:mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={communityImage1} 
                alt="Group of dancers performing synchronized jump movement"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={communityImage2} 
                alt="Acrobatic dance group performing dynamic choreography"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Subsections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-turquoise mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Our Story</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From regional stages to online performances, we've built a competition where no dancer is left out.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-baby-pink/10 to-baby-pink/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-baby-pink mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Mission & Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To create opportunities, nurture talent, and unite dancers worldwide.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-light-blue/10 to-light-blue/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-light-blue mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Team</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A passionate group of dancers, choreographers, and event producers who believe in the power of rhythm.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-3">
                Ready to Join Our Global Family?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Whether you're a seasoned performer or just starting your dance journey, 
                there's a place for you in the LoveDanceLive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link 
                    to="/coming-soon" 
                    state={{ pageTitle: "Meet the Team" }}
                  >
                    Meet the Team
                  </Link>
                </Button>
                <Button size="lg" asChild variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/registration">Enter Competition</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/competitions">View Events</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;