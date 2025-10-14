import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Handshake, Building2, Award, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import placeholderImage from '@/assets/placeholder.png';

const Sponsors = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

  React.useEffect(() => {
    document.title = "Sponsors - Partner with LoveDanceLive";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for your interest — our Partnership Team will contact you soon."
    });
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const packages = [
    {
      icon: Award,
      title: 'Bronze Partner',
      description: 'Logo placement + website link.',
      gradient: 'from-amber-700/10 to-amber-600/5'
    },
    {
      icon: Building2,
      title: 'Silver Partner',
      description: 'Event branding + social mentions.',
      gradient: 'from-gray-400/10 to-gray-300/5'
    },
    {
      icon: Crown,
      title: 'Gold Partner',
      description: 'Premium branding + Dubai Final stage exposure.',
      gradient: 'from-yellow-500/10 to-yellow-400/5'
    }
  ];

  return (
    <div className="page-gradient-bg">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-medium px-4">
          Join a global platform uniting five continents of young talent.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={placeholderImage} 
            alt="Brand banners around stage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Sponsors — Partner with LoveDanceLive
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Intro */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              LoveDanceLive partners with brands, foundations and education groups to support dance as a positive global force.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Our audience spans five continents and thousands of families each season through live and online events.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="#contact-form">Request Sponsorship Pack</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Current Sponsors Grid */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Current Sponsors
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-background">
              <CardContent className="p-12 text-center">
                <p className="text-lg text-muted-foreground mb-8">
                  Logo grid — 4 columns desktop
                </p>
                <p className="text-base text-muted-foreground">
                  Join our family of trusted partners and showcase your brand to a global dance audience.
                </p>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="#contact-form">Become a Sponsor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Package Levels */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Sponsorship Packages
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink rounded-full mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`bg-gradient-to-br ${pkg.gradient} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-6">
                    <pkg.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-3">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link to="/coming-soon" state={{ pageTitle: "Sponsorship Guide" }}>Download Sponsorship Guide PDF</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4 - Contact Form */}
      <section id="contact-form" className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-background">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Company name" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your sponsorship interest..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA Band */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-turquoise/40 via-light-blue/30 to-turquoise/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Partner with LoveDanceLive and share the stage with the world's young talent.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="#contact-form">Become a Sponsor</Link>
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

export default Sponsors;
