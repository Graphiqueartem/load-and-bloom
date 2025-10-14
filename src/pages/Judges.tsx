import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Award, Target, Lightbulb, Zap, User, Download, LogIn, ChevronDown } from 'lucide-react';
import placeholderImage from '@/assets/placeholder.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Judges: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = "Meet the Judges - Expert Panel | LoveDanceLive";
  }, []);

  const judgesBios = [
    {
      name: "Maria Rodriguez",
      country: "🇲🇽 Mexico",
      specialty: "Latin Fusion",
      bio: "International champion with 15 years experience in Latin dance and contemporary fusion styles across three continents.",
      avatar: ""
    },
    {
      name: "James Chen",
      country: "🇦🇺 Australia",
      specialty: "Hip Hop",
      bio: "Award-winning choreographer and street dance pioneer featured in global competitions and masterclass circuits worldwide.",
      avatar: ""
    },
    {
      name: "Thandiwe Nkosi",
      country: "🇿🇦 South Africa",
      specialty: "Contemporary",
      bio: "Principal dancer and artistic director blending African movement with contemporary technique in innovative performance works.",
      avatar: ""
    },
    {
      name: "Min-Jun Park",
      country: "🇰🇷 South Korea",
      specialty: "Ballet & K-Pop",
      bio: "Former principal ballet dancer now bridging classical technique with modern K-pop choreography for international stages.",
      avatar: ""
    },
    {
      name: "Sophie Williams",
      country: "🇬🇧 United Kingdom",
      specialty: "Freestyle",
      bio: "Versatile performer and judge specializing in improvisation, musical theatre and contemporary styles with global teaching experience.",
      avatar: ""
    },
    {
      name: "Carlos Silva",
      country: "🇧🇷 Brazil",
      specialty: "Samba & Ballroom",
      bio: "World champion ballroom dancer and samba specialist bringing passion and precision to every performance he evaluates.",
      avatar: ""
    }
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-medium px-4">
          Our international judging panel brings expertise from every continent — technique, artistry and passion united.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={placeholderImage} 
            alt="International judges panel at judging table" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Meet the Judges — Expert Panel
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Intro */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              LoveDanceLive's judges represent the world's leading choreographers, educators and performers.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Each regional event and the Dubai Final is judged by an international panel selected to reflect diversity of style and experience.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="/judge-registration">Become a Judge</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Criteria Explained */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Judging Criteria
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">Technique</h3>
                <p className="text-3xl font-bold text-primary mb-3">30%</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Precision, control, clarity of movement.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">Performance</h3>
                <p className="text-3xl font-bold text-turquoise mb-3">30%</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expression, presence, connection with music.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-accent flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">Creativity</h3>
                <p className="text-3xl font-bold text-neon-pink mb-3">20%</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Original choreography and interpretation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">Impact</h3>
                <p className="text-3xl font-bold text-accent mb-3">20%</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Overall impression and audience response.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/coming-soon" state={{ pageTitle: "Scoring Guide PDF" }}>
                <Download className="h-5 w-5 mr-2" />
                View Full Scoring Guide PDF
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3 - Judge Bios Grid */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Our International Panel
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judgesBios.map((judge, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-6 border-4 border-primary/20">
                    <AvatarImage src={judge.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-3xl font-bold">
                      {judge.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">{judge.name}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{judge.country}</p>
                  <p className="text-sm font-semibold text-primary mb-4">{judge.specialty}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {judge.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/coming-soon" state={{ pageTitle: "All Judges" }}>Meet All Judges</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4 - Judge Portal Login */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-light-blue/20 via-turquoise/10 to-light-blue/20">
        <div className="w-full px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center mx-auto mb-6">
                    <LogIn className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                    Judge Portal Login
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Registered judges log in here to access scoring sheets, review videos and submit feedback securely.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <Button size="lg" className="w-full h-12" asChild>
                    <Link to="/judge-login">Judge Login</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA Band */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Interested in joining our panel?
            </h2>
            <p className="text-lg md:text-xl text-foreground">
              We welcome experienced dance professionals worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/judge-registration">Apply to Judge</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/contact">Contact Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Judges;