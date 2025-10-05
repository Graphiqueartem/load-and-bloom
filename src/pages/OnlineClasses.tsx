import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, Clock, BarChart, User, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import onlineClassesHero from '@/assets/online-classes-hero.jpg';
import videoCallImage from '@/assets/online-class-video-call.jpg';

const OnlineClasses = () => {
  const [filterGenre, setFilterGenre] = useState('all');
  const [filterLevel, setFilterLevel] = useState('all');

  const classes = [
    {
      title: 'Hip Hop Fundamentals',
      level: 'Beginner',
      duration: '45 min',
      instructor: 'Carlos Rodriguez',
      thumbnail: '/lovable-uploads/hip-hop-dance.jpg',
      genre: 'hip-hop',
    },
    {
      title: 'Contemporary Flow',
      level: 'Intermediate',
      duration: '60 min',
      instructor: 'Sarah Chen',
      thumbnail: '/lovable-uploads/contemporary-dance.jpg',
      genre: 'contemporary',
    },
    {
      title: 'Ballet Technique',
      level: 'Advanced',
      duration: '55 min',
      instructor: 'Emma Thompson',
      thumbnail: '/lovable-uploads/ballroom-dance.jpg',
      genre: 'ballet',
    },
    {
      title: 'Latin Fusion Energy',
      level: 'All Levels',
      duration: '50 min',
      instructor: 'Maria Santos',
      thumbnail: '/lovable-uploads/community-dance.jpg',
      genre: 'latin',
    },
    {
      title: 'Freestyle Workshop',
      level: 'Intermediate',
      duration: '40 min',
      instructor: 'Thabo Mthembu',
      thumbnail: '/lovable-uploads/workshop-scene.jpg',
      genre: 'freestyle',
    },
    {
      title: 'Jazz Performance',
      level: 'Beginner',
      duration: '45 min',
      instructor: 'David Kim',
      thumbnail: '/lovable-uploads/competition-stage.jpg',
      genre: 'jazz',
    },
  ];

  const testimonials = [
    {
      quote: "I could train from Kenya and still feel part of the competition.",
      name: "Amira",
      age: 15,
    },
    {
      quote: "The online Q&As helped me prepare for London regionals.",
      name: "Jayden",
      age: 19,
    },
    {
      quote: "Being able to rewatch the classes made all the difference in my practice.",
      name: "Sofia",
      age: 17,
    },
  ];

  const filteredClasses = classes.filter((classItem) => {
    const genreMatch = filterGenre === 'all' || classItem.genre === filterGenre;
    const levelMatch = filterLevel === 'all' || classItem.level === filterLevel;
    return genreMatch && levelMatch;
  });

  return (
    <div className="page-gradient-bg">
      {/* Global Banner */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-open-sans px-4">
          Keep training all year with our global Online Classes — open to every LoveDanceLive member worldwide.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={onlineClassesHero}
            alt="Online dance classes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-turquoise/90 via-primary/80 to-accent/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold text-white drop-shadow-lg">
              Online Classes Portal — Dance Anytime
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16">
        
        {/* Section 1: Intro */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center mb-6">
                Not everyone can travel, but every dancer deserves a stage. The LoveDanceLive Online Classes Portal keeps you connected wherever you are.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                From quick warm-ups to complete training programs, classes are led by the same instructors who teach our regional and Dubai workshops.
              </p>
              <div className="text-center mt-8">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="#browse">Browse Classes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Browse & Filter */}
        <div id="browse" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
              Browse & Filter
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Find the perfect class for your level and style
            </p>
          </div>

          {/* Filter Bar */}
          <div className="max-w-5xl mx-auto mb-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Select value={filterGenre} onValueChange={setFilterGenre}>
                    <SelectTrigger>
                      <SelectValue placeholder="Genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Genres</SelectItem>
                      <SelectItem value="hip-hop">Hip Hop</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                      <SelectItem value="ballet">Ballet</SelectItem>
                      <SelectItem value="latin">Latin</SelectItem>
                      <SelectItem value="jazz">Jazz</SelectItem>
                      <SelectItem value="freestyle">Freestyle</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filterLevel} onValueChange={setFilterLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Skill Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="All Levels">All Levels</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button size="lg" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                    Subscribe Now
                  </Button>
                  <Button size="lg" variant="outline" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                    Buy Single Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Class Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {filteredClasses.map((classItem, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-muted/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={classItem.thumbnail}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Clock className="h-3 w-3 text-white" />
                    <span className="text-xs text-white font-semibold">{classItem.duration}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                    {classItem.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{classItem.level}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{classItem.instructor}</span>
                  </div>
                  <Button className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                    <Play className="h-4 w-4 mr-2" />
                    Start Class
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Subscribe Now
            </Button>
            <Button size="lg" variant="outline" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Buy Single Class
            </Button>
          </div>
        </div>

        {/* Section 3: Subscription Options */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
              Subscription Options
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your training schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-10">
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4 text-center">
                  Unlimited Access Plan
                </h3>
                <p className="text-muted-foreground text-center mb-8">
                  Monthly or annual subscription for unlimited classes + exclusive live streams.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Unlimited access to all classes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Exclusive live stream events</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Download for offline practice</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Priority Q&A access</span>
                  </div>
                </div>
                <Button size="lg" className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Join Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-turquoise/10 to-baby-pink/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-10">
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4 text-center">
                  Single Class Pass
                </h3>
                <p className="text-muted-foreground text-center mb-8">
                  Pay per session and download for offline practice.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Choose individual classes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Download for offline viewing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">No recurring charges</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Lifetime access to purchased classes</span>
                  </div>
                </div>
                <Button size="lg" variant="outline" className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 4: Interactive Features */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-light-blue/5 via-turquoise/5 to-primary/5 border-0 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={videoCallImage}
                  alt="Student on video call with instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold gradient-text-hero mb-6">
                  Interactive Features
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Live Q&A with instructors each week
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Homework upload portal for feedback
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Progress tracker visible on user dashboard
                    </p>
                  </div>
                </div>
                <Button size="lg" asChild className="w-full sm:w-auto hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Section 5: Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
              What Our Students Say
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-gradient-to-br from-white to-muted/20 border-0 shadow-xl">
                      <CardContent className="p-12 sm:p-16 text-center">
                        <p className="text-2xl sm:text-3xl font-playfair italic text-foreground mb-6">
                          "{testimonial.quote}"
                        </p>
                        <p className="text-lg text-muted-foreground">
                          — {testimonial.name}, Age {testimonial.age}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Join Now
            </Button>
          </div>
        </div>

        {/* Section 6: Final CTA Band */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-turquoise to-light-blue border-0 shadow-2xl">
            <CardContent className="p-10 sm:p-14 text-center">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-8">
                Keep dancing wherever you are — subscribe today and train with LoveDanceLive.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Subscribe Now
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Browse Classes
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white hover:text-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/workshops">Return to Workshops</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;
