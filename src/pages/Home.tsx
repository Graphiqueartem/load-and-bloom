import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Upload, Trophy, Calendar, ArrowRight, Users, VideoIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from '@/assets/hero-dance.jpg';
import eventPoster1 from '@/assets/event-poster-1.jpg';
import eventPoster2 from '@/assets/event-poster-2.jpg';
import eventPoster3 from '@/assets/event-poster-3.jpg';
import eventPosterCompetition from '@/assets/event-poster-competition-1.jpg';
import eventPosterMasterclass from '@/assets/event-poster-masterclass-1.jpg';
import eventPosterWorkshop from '@/assets/event-poster-workshop-1.jpg';
import competitionStage from '@/assets/competition-stage.jpg';
import workshopScene from '@/assets/workshop-scene.jpg';
import communityDance from '@/assets/community-dance.jpg';
import onlineClass from '@/assets/online-class.jpg';
import ballroomDance from '@/assets/ballroom-dance.jpg';
import contemporaryDance from '@/assets/contemporary-dance.jpg';
import hipHopDance from '@/assets/hip-hop-dance.jpg';
import dubaiFinale from '@/assets/dubai-finale.jpg';

const Home = () => {
  return (
    <div className="pb-4 md:pb-8">
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
            <p className="text-xl sm:text-2xl md:text-3xl font-open-sans text-white drop-shadow-lg max-w-4xl mx-auto">
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
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-[60fr_40fr] gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 max-w-[700px]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
                Welcome to LoveDanceLive — your global stage for dance.
              </h2>
              <div className="text-lg text-foreground leading-relaxed space-y-4">
                <p>
                  Each season, five regional host cities are chosen across five continents to hold our live qualifiers. This year's venues are <span className="font-semibold text-foreground">Mexico City (Americas), Sydney (Oceania), Johannesburg (Africa), Seoul (Asia), and London (Europe).</span>
                </p>
                <p>
                  Dancers from any country may enter the regional for their own continent or submit online from anywhere in the world.
                </p>
                <p>
                  Regional champions and top online performers receive Golden Tickets to the three-day Grand Final in Dubai, staying with their registered chaperones in private resort suites as part of the finalist experience.
                </p>
                <p className="font-semibold text-foreground">
                  LoveDanceLive is where talent meets opportunity, and every rhythm finds its stage.
                </p>
              </div>
              <Button size="lg" className="hover:scale-105 transition-all shadow-lg" asChild>
                <Link to="/about">
                  Learn More About LoveDanceLive
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <img 
                src={communityDance} 
                alt="Diverse teen dancers" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enter Online + Workshops + Online Classes - 3 Columns */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Compete Live */}
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-[400px] flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={competitionStage}
                  alt="Live stage performance" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Compete Live</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-foreground mb-4">
                  Choose your continent's city — Mexico City, Sydney, Johannesburg, Seoul, or London — and feel the energy of the crowd. Regional champions qualify for Dubai.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/events">Register for Live Event</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Submit Online */}
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-[400px] flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={onlineClass}
                  alt="Online dance submission" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Submit Online</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-foreground mb-4">
                  Upload your routine from anywhere in the world. Top online scores earn Golden Tickets.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/performance-review-form">Submit Video Online</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Learn & Improve */}
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-[400px] flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={workshopScene}
                  alt="Dance class" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Learn & Improve</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-foreground mb-4">
                  Train with leading instructors in regional Workshops and Online Classes.
                </p>
                <div className="space-y-2">
                  <Button className="w-full" variant="secondary" asChild>
                    <Link to="/workshops">View Workshops</Link>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/online-classes">Browse Classes</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Regional Events - 5 Cities */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Regional Events
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>
          
          {/* Events Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { city: 'Mexico City, Mexico', date: '29 Febrero', venue: 'Teatro de la Ciudad', icon: '🇲🇽', image: eventPoster1 },
                { city: 'Sydney, Australia', date: '27 Jullano', venue: 'Opera House', icon: '🇦🇺', image: eventPoster2 },
                { city: 'Johannesburg, South Africa', date: '30 Arausto', venue: 'The Teatro', icon: '🇿🇦', image: eventPoster3 },
                { city: 'Seoul, South Korea', date: '24 Joubon', venue: 'COEX Artium', icon: '🇰🇷', image: eventPosterCompetition },
                { city: 'London, United Kingdom', date: '24 Leaine', venue: 'Sadler\'s Wells', icon: '🇬🇧', image: eventPosterMasterclass },
              ].map((event, index) => (
                <Card key={index} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={event.image}
                      alt={event.city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 text-5xl">{event.icon}</div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-poppins">{event.city}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.venue}</p>
                    </div>
                    <Button className="w-full bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                      <Link to="/registration">Register Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <p className="text-center text-foreground mt-6 md:mt-8 max-w-3xl mx-auto text-sm md:text-base">
            These locations rotate each season, so every continent hosts fresh opportunities for local talent.
          </p>
        </div>
      </section>

      {/* How It Works - Icon Strip */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-primary/5 via-turquoise/5 to-accent/5">
        <div className="w-full px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              How It Works
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12 max-w-6xl mx-auto">
            {[
              { number: '1', icon: Trophy, label: 'Choose Live or Online', desc: 'Select your regional event or submit online' },
              { number: '2', icon: Users, label: 'Prepare Routine', desc: 'Practice your dance performance' },
              { number: '3', icon: Play, label: 'Perform', desc: 'Showcase your talent on stage or video' },
              { number: '4', icon: Calendar, label: 'Get Results', desc: 'Receive your scores and feedback' },
              { number: '5', icon: ArrowRight, label: 'Qualify for Dubai', desc: 'Win a Golden Ticket to the finals' },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <p className="text-base font-semibold text-foreground">{step.label}</p>
                  <p className="text-sm text-foreground">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-[900px] mx-auto space-y-6">
            <p className="text-lg text-foreground leading-relaxed text-center">
              Golden Ticket winners from each continent — whether they performed at this year's regionals in Mexico City, Sydney, Johannesburg, Seoul, or London, or qualified online — attend the three-day Dubai Final with their registered chaperones in private resort suites. Workshops fill Days 1 and 2; the Final Showcase and Awards ignite Day 3. Full details for chaperones and guardians are on our Dubai page.
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

      {/* Workshops & Classes Preview - 2 Columns Reversed */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img 
                src={ballroomDance}
                alt="Dance instructor" 
                className="rounded-2xl shadow-2xl w-full aspect-[7/5] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
                Workshops & Classes Preview
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Learn from top teachers at each regional event — Mexico City, Sydney, Johannesburg, Seoul, London — and keep training online all year. At the Dubai Final, Days 1 and 2 feature exclusive masterclasses for finalists and optional guest sessions for chaperones.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/workshops">View Workshop Schedule</Link>
                </Button>
                <Button size="lg" className="w-full" variant="outline" asChild>
                  <Link to="/online-classes">Browse Online Classes</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Updates & Highlights */}
      <section className="py-8 md:py-16 bg-light-blue/20">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src={contemporaryDance}
                alt="LoveDanceLive team backstage" 
                className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
                  Official Updates & Behind the Scenes
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-turquoise rounded-full"></div>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Follow our coverage throughout the season for photos, videos and stories from each regional city — Mexico City, Sydney, Johannesburg, Seoul, London — plus exclusive clips as we count down to Dubai.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/news">See Latest Updates</Link>
                </Button>
                <Button size="lg" className="w-full bg-gradient-to-r from-accent to-neon-pink hover:from-accent/90 hover:to-neon-pink/90" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Follow Us on Instagram
                  </a>
                </Button>
              </div>
              <p className="text-base text-foreground italic">
                Get inspired, stay motivated and see the magic unfold each week around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Videos Preview */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Celebrate the Journey
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Watch highlights from past finals and see what awaits in Dubai. Download your performance or order a Premium Critique for expert feedback.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { id: 1, img: eventPosterWorkshop },
              { id: 2, img: hipHopDance },
              { id: 3, img: ballroomDance },
              { id: 4, img: contemporaryDance },
              { id: 5, img: competitionStage },
              { id: 6, img: workshopScene }
            ].map((item) => (
              <div key={item.id} className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer">
                <img 
                  src={item.img}
                  alt={`Video ${item.id}`}
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

      {/* Sponsors + Shop - 2 Columns */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Sponsors Column */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                  Sponsors
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0"></div>
              </div>
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3, 4, 5].map((sponsor) => (
                  <div key={sponsor} className="w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
                    <span className="text-xs text-muted-foreground font-semibold">Logo {sponsor}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full md:w-auto" variant="outline" asChild>
                <Link to="/sponsors">Become a Sponsor</Link>
              </Button>
            </div>

            {/* Shop Column */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                  Shop
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="aspect-square bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"></div>
                ))}
              </div>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link to="/shop">Shop the Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Finale Strip - Full Width */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={dubaiFinale}
            alt="Dubai stage and resort skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-turquoise/80 to-accent/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Grand Final · Dubai
            </h2>
            <p className="text-2xl sm:text-3xl font-poppins font-bold text-white/95 drop-shadow-lg">
              Three Days of Dance and Celebration
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Regional and online winners from Mexico City, Sydney, Johannesburg, Seoul, and London unite for three days of workshops, performances and awards at our official resort.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
              <Link to="/about">
                Explore Dubai Finals
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-white/80">
              Includes Chaperones & Guardians Area
            </p>
          </div>
        </div>
      </section>

      {/* Series Board Preview - Gold Background */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground">
              Series Board
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Follow your continent's ranking as regional results arrive. Top ten countries glitter gold until Reveal Day — then names and flags unveil live.
            </p>
            <Button size="lg" className="shadow-lg" asChild>
              <Link to="/competitions">View Series Board</Link>
            </Button>
            <p className="text-base text-foreground max-w-3xl mx-auto pt-4">
              Reveal Days activate as each continent completes its regional final — starting with the Americas (Mexico City) and ending with Europe (London). Regional locations change each season so every continent enjoys new host cities and fresh opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-foreground">
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
            <p className="text-sm text-foreground italic">
              Thanks for joining — see you on the dance floor!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Band - Pink Background */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Your journey starts today — Enter your regional competition or submit your dance video online.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/events">Register for Live Event</Link>
              </Button>
              <Button size="lg" className="px-8 py-6 text-lg bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                <Link to="/performance-review-form">Submit Video Online</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/how-to-enter">How to Enter</Link>
              </Button>
            </div>

            <p className="text-sm text-foreground">
              For dancers aged 6 – 21 · Under 18s attend with a registered chaperone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
