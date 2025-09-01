import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Wrench, Star, ArrowRight } from 'lucide-react';
// Using public path for hero image

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-muted section-spacing">
      <div className="container-main">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Content */}
          <div className="md:col-span-6 space-y-6">
            
            {/* Badge */}
            <Badge variant="secondary" className="font-medium">
              <Star className="h-4 w-4 mr-2 text-success" />
              Authorized Dealers & Service Providers
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-hero text-secondary">
                Premium Home Appliances
                <span className="block text-primary">Sales & Service</span>
              </h1>
              <p className="text-body text-lg max-w-lg">
                Your trusted partner for quality appliances from top brands. Expert sales consultation and professional service support for all your home needs.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">Genuine Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">Expert Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">Doorstep Support</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                variant="hero"
                className="group"
              >
                <Link to="/shop">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Shop Appliances
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="accent"
                className="group"
              >
                <Link to="/services">
                  <Wrench className="h-5 w-5 mr-2" />
                  Book Service
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-small">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-small">Premium Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-small">Service Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-6">
            <div className="relative">
              <img
                src="/hero-appliances.jpg"
                alt="Premium home appliances"
                className="w-full h-auto rounded-xl shadow-2xl border border-border/50"
              />
              
              {/* Floating offer badge */}
              <div className="absolute top-6 right-6 bg-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                <span className="text-sm">Up to 30% OFF</span>
              </div>
              
              {/* Service badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Same Day Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;