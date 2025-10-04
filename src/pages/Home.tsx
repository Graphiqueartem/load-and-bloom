import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Upload, Trophy, ArrowRight, VideoIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

const heroImage = '/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png';

const Home = () => {
  return (
    <div className="pb-0">
      {/* Hero Video Header - Full Width 100vh */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional dance performance" 
            className="w-full h-full object-cover scale-105 animate-[scale-in_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-turquoise/85 to-accent/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold leading-tight text-white drop-shadow-2xl">
              Where Passion Meets Performance — Live & Online
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-open-sans text-white/95 drop-shadow-lg max-w-4xl mx-auto">
              Compete live in your continent's regional event or online for your chance to win a Golden Ticket to the Grand Final in Dubai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg shadow-2xl" asChild>
                <Link to="/registration">
                  <Trophy className="h-5 w-5 mr-2" />
                  Enter Competition
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg shadow-2xl" asChild>
                <Link to="/performance-review-form">
                  <Upload className="h-5 w-5 mr-2" />
                  Submit Dance Video
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg backdrop-blur-sm" asChild>
                <Link to="/competitions">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Highlights
                </Link>
              </Button>
            </div>

            <p className="text-sm sm:text-base text-white/90 mt-6">
              Ages 6 – 21 · Under 18s attend with a registered chaperone.
            </p>
          </div>
        </div>
      </section>

      {/* Dubai Finale + About Section - 2 Columns */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-0">
          <div className="grid md:grid-cols-2">
            {/* Finale in Dubai - Left */}
            <div className="bg-white p-8 md:p-16 flex items-center border-r border-border min-h-[500px]">
              <div className="max-w-2xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-8">
                  FINALE IN DUBAI
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-48 h-48 bg-turquoise rounded-lg flex-shrink-0"></div>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Our grand finale takes place in spectacular Dubai with incredible prizes to be won.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Regional and online winners from Mexico City, Sydney, Johannesburg, Seoul, and London unite for three days of workshops, performances and awards at our official resort.
                    </p>
                    <Button size="lg" className="mt-4" asChild>
                      <Link to="/about">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* About - Right */}
            <div className="bg-muted/30 p-8 md:p-16 flex items-center min-h-[500px]">
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-6">
                  ABOUT
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Welcome to LoveDanceLive — your global stage for dance. Each season, five regional host cities are chosen across five continents to hold our live qualifiers.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  This year's venues are Mexico City (Americas), Sydney (Oceania), Johannesburg (Africa), Seoul (Asia), and London (Europe).
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Dancers from any country may enter the regional for their own continent or submit online from anywhere in the world.
                </p>
                <p className="text-base md:text-lg text-foreground font-semibold">
                  LoveDanceLive is where talent meets opportunity, and every rhythm finds its stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Events - 5 Cities */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { city: 'MEXICO CITY', date: '29, Febrero', icon: '🇲🇽' },
              { city: 'SYDNEY', date: '27, Jullano', icon: '🇦🇺' },
              { city: 'JOHANNESBURG', date: '30, Arausto', icon: '🇿🇦' },
              { city: 'SEOUL', date: '24, Joubon', icon: '🇰🇷' },
              { city: 'LONDON', date: '24, Leaine', icon: '🇬🇧' },
            ].map((event, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-lg md:text-xl font-poppins font-bold text-foreground mb-4 text-center">
                  {event.city}
                </h3>
                <Card className="flex-1">
                  <div className="relative h-40 overflow-hidden rounded-t-lg bg-muted flex items-center justify-center">
                    <div className="text-6xl">{event.icon}</div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">{event.date}</p>
                      <p className="text-xs text-muted-foreground mt-1">{event.icon}</p>
                    </div>
                    <Button className="w-full bg-neon-pink hover:bg-neon-pink/90 text-white text-sm" asChild>
                      <Link to="/registration">REGISTER NOW</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <p className="text-center text-sm md:text-base text-muted-foreground mt-8 max-w-3xl mx-auto">
            These locations rotate each season, so every continent hosts fresh opportunities for local talent.
          </p>
        </div>
      </section>

      {/* Three Columns: Enter Online + Workshops + Online Classes */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-0">
          <div className="grid md:grid-cols-3">
            {/* Enter Online */}
            <div className="bg-white p-8 md:p-12 flex items-center justify-center border-r border-border min-h-[500px]">
              <div className="max-w-md text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground">
                  ENTER ONLINE
                </h2>
                <div className="w-32 h-32 bg-muted rounded-lg mx-auto flex items-center justify-center">
                  <VideoIcon className="h-16 w-16 text-muted-foreground" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Can't attend a regional event in person? Submit your dance video online for a chance to qualify. Open to all dancers worldwide.
                </p>
                <Button size="lg" className="bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                  <Link to="/performance-review-form">SUBMIT YOUR DANCE VIDEO</Link>
                </Button>
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-muted/30 p-8 md:p-12 flex items-center justify-center border-r border-border min-h-[500px]">
              <div className="max-w-md text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground">
                  WORKSHOPS
                </h2>
                <div className="w-full h-48 bg-turquoise rounded-lg"></div>
                <Button size="lg" className="bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                  <Link to="/workshops">REGISTER FOR WORKSHOPS</Link>
                </Button>
              </div>
            </div>

            {/* Online Classes */}
            <div className="bg-white p-8 md:p-12 flex items-center justify-center min-h-[500px]">
              <div className="max-w-md text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground">
                  ONLINE CLASSES
                </h2>
                <div className="w-full h-48 bg-turquoise rounded-lg"></div>
                <Button size="lg" className="bg-turquoise hover:bg-turquoise/90 text-white" asChild>
                  <Link to="/online-classes">BROWSE CLASSES</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Updates & Highlights */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              OFFICIAL UPDATES & HIGHLIGHTS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video bg-muted rounded-lg border border-border"></div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-turquoise hover:bg-turquoise/90 text-white" asChild>
              <Link to="/news">SEE LATEST UPDATES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors + Shop - 2 Columns */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-0">
          <div className="grid md:grid-cols-2">
            {/* Sponsors - Left */}
            <div className="bg-white p-8 md:p-16 flex items-center border-r border-border min-h-[400px]">
              <div className="max-w-2xl mx-auto w-full space-y-8">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
                  SPONSORS
                </h2>
                <div className="space-y-4">
                  <div className="h-3 bg-muted rounded-full w-full"></div>
                  <div className="h-3 bg-muted rounded-full w-5/6"></div>
                  <div className="h-3 bg-muted rounded-full w-2/3"></div>
                </div>
                <Button size="lg" className="bg-turquoise hover:bg-turquoise/90 text-white" asChild>
                  <Link to="/sponsors">BECOME A SPONSOR</Link>
                </Button>
              </div>
            </div>

            {/* Shop - Right */}
            <div className="bg-muted/30 p-8 md:p-16 flex items-center min-h-[400px]">
              <div className="max-w-2xl mx-auto w-full space-y-8">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
                  SHOP
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg border border-border"></div>
                      <div className="h-2 bg-muted rounded-full w-3/4"></div>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-turquoise hover:bg-turquoise/90 text-white" asChild>
                  <Link to="/shop">SHOP THE COLLECTION</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-turquoise/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              How It Works
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 max-w-5xl mx-auto">
            {[
              { icon: '1️⃣', label: 'Choose Live or Online' },
              { icon: '2️⃣', label: 'Prepare Routine' },
              { icon: '3️⃣', label: 'Perform' },
              { icon: '4️⃣', label: 'Get Results' },
              { icon: '5️⃣', label: 'Qualify for Dubai' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-28">
                <div className="text-5xl md:text-6xl mb-3">{step.icon}</div>
                <p className="text-xs md:text-sm font-semibold text-foreground">{step.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-[900px] mx-auto space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
              Golden Ticket winners from each continent — whether they performed at this year's regionals in Mexico City, Sydney, Johannesburg, Seoul, or London, or qualified online — attend the three-day Dubai Final with their registered chaperones in private resort suites. Workshops fill Days 1 and 2; the Final Showcase and Awards ignite Day 3.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/how-to-enter">How to Enter</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/competitions">Entry Rules</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Chaperones & Guardians
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Videos Preview */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Celebrate the Journey
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch highlights from past finals and see what awaits in Dubai. Download your performance or order a Premium Critique for expert feedback.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer">
                <img 
                  src="/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" 
                  alt={`Video ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/results-videos">See Results</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/user-dashboard">Download Your Video</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Series Board Preview */}
      <section className="py-16 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Series Board
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Follow your continent's ranking as regional results arrive. Top ten countries glitter gold until Reveal Day — then names and flags unveil live.
            </p>
            <Button size="lg" className="shadow-lg" asChild>
              <Link to="/competitions">View Series Board</Link>
            </Button>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto pt-4">
              Reveal Days activate as each continent completes its regional final — starting with the Americas (Mexico City) and ending with Europe (London). Regional locations change each season so every continent enjoys new host cities and fresh opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground">
              Stay Updated
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Get updates on this season's regional events in Mexico City, Sydney, Johannesburg, Seoul, London, and future host-city announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button size="lg" className="bg-turquoise hover:bg-turquoise/90 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Thanks for joining — see you on the dance floor!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Your journey starts today — Enter your regional competition or submit your dance video online.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-6 md:px-8 py-6 text-base md:text-lg" asChild>
                <Link to="/events">Register for Live Event</Link>
              </Button>
              <Button size="lg" className="px-6 md:px-8 py-6 text-base md:text-lg bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                <Link to="/performance-review-form">Submit Video Online</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-6 md:px-8 py-6 text-base md:text-lg" asChild>
                <Link to="/how-to-enter">How to Enter</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              For dancers aged 6 – 21 · Under 18s attend with a registered chaperone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;