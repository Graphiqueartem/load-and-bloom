import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import competitionImage from '@/assets/competition-stage.jpg';
const heroImage = '/lovable-uploads/ce1c8c79-cd7f-41eb-82b2-4635bcfa4eb0.png';

const Competitions = () => {
  const regionalEvents = [
    {
      city: 'Mexico City',
      date: 'March 15-17, 2024',
      venue: 'Teatro de la Ciudad',
      flag: '🇲🇽'
    },
    {
      city: 'Sydney',
      date: 'April 20-22, 2024',
      venue: 'Sydney Opera House',
      flag: '🇦🇺'
    },
    {
      city: 'Johannesburg',
      date: 'May 18-20, 2024',
      venue: 'Joburg Theatre',
      flag: '🇿🇦'
    },
    {
      city: 'Seoul',
      date: 'June 15-17, 2024',
      venue: 'Seoul Arts Center',
      flag: '🇰🇷'
    },
    {
      city: 'London',
      date: 'July 20-22, 2024',
      venue: 'Royal Albert Hall',
      flag: '🇬🇧'
    }
  ];

  return (
    <div className="page-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Dance competition stage with professional lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Trophy className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Compete Live. Compete Online.
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Your stage, your city, your world.
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
                Whether you're stepping into the spotlight at one of our international events or uploading your performance from home, LoveDanceLive competitions give you the chance to shine.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Regional Events */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Regional Events
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Held annually in five cities — Mexico City, Sydney, Johannesburg, Seoul, and London. Each event includes live battles, showcases, and workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {regionalEvents.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{event.flag}</div>
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-3">{event.city}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Submissions */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Online Submissions
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Can't make it in person? Submit your dance video anytime and compete for a chance to qualify.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Submit From Anywhere
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Record your performance, upload it to our platform, and let our expert judges review your talent.
                </p>
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/how-to-enter">Submit Video</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Grand Final */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Grand Final (Dubai)
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              The world's best come together for the ultimate competition stage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/10 via-neon-pink/10 to-baby-pink/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="text-6xl mb-6">🇦🇪</div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
                  The Ultimate Showdown
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Regional winners and top online performers compete in Dubai for the grand prize and international recognition.
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
                Ready to Compete?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/events">View Event Dates</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/how-to-enter">Register Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Competitions;