import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Upload } from 'lucide-react';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border shadow-lg">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            <Button variant="outline" size="sm" asChild className="flex-1 min-w-0 bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm px-2 sm:px-3">
              <Link to="/registration" className="flex items-center justify-center">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate hidden xs:inline">Sign Up to Enter</span>
                <span className="truncate xs:hidden">Sign Up</span>
              </Link>
            </Button>
            <Button size="sm" asChild className="flex-1 min-w-0 bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm px-2 sm:px-3">
              <Link to="/registration" className="flex items-center justify-center">
                <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate hidden xs:inline">Submit Your Dance Video</span>
                <span className="truncate xs:hidden">Submit Video</span>
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;