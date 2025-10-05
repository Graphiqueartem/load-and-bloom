import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import workshopsHero from '@/assets/workshops-hero.jpg';
import dubaiStudio from '@/assets/dubai-studio.jpg';

const Workshops = () => {
  const citySchedules = [
    {
      city: 'Mexico City',
      date: 'March 15-16, 2025',
      venue: 'Teatro de la Ciudad',
      styles: 'Hip Hop, Contemporary, Ballet',
      instructor: 'Carlos Rodriguez',
    },
    {
      city: 'Sydney',
      date: 'April 20-21, 2025',
      venue: 'Sydney Opera House Studios',
      styles: 'Latin Fusion, Contemporary, Freestyle',
      instructor: 'Sarah Chen',
    },
    {
      city: 'Johannesburg',
      date: 'May 10-11, 2025',
      venue: 'Joburg Theatre Complex',
      styles: 'Hip Hop, Ballet, Freestyle',
      instructor: 'Thabo Mthembu',
    },
    {
      city: 'Seoul',
      date: 'June 5-6, 2025',
      venue: 'Seoul Arts Center',
      styles: 'Contemporary, Hip Hop, Latin Fusion',
      instructor: 'Min-Ji Park',
    },
    {
      city: 'London',
      date: 'July 15-16, 2025',
      venue: 'Sadler\'s Wells Theatre',
      styles: 'Ballet, Contemporary, Freestyle',
      instructor: 'Emma Thompson',
    },
  ];

  const instructors = [
    {
      name: 'Carlos Rodriguez',
      country: 'Mexico',
      bio: 'Award-winning Hip Hop choreographer with 15 years experience teaching internationally and creating viral dance content.',
      image: '/lovable-uploads/team-1.jpg',
    },
    {
      name: 'Sarah Chen',
      country: 'Australia',
      bio: 'Contemporary dance specialist and former principal dancer with Sydney Dance Company, now mentoring rising talent.',
      image: '/lovable-uploads/team-2.jpg',
    },
    {
      name: 'Thabo Mthembu',
      country: 'South Africa',
      bio: 'Street dance pioneer blending African traditional movement with modern urban styles, inspiring dancers across continents.',
      image: '/lovable-uploads/team-3.jpg',
    },
  ];

  return (
    <div className="page-gradient-bg">
      {/* Global Banner */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-open-sans px-4">
          Workshops run alongside each regional event in Mexico City, Sydney, Johannesburg, Seoul, and London, plus exclusive sessions in Dubai.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={workshopsHero}
            alt="Dance workshops with professional instructors" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold text-white drop-shadow-lg">
              Workshops — Learn From the Best
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16">
        
        {/* Section 1: Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center mb-8">
                LoveDanceLive Workshops bring together world-class instructors to share technique and inspiration with young performers. Sessions cover Hip Hop, Contemporary, Ballet, Latin Fusion and Freestyle Performance.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                Every regional city hosts a two-day series leading up to competition day, open to registered participants and their chaperones.
              </p>
              <div className="text-center mt-8">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="#schedules">View Schedules</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: City Schedules */}
        <div id="schedules" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
              City Schedules
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose your city and book your workshop experience
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="mexico" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                {citySchedules.map((schedule) => (
                  <TabsTrigger 
                    key={schedule.city.toLowerCase().replace(' ', '')} 
                    value={schedule.city.toLowerCase().replace(' ', '')}
                    className="text-xs sm:text-sm"
                  >
                    {schedule.city}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {citySchedules.map((schedule) => (
                <TabsContent 
                  key={schedule.city.toLowerCase().replace(' ', '')} 
                  value={schedule.city.toLowerCase().replace(' ', '')}
                >
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-xl">
                    <CardContent className="p-8 sm:p-10">
                      <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6">
                        {schedule.city}
                      </h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">Date</p>
                            <p className="text-muted-foreground">{schedule.date}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">Venue</p>
                            <p className="text-muted-foreground">{schedule.venue}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">Lead Instructor</p>
                            <p className="text-muted-foreground">{schedule.instructor}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-5 w-5 flex items-center justify-center text-primary mt-1 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Styles</p>
                            <p className="text-muted-foreground">{schedule.styles}</p>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                        Book Your Workshop
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              Host cities rotate each season — check the next announcement for your continent.
            </p>
          </div>
        </div>

        {/* Section 3: Instructor Highlights */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
              Instructor Highlights
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn from world-renowned dancers and choreographers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-muted/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-[250px] h-[250px] mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {instructor.country}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {instructor.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              <Link to="/judges">See Full Instructor List</Link>
            </Button>
          </div>
        </div>

        {/* Section 4: Dubai Masterclasses */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-0 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={dubaiStudio}
                  alt="Dubai masterclass studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold gradient-text-hero mb-6">
                  Dubai Masterclasses
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At the Grand Final in Dubai, Days 1 and 2 feature exclusive masterclasses for finalists plus optional guest sessions for chaperones. These sessions are held onsite in the official resort studios and open for advance booking once Golden Ticket results are announced.
                </p>
                <Button size="lg" asChild className="w-full sm:w-auto hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/dubai-finals">Explore Dubai Finals</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Section 5: CTA Band */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-baby-pink to-neon-pink border-0 shadow-2xl">
            <CardContent className="p-10 sm:p-14 text-center">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-8">
                Learn, train and shine — book your LoveDanceLive workshops today.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Register Now
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white hover:text-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/online-classes">Browse Online Classes</Link>
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
