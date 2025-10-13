import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Trophy, Mail } from 'lucide-react';
import placeholderImage from '@/assets/placeholder.png';

const About = () => {
  const teamMembers = [
    {
      name: 'Lorem Ipsum',
      title: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: placeholderImage
    },
    {
      name: 'Lorem Ipsum',
      title: 'Artistic Director',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: placeholderImage
    },
    {
      name: 'Lorem Ipsum',
      title: 'Competition Coordinator',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: placeholderImage
    },
    {
      name: 'Lorem Ipsum',
      title: 'Education Director',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: placeholderImage
    },
    {
      name: 'Lorem Ipsum',
      title: 'Regional Events Manager',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: placeholderImage
    },
    {
      name: 'Lorem Ipsum',
      title: 'Community Engagement Lead',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: placeholderImage
    }
  ];

  return (
    <div>
      {/* Global Banner */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-open-sans px-4">
          Join dancers live in Mexico City, Sydney, Johannesburg, Seoul, London — or submit your dance video from anywhere to qualify for Dubai.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={placeholderImage} 
            alt="Mixed-continent dancers mid-performance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Our Story & Mission
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Introduction */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              LoveDanceLive brings together young dancers from across the world through one shared language — movement.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Founded to connect cultures and celebrate rising talent, the platform unites five rotating regional host cities each season — currently Mexico City, Sydney, Johannesburg, Seoul, and London — with the Grand Final in Dubai.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              It's a celebration of creativity, discipline and friendship that crosses borders.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="#team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Founding Story */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-[60fr_40fr] gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground">
                Our Founding Story
              </h2>
              <div className="text-lg text-foreground leading-relaxed space-y-4">
                <p>
                  Born from a single idea — that every dancer deserves a stage — LoveDanceLive grew into an international competition and learning platform.
                </p>
                <p>
                  Each year thousands audition live or online, supported by families, schools and chaperones who make the dream possible.
                </p>
                <p>
                  From community studios in Mexico to rooftop rehearsals in London, to the final spotlights of Dubai — this is where passion meets performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <img 
                src={placeholderImage} 
                alt="Founders with dancers" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Mission & Values */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Mission & Values
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-turquoise flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground">Empowerment</h3>
                <p className="text-foreground leading-relaxed">
                  Giving dancers ages 6–21 a global voice through performance and training.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground">Opportunity</h3>
                <p className="text-foreground leading-relaxed">
                  Providing pathways from regional stages to Dubai and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-baby-pink to-neon-pink flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground">Community</h3>
                <p className="text-foreground leading-relaxed">
                  Creating a safe, encouraging environment for young talent and their support teams.
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/registration">Register for Your Region</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4 - Team Bios */}
      <section id="team" className="py-8 md:py-16 bg-gradient-to-br from-primary/5 via-turquoise/5 to-accent/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-poppins font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.title}</p>
                  <p className="text-sm text-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                <Mail className="h-5 w-5 mr-2" />
                Contact LoveDanceLive HQ
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA Band */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Be part of the story — join LoveDanceLive this season.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/registration">Enter Competition</Link>
              </Button>
              <Button size="lg" className="px-8 py-6 text-lg bg-neon-pink hover:bg-neon-pink/90 text-white" asChild>
                <Link to="/performance-review-form">Submit Dance Video</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/workshops">Explore Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
