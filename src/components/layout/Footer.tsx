import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Youtube, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Logo + Tagline */}
          <div className="text-center space-y-3">
            <Link to="/" className="inline-flex items-center space-x-2 font-poppins font-bold text-2xl">
              <Heart className="h-8 w-8 text-neon-pink" />
              <span className="text-neon-pink">Love</span>
              <span className="text-primary">Dance</span>
              <span className="text-accent">Live</span>
            </Link>
            <p className="text-foreground text-base font-open-sans">
              Stay in the rhythm with LoveDanceLive.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <Music2 className="h-6 w-6" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <svg 
                className="h-6 w-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Persistent CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link to="/registration">Sign Up to Enter</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/online-classes">Browse Classes</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/community">Community Hub</Link>
            </Button>
          </div>

          {/* Footer Links */}
          <div className="text-center text-sm text-foreground">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link 
                to="/coming-soon" 
                state={{ pageTitle: "Terms" }}
                className="hover:text-accent transition-colors"
              >
                Terms
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link 
                to="/coming-soon" 
                state={{ pageTitle: "Privacy" }}
                className="hover:text-accent transition-colors"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link 
                to="/coming-soon" 
                state={{ pageTitle: "Accessibility" }}
                className="hover:text-accent transition-colors"
              >
                Accessibility
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link 
                to="/coming-soon" 
                state={{ pageTitle: "Code of Conduct" }}
                className="hover:text-accent transition-colors"
              >
                Code of Conduct
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link 
                to="/about#chaperones"
                className="hover:text-accent transition-colors"
              >
                Chaperones & Guardians
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
            <p>&copy; 2024 LoveDanceLive. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;