import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const faqs = [
    {
      question: "How do I submit my dance video?",
      answer: "Navigate to our Performance Review Form and follow the simple upload process. Videos should be MP4, MOV, or AVI format, maximum 500MB."
    },
    {
      question: "What are the age categories for competitions?",
      answer: "We have two main categories: Youth (8-17 years) and Adult (18+ years). Some events may have additional age brackets."
    },
    {
      question: "Can I register for multiple regional events?",
      answer: "Yes! You can register for as many regional events as you'd like. Each registration is separate and gives you multiple chances to qualify."
    },
    {
      question: "How much does it cost to enter?",
      answer: "Online submissions are free for basic entry. Live event registration and premium critiques have separate fees detailed on our How to Enter page."
    },
    {
      question: "When will I receive feedback on my performance?",
      answer: "Standard feedback is provided within 2-3 weeks. Premium critique customers receive detailed feedback within 5-7 business days."
    }
  ];

  return (
    <div className="page-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/7b552ba3-15eb-4c78-881a-39a59b4dde8c.png" 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              We're Here to Help
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Get in touch with the LoveDanceLive team.
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
                Have questions? Reach out to us anytime. Our team is ready to help with registrations, uploads, or general inquiries.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-10">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-foreground flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Contact Us
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="gradient-icon-bg w-fit">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">info@lovedancelive.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-icon-bg w-fit">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-icon-bg w-fit">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-sm text-muted-foreground">123 Dance Street, London, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-light-blue/10 to-turquoise/5 border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">Support Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                  <p>Saturday: 10:00 AM - 4:00 PM GMT</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                FAQ
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Quick answers to common questions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6">
                Still Have Questions?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/performance-review-form">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Link to="/how-to-enter">How to Enter</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;