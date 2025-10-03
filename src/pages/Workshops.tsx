import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Workshops = () => {
  const workshops = [
    {
      genre: 'Hip Hop',
      instructor: 'Carlos Rodriguez',
      level: 'Beginner to Advanced',
      duration: '2 hours',
      color: 'turquoise'
    },
    {
      genre: 'Contemporary',
      instructor: 'Sarah Chen',
      level: 'Intermediate',
      duration: '1.5 hours',
      color: 'baby-pink'
    },
    {
      genre: 'Latin',
      instructor: 'Maria Santos',
      level: 'All Levels',
      duration: '2 hours',
      color: 'accent'
    },
    {
      genre: 'Jazz',
      instructor: 'David Kim',
      level: 'Beginner',
      duration: '1.5 hours',
      color: 'light-blue'
    },
    {
      genre: 'Street Dance',
      instructor: 'Thabo Mthembu',
      level: 'Advanced',
      duration: '2 hours',
      color: 'primary'
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
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Learn. Grow. Dance.
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Workshops with world-class instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 pb-0">
        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                LoveDanceLive workshops bring dancers face-to-face with industry professionals. Explore different styles, sharpen your technique, and expand your artistry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Schedule */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Schedule
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              View workshops by city and genre.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Workshops Across 5 Cities
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Workshops are available at all regional events in Mexico City, Sydney, Johannesburg, Seoul, and London.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Genres */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Genres
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Hip-Hop, Contemporary, Jazz, Ballet, Fusion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['Hip-Hop', 'Contemporary', 'Jazz', 'Ballet', 'Fusion'].map((genre, index) => (
              <Card key={index} className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-poppins font-bold text-foreground">{genre}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Instructors
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              World-renowned teachers and choreographers sharing their craft.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-baby-pink/10 via-background to-light-blue/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <Star className="h-12 w-12 text-baby-pink mx-auto mb-6" />
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Learn from Industry Leaders
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Our instructors are award-winning dancers, choreographers, and industry leaders with decades of combined experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Registration
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Limited slots — sign up early to secure your place.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/10 via-background to-neon-pink/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <Clock className="h-12 w-12 text-turquoise mx-auto mb-6" />
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Don't Miss Out
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Workshop spaces fill quickly. Register early to guarantee your spot with the instructors you want to learn from.
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
                Ready to Learn?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/events">View Workshop Schedule</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/registration">Register for Workshops</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Workshops;