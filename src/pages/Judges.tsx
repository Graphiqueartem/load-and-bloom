import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MapPin, Globe, Award, Users, Search, LogIn, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import JudgeProfile from '@/components/JudgeProfile';
import heroImage from '@/assets/competition-stage.jpg';
import { Judge } from '@/types/performance';
import { useToast } from '@/hooks/use-toast';

const Judges: React.FC = () => {
  const { toast } = useToast();
  const [judges, setJudges] = useState<Judge[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJudge, setSelectedJudge] = useState<Judge | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');

  useEffect(() => {
    loadJudges();
  }, []);

  const loadJudges = async () => {
    try {
      const { data, error } = await supabase
        .from('judges')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setJudges((data as Judge[]) || []);
    } catch (error) {
      console.error('Error loading judges:', error);
      toast({
        title: 'Error',
        description: 'Failed to load judges',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredJudges = judges.filter(judge => {
    const matchesSearch = judge.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         judge.bio?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genreFilter === 'all' || judge.dance_genres?.includes(genreFilter);
    const matchesCountry = countryFilter === 'all' || judge.country === countryFilter;
    
    return matchesSearch && matchesGenre && matchesCountry;
  });

  const availableGenres = [...new Set(judges.flatMap(judge => judge.dance_genres || []))];
  const availableCountries = [...new Set(judges.map(judge => judge.country).filter(Boolean))];

  if (selectedJudge) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => setSelectedJudge(null)}
          className="mb-6"
        >
          ← Back to Judges
        </Button>
        <JudgeProfile judge={selectedJudge} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Expert Judges" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-neon-pink/80 to-accent/90"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
            The Experts Behind the Score
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light">
            Fair, inspiring, and world-class.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
              <span className="gradient-text">Meet the Judges</span>
              <span className="gradient-underline"></span>
            </h2>
            <div className="content-card">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our judges are professional dancers, choreographers, and industry leaders dedicated to fair evaluation and constructive feedback.
              </p>
            </div>
          </div>

          {/* New Judge CTA */}
          <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 content-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                    <div className="gradient-icon-bg p-2 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Are you a dance professional?</h3>
                  </div>
                  <p className="text-muted-foreground">Join our panel of expert judges and help shape the future of dance</p>
                </div>
                <Button asChild variant="default">
                  <Link to="/judge-registration">
                    Become a Judge
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search judges by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                {availableGenres.map(genre => (
                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {availableCountries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Judges Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading judges...</p>
            </div>
          ) : filteredJudges.length === 0 ? (
            <Card className="content-card">
              <CardContent className="text-center py-12">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No judges found matching your criteria</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJudges.map((judge) => (
                <Card key={judge.id} className="content-card hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1" onClick={() => setSelectedJudge(judge)}>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16 border-2 border-primary/20">
                        <AvatarImage src={judge.profile_image || undefined} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                          {getInitials(judge.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{judge.name}</CardTitle>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{judge.rating || 'New'}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {judge.country}
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Badge variant={judge.available_for_hire ? "default" : "secondary"} className="mr-2">
                          {judge.available_for_hire ? 'Available' : 'Busy'}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {judge.languages?.map((lang, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>

                      {judge.dance_genres && judge.dance_genres.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-1">Specialties:</p>
                          <div className="flex flex-wrap gap-1">
                            {judge.dance_genres.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {judge.bio && (
                        <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
                          {judge.bio}
                        </p>
                      )}

                      <Button variant="outline" className="w-full mt-4" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Judging Criteria Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-8 text-center">
              <span className="gradient-text">Judging Criteria</span>
              <span className="gradient-underline"></span>
            </h2>
            <Card className="content-card bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="gradient-icon-bg p-3 rounded-lg flex-shrink-0 h-fit">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Fair Standards</h4>
                      <p className="text-sm text-muted-foreground">Clear, consistent criteria applied equally to all performers</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="gradient-icon-bg p-3 rounded-lg flex-shrink-0 h-fit">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Quality Feedback</h4>
                      <p className="text-sm text-muted-foreground">Constructive, detailed feedback to help you grow</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="gradient-icon-bg p-3 rounded-lg flex-shrink-0 h-fit">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Expert Evaluation</h4>
                      <p className="text-sm text-muted-foreground">Assessed by professional industry leaders</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="gradient-icon-bg p-3 rounded-lg flex-shrink-0 h-fit">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Global Transparency</h4>
                      <p className="text-sm text-muted-foreground">Open process that's accessible worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Judge Login CTA */}
          <Card className="mt-12 border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 content-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                    <div className="gradient-icon-bg p-2 rounded-lg">
                      <LogIn className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Already a Judge?</h3>
                  </div>
                  <p className="text-muted-foreground">Access your dashboard to review performances and manage your profile</p>
                </div>
                <Button asChild variant="default">
                  <Link to="/judge-login">
                    Judge Login
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Judges;