import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Upload, Trophy, Calendar, ArrowRight, Users } from 'lucide-react';
import { usePageContent } from '@/hooks/usePageContent';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const heroImage = '/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png';

const Home = () => {
  const { getContent, loading } = usePageContent('home');
  
  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="pb-12">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional dance performance" 
            className="w-full h-full object-cover scale-105 animate-[scale-in_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-turquoise/85 to-accent/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight text-white drop-shadow-2xl">
              Where Passion Meets Performance — Live & Online
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-open-sans text-white/95 drop-shadow-lg">
              Join dancers from Mexico City, Sydney, Johannesburg, Seoul, London — or submit your dance video from anywhere!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto shadow-2xl hover:shadow-accent/50" asChild>
                <Link to="/how-to-enter">
                  <Trophy className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  Enter Competition
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto shadow-2xl" asChild>
                <Link to="/how-to-enter">
                  <Upload className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  Submit Dance Video
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto backdrop-blur-sm" asChild>
                <Link to="/competitions">
                  <Play className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  Watch Live
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm animate-pulse shadow-2xl"></div>
        <div className="absolute bottom-20 right-10 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-accent/40 backdrop-blur-sm animate-bounce shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 h-8 sm:h-12 rotate-45 bg-baby-pink/30 backdrop-blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-light-blue/30 backdrop-blur-sm animate-pulse"></div>
      </section>

      {/* Welcome Copy Section */}
      <section className="py-5 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(64,224,208,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,20,147,0.08),transparent_50%)]"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold bg-gradient-to-r from-primary via-turquoise to-accent bg-clip-text text-transparent mb-4">
                  Your Global Stage Awaits
                </h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-turquoise to-accent mx-auto rounded-full"></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/50 transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg sm:text-xl md:text-2xl font-open-sans text-foreground/90 leading-relaxed text-center">
                Welcome to <span className="font-bold text-primary">LoveDanceLive</span> — your global stage for dance. Whether you're stepping into the spotlight in <span className="font-semibold">Mexico City, Sydney, Johannesburg, Seoul, London</span>, or sharing your moves online from anywhere in the world, this is your moment. Compete, learn, and connect with a vibrant community that shares your rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-5 bg-gradient-to-br from-turquoise/10 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
                    About LoveDanceLive
                  </h2>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  LoveDanceLive was born from a simple idea: <span className="font-semibold text-foreground">bring dancers from every corner of the world together</span>. A platform where talent knows no borders, and passion transcends distance.
                </p>
                <Button size="lg" className="hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-5 bg-gradient-to-br from-primary via-turquoise to-accent rounded-2xl shadow-xl">
                        <Trophy className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-sm font-semibold text-muted-foreground">Global Platform</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-accent animate-pulse animation-delay-150"></div>
                        <span className="text-sm font-semibold text-muted-foreground">Live & Online</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-turquoise animate-pulse animation-delay-300"></div>
                        <span className="text-sm font-semibold text-muted-foreground">World-Class Judges</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview - Carousel */}
      <section className="py-5 bg-gradient-to-b from-background via-turquoise/5 to-background relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0MEUwRDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTIgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTEyIDEyYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTIgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJNMzYgNDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xMiAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0yNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground relative inline-block mb-3">
                Upcoming Events
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join dancers worldwide in these exciting upcoming competitions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto px-8 sm:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { city: 'Mexico City', date: 'March 15, 2024', venue: 'Teatro de la Ciudad', icon: '🇲🇽', gradient: 'from-red-500/10 to-green-500/10' },
                  { city: 'Sydney', date: 'March 22, 2024', venue: 'Opera House', icon: '🇦🇺', gradient: 'from-blue-500/10 to-red-500/10' },
                  { city: 'Johannesburg', date: 'April 5, 2024', venue: 'The Teatro', icon: '🇿🇦', gradient: 'from-green-500/10 to-yellow-500/10' },
                  { city: 'Seoul', date: 'April 12, 2024', venue: 'COEX Artium', icon: '🇰🇷', gradient: 'from-blue-500/10 to-red-500/10' },
                  { city: 'London', date: 'April 19, 2024', venue: 'Sadler\'s Wells', icon: '🇬🇧', gradient: 'from-blue-600/10 to-red-600/10' },
                  { city: 'Online', date: 'Ongoing', venue: 'Submit from anywhere', icon: '🌍', gradient: 'from-primary/10 to-accent/10' },
                ].map((event, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className={`hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br ${event.gradient} backdrop-blur-sm overflow-hidden group h-full`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 group-hover:from-white/90 group-hover:to-white/70 transition-all duration-300"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center space-x-3">
                            <span className="text-4xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{event.icon}</span>
                            <CardTitle className="text-xl font-poppins group-hover:text-primary transition-colors">{event.city}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3 relative z-10">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">{event.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.venue}</p>
                          <Button size="sm" className="w-full hover:scale-105 transition-transform shadow-md hover:shadow-lg" asChild>
                            <Link to="/how-to-enter">
                              Register Now
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Workshops & Community - Side by Side on Desktop */}
      <section className="py-5 bg-gradient-to-br from-baby-pink/10 via-background to-light-blue/10 relative overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Workshops Card */}
            <div className="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-turquoise rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-poppins font-bold bg-gradient-to-r from-primary via-turquoise to-accent bg-clip-text text-transparent mb-3">
                    Workshops & Online Classes
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-turquoise rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Learn from the best with workshops and online classes for all levels.
                </p>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-turquoise hover:from-primary/90 hover:to-turquoise/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group" asChild>
                  <Link to="/workshops">
                    Browse Classes
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Community Card */}
            <div className="group bg-gradient-to-br from-white via-baby-pink/10 to-white backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-accent/20 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-start space-x-2">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center animate-pulse animation-delay-150 group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-turquoise/20 rounded-full flex items-center justify-center animate-pulse animation-delay-300 group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-turquoise rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-3">
                    Join Our Community
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-neon-pink rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Join the global dance conversation — connect, share, and inspire.
                </p>
                <Button size="lg" className="w-full bg-gradient-to-r from-accent to-neon-pink hover:from-accent/90 hover:to-neon-pink/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-accent/50 group" asChild>
                  <Link to="/community">
                    Join Community
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-5 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(64,224,208,0.03)_25%,rgba(64,224,208,0.03)_50%,transparent_50%,transparent_75%,rgba(255,20,147,0.03)_75%)] bg-[length:60px_60px]"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4 inline-block">
              Our Sponsors
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-2 rounded-full"></div>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 group">
            <div className="w-32 h-16 bg-gradient-to-br from-white to-muted rounded-lg shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-primary/20">
              <span className="text-xs text-muted-foreground font-semibold">Sponsor 1</span>
            </div>
            <div className="w-32 h-16 bg-gradient-to-br from-white to-muted rounded-lg shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-accent/20">
              <span className="text-xs text-muted-foreground font-semibold">Sponsor 2</span>
            </div>
            <div className="w-32 h-16 bg-gradient-to-br from-white to-muted rounded-lg shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-turquoise/20">
              <span className="text-xs text-muted-foreground font-semibold">Sponsor 3</span>
            </div>
            <div className="w-32 h-16 bg-gradient-to-br from-white to-muted rounded-lg shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-baby-pink/40">
              <span className="text-xs text-muted-foreground font-semibold">Sponsor 4</span>
            </div>
            <div className="w-32 h-16 bg-gradient-to-br from-white to-muted rounded-lg shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-light-blue/40">
              <span className="text-xs text-muted-foreground font-semibold">Sponsor 5</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;