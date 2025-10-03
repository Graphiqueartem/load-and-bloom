import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Video, Zap, Globe } from 'lucide-react';
import WelcomeModal from '@/components/onboarding/WelcomeModal';

const LiveChat = () => {
  useEffect(() => {
    document.title = "Live Event Chat - Join the Conversation | LoveDanceLive";
  }, []);

  return (
    <div className="page-gradient-bg">
      <WelcomeModal pageName="live-chat" />
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Be Part of the Moment
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Chat with dancers and fans during live streams.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 pb-0">
        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                Our live chat brings the global audience together in real-time. Celebrate, support, and connect while watching events unfold.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-8 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4 flex items-center gap-2">
                  <Video className="h-6 w-6 text-primary" />
                  Live Event Features
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Real-time chat during performances
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Q&A with judges and performers
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    Global audience interaction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  Chat Guidelines
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                    <span>Be respectful and supportive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                    <span>Encourage all performers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                    <span>Follow community guidelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10 text-center">
              <Video className="h-12 w-12 text-neon-pink mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
                No Live Events Currently
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Live chat will be available during our events. Check our competitions schedule for upcoming live performances!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/competitions">View Competitions</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/registration">Join Live Chat</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;