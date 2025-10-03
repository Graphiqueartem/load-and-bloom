import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Play, Eye, Upload } from 'lucide-react';
import WelcomeModal from '@/components/onboarding/WelcomeModal';
import communityImage from '@/assets/community-dance.jpg';
const galleryHeroImage = '/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png';
const featuredImage1 = '/lovable-uploads/7b552ba3-15eb-4c78-881a-39a59b4dde8c.png';
const featuredImage2 = '/lovable-uploads/ce1c8c79-cd7f-41eb-82b2-4635bcfa4eb0.png';

const Gallery = () => {
  useEffect(() => {
    document.title = "User Gallery - Share Your Moves | LoveDanceLive";
  }, []);

  const featuredVideos = [
    {
      title: "Amazing Hip Hop Performance",
      performer: "DanceAce23",
      views: "1.2K",
      likes: "156",
      genre: "Hip Hop",
      thumbnail: "Coming Soon"
    },
    {
      title: "Contemporary Masterpiece",
      performer: "FlowDancer",
      views: "890",
      likes: "98",
      genre: "Contemporary", 
      thumbnail: "Coming Soon"
    },
    {
      title: "Latin Fire Performance",
      performer: "SalsaQueen",
      views: "2.1K",
      likes: "203",
      genre: "Latin",
      thumbnail: "Coming Soon"
    }
  ];

  const getGenreColor = (genre: string) => {
    switch (genre) {
      case 'Hip Hop': return 'bg-purple-500';
      case 'Contemporary': return 'bg-blue-500';
      case 'Latin': return 'bg-red-500';
      case 'Ballet': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="page-gradient-bg">
      <WelcomeModal pageName="gallery" />
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={galleryHeroImage} 
            alt="Dance gallery showcase with performers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Camera className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Showcase Your Style
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Photos & videos from our global dancers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-5 pb-0">
        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-5">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                The gallery is your place to share performances, behind-the-scenes moments, and connect through creativity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Coming Soon */}
        <div className="text-center mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto">
            <CardContent className="p-8 sm:p-10 text-center">
              <div className="gradient-icon-bg w-fit mx-auto mb-6">
                <Upload className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
                Gallery Coming Soon
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                The gallery is currently in development. Soon you'll be able to upload and share your dance performances with the global community!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Community Images */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Our Dance Community
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Celebrating dancers from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video">
                <img 
                  src={featuredImage1} 
                  alt="Featured dance performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video">
                <img 
                  src={featuredImage2} 
                  alt="Featured dance performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6">
                Share Your Performance
              </h3>
              <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                <Link to="/registration">Upload Your Content</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;