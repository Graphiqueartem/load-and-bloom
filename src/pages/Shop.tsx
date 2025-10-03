import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Shirt, Download, Package } from 'lucide-react';

const heroImage = '/lovable-uploads/47a64dda-9083-4c59-962a-605d69645979.png';

const Shop = () => {
  React.useEffect(() => {
    document.title = "Shop - Merchandise & Downloads | LoveDanceLive";
  }, []);

  return (
    <div className="page-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="LoveDanceLive merchandise and apparel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
              Take LoveDanceLive Home
            </h1>
            <p className="text-lg sm:text-xl font-open-sans text-white/95 max-w-2xl mx-auto">
              Gear, merch, and memories.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10">
        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="bg-gradient-to-br from-white to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 sm:p-10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
                Celebrate your passion with official merchandise and exclusive digital downloads.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Shop Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 max-w-4xl mx-auto">
          {/* Merchandise */}
          <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="gradient-icon-bg w-fit mx-auto mb-6">
                <Shirt className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Merchandise</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Apparel, accessories, event gear.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Official T-Shirts & Hoodies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Dance Bags & Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Limited Edition Event Gear</span>
                </div>
              </div>
              <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all w-full">
                <Link to="/coming-soon" state={{ pageTitle: "Merchandise Shop" }}>Shop Merchandise</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Digital Downloads */}
          <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 text-center">
              <div className="gradient-icon-bg w-fit mx-auto mb-6">
                <Download className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Digital Downloads</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Videos, critiques, and more.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>Competition Performance Videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>Premium Judge Critiques</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>Exclusive Behind-the-Scenes</span>
                </div>
              </div>
              <Button size="lg" asChild variant="secondary" className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all w-full">
                <Link to="/coming-soon" state={{ pageTitle: "Digital Downloads" }}>Browse Downloads</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Products */}
        <div className="mb-8 sm:mb-10">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold gradient-text-hero mb-4">
                Featured Products
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Get your LoveDanceLive gear and show your passion wherever you go.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="gradient-icon-bg w-fit mx-auto mb-6">
                  <Package className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Shop Coming Soon
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Our online shop is launching soon with exclusive merchandise, apparel, and digital content. Sign up to be notified when we go live!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6">
                Ready to Shop?
              </h3>
              <Button size="lg" asChild className="hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                <Link to="/coming-soon" state={{ pageTitle: "Shop" }}>Shop Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;
