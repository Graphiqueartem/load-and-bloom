import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactHero} 
            alt="Smiling support staff ready to help" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Contact Us — Help & Support
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Introduction */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Whether you're a dancer, parent, chaperone, or partner, our support team is ready to assist.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Please use the form below or reach out by email if you have a specific query.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="#contact-form">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Contact Form */}
      <section id="contact-form" className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Contact Form
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-background">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Message Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="competition">Competition</SelectItem>
                        <SelectItem value="workshops">Workshops</SelectItem>
                        <SelectItem value="online-classes">Online Classes</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship</SelectItem>
                        <SelectItem value="judges">Judges</SelectItem>
                        <SelectItem value="press">Press</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Thanks for contacting us — our team will reply within 48 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 - Direct Contact Details */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Direct Contact
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Email</h3>
                    <p className="text-foreground">support@lovedancelive.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise to-light-blue flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Phone</h3>
                    <p className="text-foreground">+44 (0)20 0000 0000</p>
                    <p className="text-sm text-muted-foreground">Mon–Fri 9am–6pm GMT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-baby-pink flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">FAQ</h3>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="/coming-soon" state={{ pageTitle: "FAQ Page" }}>Visit FAQ Page</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Address</h3>
                    <p className="text-foreground">LoveDanceLive HQ<br />London · UK</p>
                    <p className="text-sm text-muted-foreground">(for correspondence only)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 - CTA Band */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Got a question? We're just one message away.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="#contact-form">Contact Support</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "FAQ" }}>Visit FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;