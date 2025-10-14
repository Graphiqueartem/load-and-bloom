import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Shirt, Package2, Download, CreditCard } from 'lucide-react';
import placeholderImage from '@/assets/placeholder.png';

const Shop = () => {
  React.useEffect(() => {
    document.title = "Shop - Merchandise & Downloads | LoveDanceLive";
  }, []);

  const categories = [
    { name: 'Apparel', icon: Shirt },
    { name: 'Accessories', icon: Package2 },
    { name: 'Digital Downloads', icon: Download },
    { name: 'Gift Cards', icon: CreditCard }
  ];

  return (
    <div className="page-gradient-bg">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary via-turquoise to-accent py-3 text-center">
        <p className="text-white text-sm md:text-base font-medium px-4">
          Show your LoveDanceLive pride with official merch and digital downloads.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={placeholderImage} 
            alt="Product flat-lay merchandise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-turquoise/70 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white drop-shadow-2xl">
              Shop — Merchandise & Downloads
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Intro */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Bring home the LoveDanceLive energy with exclusive merchandise and training downloads. All profits support youth arts initiatives and next season's talent bursaries.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Shop" }}>Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Product Grid */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Shop Categories
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-base font-poppins font-bold text-foreground">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-white to-background">
              <CardContent className="p-10 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Four columns desktop · each card shows product photo 600 × 600 px · Title · Price · CTA [Add to Cart].
                </p>
                <p className="text-sm text-muted-foreground">
                  Worldwide shipping available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 - Featured Products */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-500/10 to-amber-400/5 border-2 border-yellow-500/20">
              <CardContent className="p-10 text-center">
                <p className="text-lg text-muted-foreground">
                  Carousel highlight area (Top 5 items) with soft gold glow border.
                </p>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Featured Collection" }}>View Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Cart & Checkout */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
              Secure Checkout
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-background">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <p className="text-lg text-muted-foreground">
                    Simple 2-column layout: Items (left) / Summary (right).
                  </p>
                </div>
                <div className="flex justify-center gap-4 mb-6">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                  <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-orange-400 rounded"></div>
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-400 to-indigo-600 rounded"></div>
                  <div className="w-12 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded"></div>
                </div>
                <p className="text-sm text-center text-muted-foreground mb-8">
                  Visa · Mastercard · PayPal · Apple Pay
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Checkout Securely</Button>
                  <Button size="lg" variant="outline">Continue Shopping</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5 - Downloadable Media */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-light-blue/20 to-turquoise/10">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Purchase and download performance videos, tutorials and exclusive rehearsal footage from Dubai.
            </p>
            
            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Digital Downloads" }}>Browse Digital Downloads</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA Band */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-baby-pink/40 via-neon-pink/30 to-baby-pink/40">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Wear it. Watch it. Live it — LoveDanceLive.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Shop" }}>Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Digital Downloads" }}>Browse Downloads</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
