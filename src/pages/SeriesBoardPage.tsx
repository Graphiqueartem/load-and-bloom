import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Trophy, Award, MapPin, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import seriesBoardHero from '@/assets/series-board-hero.jpg';

const SeriesBoardPage = () => {
  const continents = [
    { name: 'Americas', city: 'Mexico City', flag: '🇲🇽' },
    { name: 'Oceania', city: 'Sydney', flag: '🇦🇺' },
    { name: 'Africa', city: 'Johannesburg', flag: '🇿🇦' },
    { name: 'Asia', city: 'Seoul', flag: '🇰🇷' },
    { name: 'Europe', city: 'London', flag: '🇬🇧' }
  ];

  // Mock leaderboard data
  const mockLeaderboard = Array(10).fill(null).map((_, i) => ({
    rank: i + 1,
    country: '???',
    score: 'Hidden until reveal',
    revealed: false
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={seriesBoardHero} 
            alt="Illuminated world map with competition locations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Series Board — Global Standings
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Overview */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              The LoveDanceLive Series Board updates live as regional results are verified.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Each continent's top 10 countries appear with gold shimmer effects.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-semibold">
              Only flags and rankings are visible until that continent's Reveal Day, when names and scores are shown.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="#leaderboard">View Current Rankings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Continent Tabs */}
      <section id="leaderboard" className="py-8 md:py-16 bg-gradient-to-br from-primary/5 via-turquoise/5 to-accent/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Continental Rankings
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="americas" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                {continents.map((continent) => (
                  <TabsTrigger key={continent.name.toLowerCase()} value={continent.name.toLowerCase()}>
                    <span className="hidden sm:inline">{continent.name}</span>
                    <span className="sm:hidden text-2xl">{continent.flag}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {continents.map((continent) => (
                <TabsContent key={continent.name.toLowerCase()} value={continent.name.toLowerCase()}>
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <div className="text-6xl mb-4">{continent.flag}</div>
                        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                          {continent.name} Top 10
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Host City: {continent.city}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {mockLeaderboard.map((entry) => (
                          <div 
                            key={entry.rank}
                            className="flex items-center justify-between p-4 bg-background rounded-lg hover:shadow-md transition-all"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                                {entry.rank}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl">🏳️</span>
                                  <span className="font-semibold text-foreground">{entry.country}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{entry.score}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="w-24 h-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-center text-sm text-muted-foreground mt-6">
                        Rankings will be revealed after the {continent.city} regional concludes.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <p className="text-center mt-8 text-sm text-muted-foreground">
              This year's host cities: Mexico City, Sydney, Johannesburg, Seoul, London.<br />
              Next season's locations announced during the Dubai Final.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Golden Ticket Reveal Area */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-neon-pink flex items-center justify-center mx-auto">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Golden Ticket Reveal
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Once a continent's regionals close, Golden Ticket winners are revealed live across LoveDanceLive's global stream — names appear beside their country flags as spotlights illuminate the new finalists heading to Dubai.
              </p>
              <p className="text-sm text-muted-foreground">
                Reveal Days occur consecutively across continents, concluding with the European final in London.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link to="/coming-soon" state={{ pageTitle: "Watch Reveal Live" }}>
                <Globe className="h-5 w-5 mr-2" />
                Watch Reveal Live
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4 - Historical Data Archive */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Past Seasons Archive
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                    View Past Seasons
                  </h3>
                  <p className="text-foreground mb-6">
                    Explore historical rankings, winner profiles, and competition highlights from previous years.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['2024-2025 Season', '2023-2024 Season', '2022-2023 Season', '2021-2022 Season'].map((season, index) => (
                    <Button key={index} variant="outline" className="w-full" asChild>
                      <Link to="/coming-soon" state={{ pageTitle: `${season} Archive` }}>
                        <Download className="h-4 w-4 mr-2" />
                        {season}
                      </Link>
                    </Button>
                  ))}
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
              Follow your region, cheer for your country, and see who earns the next Golden Tickets.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="#leaderboard">View Series Board</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/registration">Enter Competition</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeriesBoardPage;