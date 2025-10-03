import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Monitor, MessageCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnlineClasses = () => {
  const classCategories = [
    {
      genre: 'Hip Hop Fundamentals',
      level: 'Beginner',
      duration: '4 weeks',
      price: '$49',
      color: 'turquoise'
    },
    {
      genre: 'Contemporary Flow',
      level: 'Intermediate',
      duration: '6 weeks',
      price: '$69',
      color: 'baby-pink'
    },
    {
      genre: 'Latin Rhythms',
      level: 'All Levels',
      duration: '5 weeks',
      price: '$59',
      color: 'accent'
    },
    {
      genre: 'Jazz Technique',
      level: 'Advanced',
      duration: '8 weeks',
      price: '$89',
      color: 'light-blue'
    }
  ];

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
                <Monitor className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Your Studio, Your Schedule
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Train anywhere, anytime with our digital classes.
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
                Keep dancing all year with our online portal. Learn at your own pace, connect with instructors, and join a growing virtual community.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Browse by Genre & Skill Level</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beginner to advanced.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Flexible Access</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Subscribe for unlimited classes or buy single sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-light-blue/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Interactive Learning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Live Q&A, homework uploads, and instructor feedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Browse by Genre */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Browse by Genre & Skill Level
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Beginner to advanced classes in all styles.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {['Hip-Hop', 'Contemporary', 'Jazz', 'Ballet', 'Fusion', 'Latin'].map((genre, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 sm:p-4 text-center hover:shadow-md transition-all">
                      <span className="font-poppins font-semibold text-sm sm:text-base text-foreground">{genre}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Flexible Access */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Flexible Access
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Subscribe for unlimited classes or buy single sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Subscription</h3>
                <p className="text-muted-foreground mb-6">Unlimited access to all classes</p>
                <Button size="lg" className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Single Session</h3>
                <p className="text-muted-foreground mb-6">Pay per class as you go</p>
                <Button size="lg" variant="secondary" className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Buy Single Class
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Learning */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Interactive Learning
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Live Q&A, homework uploads, and instructor feedback.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-light-blue/10 via-background to-turquoise/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10">
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Join live Q&A sessions with instructors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Upload your practice videos for feedback</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Get personalized tips to improve your technique</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Connect with a global community of learners</p>
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
                Start Learning Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/coming-soon" state={{ pageTitle: "Browse Classes" }}>Browse Classes</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/coming-soon" state={{ pageTitle: "Subscribe Now" }}>Subscribe Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;