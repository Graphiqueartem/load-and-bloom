import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Trophy, Star, Award } from 'lucide-react';
import competitionsHero from '@/assets/competitions-hero.jpg';

const Competitions = () => {
  const regionalEvents = [
    {
      city: 'MEXICO CITY - AMERICAS QUALIFIER',
      venue: 'Palacio de la Danza',
      date: 'May 10-12',
      description: 'Vibrant Latin rhythms set the tone for our season opener in the Americas.',
      flag: '🇲🇽'
    },
    {
      city: 'SYDNEY - OCEANIA QUALIFIER',
      venue: 'Harbour Hall',
      date: 'June 7-9',
      description: 'Street fusion meets coastal energy in this electrifying event.',
      flag: '🇦🇺'
    },
    {
      city: 'JOHANNESBURG - AFRICA QUALIFIER',
      venue: 'The Playhouse',
      date: 'July 15-17',
      description: 'Explosive energy and creativity from Africa\'s best emerging talent.',
      flag: '🇿🇦'
    },
    {
      city: 'SEOUL - ASIA QUALIFIER',
      venue: 'Seoul Arts Center',
      date: 'August 20-22',
      description: 'Precision meets innovation in Asia\'s premier dance competition.',
      flag: '🇰🇷'
    },
    {
      city: 'LONDON - EUROPE QUALIFIER',
      venue: 'Royal Albert Hall',
      date: 'September 10-12',
      description: 'Classic meets contemporary at Europe\'s most prestigious venue.',
      flag: '🇬🇧'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={competitionsHero} 
            alt="Five continental dance competition stages converging" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Competitions — Regional & Grand Final Events
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Overview Intro */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              LoveDanceLive connects five continents through one season of dance.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Each year new host cities are selected for our live regionals — this season: Mexico City (Americas), Sydney (Oceania), Johannesburg (Africa), Seoul (Asia) and London (Europe).
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Dancers may register for the regional closest to their home continent or compete online from anywhere.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-semibold">
              Winners and top scorers earn the coveted Golden Ticket to the three-day Grand Final in Dubai.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="/how-to-enter">How to Enter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Regional Event Cards */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Regional Events
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regionalEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-6xl mb-4">{event.flag}</div>
                  <h3 className="text-xl font-poppins font-bold text-foreground">{event.city}</h3>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed text-sm">
                    {event.description}
                  </p>
                  <Button size="sm" asChild className="w-full">
                    <Link to="/registration">Register for {event.city.split(' -')[0]}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-muted-foreground max-w-3xl mx-auto">
            Regional host cities rotate each season. Next year's venues will be announced during the Dubai Final.
          </p>
        </div>
      </section>

      {/* Section 3 - Online Submission */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-turquoise/20 via-turquoise/10 to-turquoise/20">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center mx-auto">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Online Submission
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Can't attend a regional? Upload your dance video from anywhere in the world. Online qualifiers are judged using the same scoring system as our live stages.
              </p>
              <p className="font-semibold">
                Top online performers from every continent are eligible for Golden Tickets to Dubai.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/performance-review-form">Submit Your Video</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/judges">Buy Premium Critique</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - How Judging Works */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-[60fr_40fr] gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground">
                How Judging Works
              </h2>
              <div className="text-lg text-foreground leading-relaxed space-y-4">
                <p>
                  All performances — live or online — are scored on <strong>Technique (30%), Performance (30%), Creativity (20%)</strong> and <strong>Overall Impact (20%)</strong>.
                </p>
                <p>
                  Regional panels include international judges representing multiple styles to ensure fairness and diversity.
                </p>
              </div>
              <Button asChild>
                <Link to="/judges">Meet the Judges</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <img 
                src={competitionsHero} 
                alt="Judges evaluating performances" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Series Board Highlights */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-neon-pink flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Series Board
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                As each regional concludes, its top ten countries appear live on our Series Board.
              </p>
              <p>
                Only flags and scores show until the continent's Final Reveal Day — then dancer names and videos unveil across our global stream.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link to="/series-board">View Series Board</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6 - Route to Dubai */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Route to Dubai
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              {['Regional Events', 'Online Submissions Close', 'Continental Reveal Days', 'Golden Tickets Issued', 'Dubai Grand Final'].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold mb-3">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{step}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Golden Ticket recipients receive an invitation pack detailing travel guidance, resort booking link, and Dubai Final schedule.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Chaperones receive their official spectator pass and accommodation guide at the same time.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/dubai-finals">Explore Dubai Finals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competitions;