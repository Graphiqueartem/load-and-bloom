import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Upload, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { usePageContent } from '@/hooks/usePageContent';
const heroImage = '/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png';

const Home = () => {
  const { getContent, loading } = usePageContent('home');
  
  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="pb-24">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional dance performance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight text-white">
              Where Passion Meets Performance — Live & Online
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-open-sans text-white/90">
              Join dancers from Mexico City, Sydney, Johannesburg, Seoul, London — or submit your dance video from anywhere!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link to="/how-to-enter">
                  <Trophy className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  Enter Competition
                </Link>
              </Button>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link to="/how-to-enter">
                  <Upload className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  Submit Dance Video
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link to="/competitions">
                  <Play className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  Watch Live
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-accent/30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 h-8 sm:h-12 rotate-45 bg-white/20"></div>
      </section>

      {/* Welcome Copy Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-base sm:text-lg md:text-xl font-open-sans text-foreground leading-relaxed">
              Welcome to LoveDanceLive — your global stage for dance. Whether you're stepping into the spotlight in Mexico City, Sydney, Johannesburg, Seoul, London, or sharing your moves online from anywhere in the world, this is your moment. Compete, learn, and connect with a vibrant community that shares your rhythm.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground">
              About LoveDanceLive
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              LoveDanceLive was born from a simple idea: bring dancers from every corner of the world together.
            </p>
            <Button size="lg" asChild>
              <Link to="/about">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { city: 'Mexico City', date: 'March 15, 2024', venue: 'Teatro de la Ciudad', icon: '🇲🇽' },
              { city: 'Sydney', date: 'March 22, 2024', venue: 'Opera House', icon: '🇦🇺' },
              { city: 'Johannesburg', date: 'April 5, 2024', venue: 'The Teatro', icon: '🇿🇦' },
              { city: 'Seoul', date: 'April 12, 2024', venue: 'COEX Artium', icon: '🇰🇷' },
              { city: 'London', date: 'April 19, 2024', venue: 'Sadler\'s Wells', icon: '🇬🇧' },
              { city: 'Online', date: 'Ongoing', venue: 'Submit from anywhere', icon: '🌍' },
            ].map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{event.icon}</span>
                    <CardTitle className="text-xl font-poppins">{event.city}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.venue}</p>
                   <Button size="sm" className="w-full" asChild>
                     <Link to="/how-to-enter">
                       Register Now
                     </Link>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Online Classes Preview */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Workshops & Online Classes
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Learn from the best with workshops and online classes for all levels.
            </p>
            <Button size="lg" asChild>
              <Link to="/workshops">
                Browse Classes
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Preview */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Join Our Community
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Join the global dance conversation — connect, share, and inspire.
            </p>
            <Button size="lg" asChild>
              <Link to="/community">
                Join Community
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
              Our Sponsors
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="w-32 h-16 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Sponsor 1</span>
            </div>
            <div className="w-32 h-16 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Sponsor 2</span>
            </div>
            <div className="w-32 h-16 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Sponsor 3</span>
            </div>
            <div className="w-32 h-16 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Sponsor 4</span>
            </div>
            <div className="w-32 h-16 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Sponsor 5</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;