import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Upload, Star, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToEnter = () => {
  return (
    <div className="page-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Play className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Your Journey Starts Here
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Simple steps to showcase your talent.
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
                Joining LoveDanceLive is easy, whether you're performing live or submitting online.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Entry Options */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Entry Options
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Live Event Entry */}
            <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Live Event Entry</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Choose your regional city, register your slot, and step into the spotlight.
                </p>
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all w-full">
                  <Link to="/events">Register for Live Event</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Online Submission */}
            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Upload className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Online Submission</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Upload your performance video, choose premium critique if desired, and let the judges review.
                </p>
                <Button size="lg" asChild variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all w-full">
                  <Link to="/registration">Submit Online Video</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Premium Critiques */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Premium Critiques
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Receive expert feedback with detailed video commentary to help you grow.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-baby-pink/10 via-background to-light-blue/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Expert Feedback for Growth
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Upgrade your submission to receive personalized video critique from our panel of professional judges and choreographers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rules & Guidelines */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Rules & Guidelines
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Clear standards to keep the competition fair and fun.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-light-blue/10 via-background to-turquoise/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10">
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Videos must be between 1-3 minutes in length</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Original choreography or performance required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>HD quality (minimum 720p) recommended</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>All dance styles welcome</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Age categories: Junior (12-17), Adult (18+)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6">
                Ready to Begin?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/events">Register for Live Event</Link>
                </Button>
                <Button size="lg" asChild variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/registration">Submit Online Video</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/judges">Learn About Premium Critiques</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowToEnter;