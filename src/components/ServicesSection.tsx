import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  Phone,
  ArrowRight,
  Star
} from 'lucide-react';
// Using public path for service technician image

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: 'AC Service & Repair',
      description: 'Complete AC maintenance, gas refill, and repair services',
    },
    {
      icon: Wrench,
      title: 'Refrigerator Service',
      description: 'Cooling issues, compressor repair, and maintenance',
    },
    {
      icon: Wrench,
      title: 'Washing Machine',
      description: 'Drum repair, motor issues, and regular servicing',
    },
    {
      icon: Wrench,
      title: 'TV Repair',
      description: 'Display issues, sound problems, and smart TV setup',
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Certified Technicians',
      description: 'Trained and certified professionals',
    },
    {
      icon: Shield,
      title: 'Genuine Parts',
      description: 'Only original manufacturer parts',
    },
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Quick response and resolution',
    },
    {
      icon: Users,
      title: 'Doorstep Service',
      description: 'Convenient home service',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-2" />
            Expert Service Support
          </Badge>
          <h2 className="text-section-title text-secondary mb-4">
            Professional Appliance Services
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Our certified technicians provide comprehensive service and repair solutions 
            for all major appliance brands. Quality service you can trust.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="/service-technician.jpg"
                alt="Professional appliance service technician"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              
              {/* Floating stats */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Service Rating</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-success text-white px-4 py-2 rounded-full font-semibold">
                <span className="text-sm">Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Service Types */}
            <div className="grid gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{service.title}</h4>
                    <p className="text-small">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/services">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Service Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline">
                <Link to="/services/track">
                  Track Your Service
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-secondary">{feature.title}</h4>
                <p className="text-small">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mt-12 text-center">
          <h3 className="text-card-title text-secondary mb-2">Emergency Service?</h3>
          <p className="text-body mb-6">Need immediate assistance? Our emergency service team is available 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" className="font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button size="lg" variant="success">
              <span className="mr-2">📱</span>
              WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;