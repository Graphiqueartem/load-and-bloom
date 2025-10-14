import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Video, Download, Star, ChevronDown, Play } from 'lucide-react';
import placeholderImage from '@/assets/placeholder.png';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const ResultsVideos = () => {
  const [openCity, setOpenCity] = useState<string | null>(null);

  React.useEffect(() => {
    document.title = "Results & Videos - Winners & Highlights | LoveDanceLive";
  }, []);

  const regionalResults = [
    {
      city: "Mexico City",
      flag: "🇲🇽",
      topTen: ["Mexico", "USA", "Colombia", "Argentina", "Brazil", "Chile", "Canada", "Peru", "Costa Rica", "Ecuador"]
    },
    {
      city: "Sydney",
      flag: "🇦🇺",
      topTen: ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Samoa", "Tonga", "Vanuatu", "Solomon Islands", "French Polynesia", "New Caledonia"]
    },
    {
      city: "Johannesburg",
      flag: "🇿🇦",
      topTen: ["South Africa", "Nigeria", "Kenya", "Ghana", "Egypt", "Morocco", "Tanzania", "Uganda", "Ethiopia", "Zimbabwe"]
    },
    {
      city: "Seoul",
      flag: "🇰🇷",
      topTen: ["South Korea", "Japan", "China", "Philippines", "Thailand", "Singapore", "India", "Malaysia", "Indonesia", "Vietnam"]
    },
    {
      city: "London",
      flag: "🇬🇧",
      topTen: ["United Kingdom", "France", "Germany", "Spain", "Italy", "Netherlands", "Sweden", "Poland", "Portugal", "Ireland"]
    }
  ];

  const videoHighlights = [
    { title: "Mexico City Final Performance", thumbnail: "/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" },
    { title: "Sydney Contemporary Solo", thumbnail: "/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" },
    { title: "Johannesburg Hip Hop Battle", thumbnail: "/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" },
    { title: "Seoul Ballet Showcase", thumbnail: "/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" },
    { title: "London Group Performance", thumbnail: "/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" },
    { title: "Dubai Grand Final Highlights", thumbnail: "/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png" }
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-medium px-4">
          Celebrate our dancers — from regional champions to Dubai finalists.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={placeholderImage} 
            alt="Confetti and trophies celebration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Results & Videos — Winners & Highlights
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Intro */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              See who rose to the top this season.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Browse regional results from Mexico City, Sydney, Johannesburg, Seoul, and London, then re-watch the Grand Final performances from Dubai.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="/dubai-finals">View Dubai Final Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Regional Results Cards */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Regional Results
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {regionalResults.map((region, index) => (
              <Collapsible
                key={index}
                open={openCity === region.city}
                onOpenChange={() => setOpenCity(openCity === region.city ? null : region.city)}
              >
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{region.flag}</span>
                          <h3 className="text-2xl font-poppins font-bold text-foreground">{region.city}</h3>
                        </div>
                        <ChevronDown className={`h-6 w-6 text-muted-foreground transition-transform ${openCity === region.city ? 'rotate-180' : ''}`} />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-bold text-lg mb-4 text-foreground">Top 10 Countries</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {region.topTen.map((country, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                                {idx + 1}
                              </div>
                              <span className="text-foreground">{country}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Button size="sm" variant="outline" asChild className="w-full">
                            <Link to="/coming-soon" state={{ pageTitle: `${region.city} Results PDF` }}>
                              <Download className="h-4 w-4 mr-2" />
                              Download Full Results PDF
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Video Highlights */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Video Highlights
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6">
              Revisit your favourite moments and inspire your next routine.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoHighlights.map((video, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/coming-soon" state={{ pageTitle: "Premium Critiques" }}>Order Premium Critique</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4 - Premium Critique Area */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-turquoise/20 via-turquoise/10 to-turquoise/20">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                  Premium Critique
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Order a professional review of your performance video from one of our judges for personalised feedback.
                </p>
                <Button size="lg" asChild>
                  <Link to="/coming-soon" state={{ pageTitle: "Buy Premium Critique" }}>
                    Buy Premium Critique
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  Feedback delivered within 14 days to your dashboard.
                </p>
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
              Watch, learn and celebrate with LoveDanceLive.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "View Videos" }}>
                  <Video className="h-5 w-5 mr-2" />
                  View Videos
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/registration">Enter Next Season</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsVideos;
