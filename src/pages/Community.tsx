import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, Trophy, Heart } from 'lucide-react';
import WelcomeModal from '@/components/onboarding/WelcomeModal';

const Community = () => {
  useEffect(() => {
    document.title = "Community - Forums & Challenges | LoveDanceLive";
  }, []);

  return (
    <div className="page-gradient-bg">
      <WelcomeModal pageName="community" />
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Your Global Dance Family
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Connect, share, inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10">
        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                Join the LoveDanceLive community forums to exchange tips, stories, and encouragement with dancers worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Features
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Forums</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conversations by genre, level, and interest.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Challenges</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Monthly dance challenges with prizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-light-blue/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Gallery</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Share your photos and videos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10 text-center">
              <Heart className="h-12 w-12 text-neon-pink mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
                Stay Connected
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Our community features are currently in development. Join our newsletter to be the first to know when they launch!
              </p>
              <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                <Link to="/registration">Join Community</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;