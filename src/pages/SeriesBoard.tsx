import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Trophy, MapPin, Download, Eye, ChevronDown, Flag, Award } from 'lucide-react';
import seriesBoardHero from '@/assets/series-board-hero.jpg';

const SeriesBoard = () => {
  const [openArchive, setOpenArchive] = useState(false);

  useEffect(() => {
    document.title = "Series Board - Global Standings | LoveDanceLive";
  }, []);

  const continents = [
    { name: 'Americas', city: 'Mexico City', flag: '🌎' },
    { name: 'Oceania', city: 'Sydney', flag: '🌏' },
    { name: 'Africa', city: 'Johannesburg', flag: '🌍' },
    { name: 'Asia', city: 'Seoul', flag: '🌏' },
    { name: 'Europe', city: 'London', flag: '🌍' }
  ];

  const topCountries = [
    { rank: 1, country: 'United States', score: 95, revealed: true },
    { rank: 2, country: 'United Kingdom', score: 92, revealed: true },
    { rank: 3, country: 'Australia', score: 89, revealed: false },
    { rank: 4, country: 'Canada', score: 87, revealed: false },
    { rank: 5, country: 'South Africa', score: 85, revealed: false },
    { rank: 6, country: 'Brazil', score: 83, revealed: false },
    { rank: 7, country: 'Japan', score: 81, revealed: false },
    { rank: 8, country: 'Germany', score: 79, revealed: false },
    { rank: 9, country: 'France', score: 77, revealed: false },
    { rank: 10, country: 'South Korea', score: 75, revealed: false }
  ];

  return (
    <div className="page-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={seriesBoardHero} 
            alt="Glowing world map with gold points" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Trophy className="h-12 w-12 text-white" />
              </div>
            </div>
            <p className="text-base sm:text-lg font-open-sans text-white/95">
              Follow the global journey from regional stages to Dubai.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
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
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Only flags and rankings are visible until that continent's Reveal Day, when names and scores are shown.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="#continent-tabs">View Current Rankings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Continent Tabs */}
      <section id="continent-tabs" className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Continental Leaderboards
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="americas" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-muted/50">
                {continents.map((continent) => (
                  <TabsTrigger key={continent.name} value={continent.name.toLowerCase()}>
                    <span className="text-2xl mr-2">{continent.flag}</span>
                    <span className="hidden md:inline">{continent.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {continents.map((continent) => (
                <TabsContent key={continent.name} value={continent.name.toLowerCase()}>
                  <Card className="bg-gradient-to-br from-white to-background">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center gap-2 mb-8">
                        <MapPin className="h-5 w-5 text-primary" />
                        <p className="text-lg font-semibold text-foreground">
                          Host City: <span className="text-primary">{continent.city}</span>
                        </p>
                      </div>

                      <div className="space-y-3">
                        {topCountries.map((country) => (
                          <div
                            key={country.rank}
                            className="grid grid-cols-2 gap-4 items-center p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-lg hover:from-muted transition-all"
                          >
                            <div className="flex items-center gap-4">
                              <Badge variant="outline" className="text-lg font-bold">
                                #{country.rank}
                              </Badge>
                              <div className="flex items-center gap-2">
                                <Flag className="h-5 w-5 text-muted-foreground" />
                                {country.revealed ? (
                                  <span className="font-medium text-foreground">{country.country}</span>
                                ) : (
                                  <span className="text-muted-foreground italic">Hidden until Reveal Day</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 animate-pulse"
                                  style={{ width: `${country.score}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-semibold text-foreground w-12 text-right">
                                {country.score}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-center text-muted-foreground mt-8">
                        This year's host cities: Mexico City, Sydney, Johannesburg, Seoul, London.<br />
                        Next season's locations announced during the Dubai Final.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Section 3 - Golden Ticket Reveal Area */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-yellow-500/10 to-amber-400/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Golden Ticket Reveal
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-500/10 to-amber-400/5 border-2 border-yellow-500/20">
              <CardContent className="p-10 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  Once a continent's regionals close, Golden Ticket winners are revealed live across LoveDanceLive's global stream — names appear beside their country flags as spotlights illuminate the new finalists heading to Dubai.
                </p>
                <Button size="lg" className="mb-4">
                  <Eye className="h-5 w-5 mr-2" />
                  Watch Reveal Live
                </Button>
                <p className="text-sm text-muted-foreground">
                  Reveal Days occur consecutively across continents, concluding with the European final in London.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 - Historical Data Archive */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Historical Archive
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Collapsible open={openArchive} onOpenChange={setOpenArchive}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="lg" className="w-full">
                  View Past Seasons
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${openArchive ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                <Card className="bg-gradient-to-br from-white to-background">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {['2024-2025', '2023-2024', '2022-2023', '2021-2022'].map((season) => (
                        <div key={season} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all">
                          <span className="font-semibold text-foreground">{season} Season</span>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Archives" }}>Download 2024–2025 Archive</Link>
              </Button>
            </div>
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
                <Link to="#continent-tabs">View Series Board</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/competitions">Enter Competition</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeriesBoard;