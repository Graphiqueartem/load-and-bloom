import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Home, Award, Users, GraduationCap, Download, Video } from 'lucide-react';
import dubaiHero from '@/assets/dubai-finals-hero.jpg';

const DubaiFinalsPage = () => {
  const schedule = [
    {
      day: 'DAY 1 · ARRIVAL & WORKSHOPS',
      activities: [
        'Welcome Ceremony · Orientation',
        'Genre-based classes (Hip Hop, Contemporary, Latin Fusion, Ballet, Freestyle)',
        'Evening social mixer by the pool'
      ]
    },
    {
      day: 'DAY 2 · REHEARSALS & SHOWCASE PREVIEW',
      activities: [
        'Morning tech run on main stage · Judges feedback',
        'Afternoon masterclasses (open to chaperones at discount rate)',
        'Optional photo shoots + media interviews'
      ]
    },
    {
      day: 'DAY 3 · GRAND SHOWCASE & AWARDS NIGHT',
      activities: [
        'Full stage show filmed for global broadcast',
        'Continental winners announced · Crowning of the LoveDanceLive Champion',
        'After-show celebration for finalists and chaperones'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={dubaiHero} 
            alt="Dubai Grand Final resort and stage at night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Grand Final Dubai — The Ultimate Stage
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Introduction */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Every season ends in spectacular style at the LoveDanceLive Grand Final in Dubai.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Finalists from Mexico City, Sydney, Johannesburg, Seoul, London, and online divisions gather for a three-day experience of workshops, rehearsals and the international showcase awards night.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Each finalist stays with their registered chaperone in a private resort suite within the official event complex.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="#schedule">See Full Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Three-Day Schedule */}
      <section id="schedule" className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Three-Day Schedule
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {schedule.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">{item.day}</h3>
                      <ul className="space-y-3">
                        {item.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-3 text-foreground">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/coming-soon" state={{ pageTitle: "Dubai Itinerary PDF" }}>
                <Download className="h-5 w-5 mr-2" />
                Download Dubai Itinerary PDF
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3 - Accommodation & Chaperones */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-[40fr_60fr] gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <img 
                src={dubaiHero} 
                alt="Luxury resort suite interior" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground">
                Accommodation & Chaperones
              </h2>
              <div className="text-lg text-foreground leading-relaxed space-y-4">
                <p>
                  All finalists stay onsite in twin-suite accommodation with their registered chaperone.
                </p>
                <p>
                  Chaperones receive a complimentary spectator ticket for all stage events and access to the Welcome Ceremony and Awards Night.
                </p>
                <p>
                  Optional workshop passes are available at reduced rates during Days 1–2.
                </p>
                <p>
                  Detailed guidelines and booking forms are available through the Chaperones Area.
                </p>
              </div>
              <Button asChild>
                <Link to="#chaperones">Open Chaperones Area</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Workshops in Dubai */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-turquoise/20 via-turquoise/10 to-turquoise/20">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center mx-auto">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Workshops in Dubai
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Finalists attend exclusive masterclasses led by the LoveDanceLive faculty and guest artists from each continent.
              Sessions range from technique and choreography to mindset and well-being for young performers.
            </p>
            <Button size="lg" asChild>
              <Link to="/workshops">Book Your Masterclasses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5 - Awards & Prizes */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-neon-pink flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Awards & Prizes
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Golden Ticket holders compete for continental titles, then for the global LoveDanceLive Champion Award.
              </p>
              <p>
                Trophies, scholarships and professional development packages are announced live on Awards Night.
              </p>
              <p>
                The top five dancers per continent also receive special honours on the Series Board as regional ambassadors for the next season.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link to="/results-videos">See Past Winners</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6 - Media & Downloads */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-turquoise/20 rounded-2xl blur-xl"></div>
              <img 
                src={dubaiHero} 
                alt="Press photographer at stage" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
                Media & Downloads
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Professional photos and videos from the Dubai Final are available to download through the Results & Videos page two weeks after the event.
              </p>
              <Button asChild>
                <Link to="/results-videos">
                  <Video className="h-5 w-5 mr-2" />
                  Go to Results & Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - CTA Band */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Ready to earn your place on the Dubai stage?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/registration">Enter Competition</Link>
              </Button>
              <Button size="lg" className="px-8 py-6 text-lg bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                <Link to="/performance-review-form">Submit Video Online</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/how-to-enter">How to Enter</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              For ages 6 – 21 · Under 18s attend with a registered chaperone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DubaiFinalsPage;