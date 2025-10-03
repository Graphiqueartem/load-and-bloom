import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gift, Star, Calendar, Users, Target } from 'lucide-react';
import heroImage from '@/assets/hero-dance.jpg';

const Challenges = () => {
  useEffect(() => {
    document.title = "Dance Challenges - Win Prizes | LoveDanceLive";
  }, []);

  const upcomingChallenges = [
    {
      title: "Hip Hop Freestyle Friday",
      description: "Show us your best hip hop moves in a 60-second freestyle",
      prize: "$500 Cash Prize",
      endDate: "Coming Soon",
      participants: 0,
      difficulty: "Beginner"
    },
    {
      title: "Contemporary Storytelling",
      description: "Tell a story through contemporary dance movements",
      prize: "Masterclass with Pro Judge",
      endDate: "Coming Soon", 
      participants: 0,
      difficulty: "Intermediate"
    },
    {
      title: "Latin Fusion Challenge",
      description: "Blend different Latin dance styles in one performance",
      prize: "Featured Performance Spot",
      endDate: "Coming Soon",
      participants: 0,
      difficulty: "Advanced"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Dance Challenges" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-neon-pink/80 to-accent/90"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
            Step Up to the Challenge
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light">
            Fun, prizes, and global recognition.
          </p>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="py-12 sm:py-16 lg:py-20 pb-0 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
              <span className="gradient-text">Dance Challenges</span>
              <span className="gradient-underline"></span>
            </h2>
            <div className="content-card">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Compete in weekly or monthly challenges designed to inspire creativity and showcase talent. Winners get featured, rewarded, and celebrated.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-poppins font-bold mb-6">Upcoming Challenges</h3>
                <div className="space-y-6">
                  {upcomingChallenges.map((challenge, index) => (
                    <Card key={index} className="content-card border-2 border-primary/20 hover:border-primary/40">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{challenge.title}</CardTitle>
                          <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{challenge.description}</p>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="gradient-icon-bg p-2 rounded-lg">
                              <Gift className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">{challenge.prize}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="gradient-icon-bg p-2 rounded-lg">
                              <Calendar className="h-4 w-4 text-white" />
                            </div>
                            <span>{challenge.endDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="gradient-icon-bg p-2 rounded-lg">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span>{challenge.participants} participants</span>
                          </div>
                        </div>
                        <Button variant="outline" disabled>
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="content-card bg-gradient-to-br from-primary/5 to-neon-pink/5 border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="gradient-icon-bg p-2 rounded-lg">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    Challenge Rules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Original choreography only</li>
                    <li>• Video quality: 720p minimum</li>
                    <li>• Duration: 30 seconds to 2 minutes</li>
                    <li>• Family-friendly content only</li>
                    <li>• One entry per challenge</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="content-card border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="gradient-icon-bg p-2 rounded-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    Prizes & Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cash prizes up to $1,000</li>
                    <li>• Free masterclasses</li>
                    <li>• Featured performance spots</li>
                    <li>• Judge mentorship sessions</li>
                    <li>• LoveDanceLive merchandise</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="content-card border-2 border-neon-pink/20 bg-gradient-to-br from-neon-pink/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <div className="gradient-icon-bg p-3 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Ready to Dance?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Challenges are launching soon! Be the first to know.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/registration">Get Notified</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;