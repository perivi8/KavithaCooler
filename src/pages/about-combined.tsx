import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Clock, Check, MapPin, Phone, Wrench, Star, Truck } from 'lucide-react';

const AboutPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Data
  const brands = [
    { name: 'Godrej', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Godrej_logo.svg/2560px-Godrej_logo.svg.png' },
    { name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Panasonic_logo_%28blue%29.svg/2560px-Panasonic_logo_%28blue%29.svg.png' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bosch-logo.svg/2560px-Bosch-logo.svg.png' },
    { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Siemens_AG_logo.svg/1280px-Siemens_AG_logo.svg.png' },
    { name: 'Liebherr', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Liebherr_Logo.svg/2560px-Liebherr_Logo.svg.png' },
    { name: 'V-Guard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/V-Guard_Industries_Logo.svg/2560px-V-Guard_Industries_Logo.svg.png' },
  ];

  const team = [
    {
      name: 'Service Technicians',
      role: 'Certified Experts',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Our certified technicians undergo rigorous training to handle all major appliance brands.'
    },
    {
      name: 'Customer Support',
      role: 'Service Advisors',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Dedicated team ensuring your service experience is smooth and hassle-free.'
    },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Homeowner',
      content: 'Kavita Cooler provided excellent service when our refrigerator broke down. The technician was prompt, professional, and fixed the issue in no time!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Business Owner',
      content: 'We trust Kavita Cooler for all our commercial refrigeration needs. Their AMC service is worth every penny.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-[#1E40AF] text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Kavita Cooler
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your trusted partner for premium home appliances and professional service since 2010. 
              Authorized dealer & service provider for top appliance brands across India.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/shop">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Shop Appliances
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Book a Service
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-6 items-center text-sm text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Authorized Dealer & Service Provider
              </span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Same/Next Day Service
              </span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                Genuine Parts
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={item}>
              Our Story
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
              From humble beginnings to becoming a trusted name in home appliances, our journey has been driven by a commitment to quality and customer satisfaction.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 w-1 bg-gray-200 h-full -ml-px"></div>
            
            <motion.div 
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 text-right">
                  <div className="md:inline-block bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center mb-4 mx-auto md:mx-0 md:mr-4">
                    <span className="text-xl font-bold">2010</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Our Humble Beginnings</h3>
                  <p className="mt-2 text-gray-600">Founded with a vision to provide reliable appliance solutions to Mumbai households, starting with a single service center in Andheri.</p>
                </div>
              </div>
            </motion.div>

            {/* Other timeline items... */}
            <motion.div 
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-gray-900">First Brand Partnership</h3>
                  <p className="mt-2 text-gray-600">Became an authorized service provider for Godrej, marking the beginning of our journey with premium appliance brands.</p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <div className="md:inline-block bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center mb-4 mx-auto md:mx-0 md:ml-4">
                    <span className="text-xl font-bold">2012</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 text-right">
                  <div className="md:inline-block bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center mb-4 mx-auto md:mx-0 md:mr-4">
                    <span className="text-xl font-bold">2018</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Expanding Our Reach</h3>
                  <p className="mt-2 text-gray-600">Expanded our service coverage across Mumbai and added multiple premium brands to our authorized dealer network.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-gray-900">10,000+ Happy Customers</h3>
                  <p className="mt-2 text-gray-600">Celebrated serving over 10,000 satisfied customers with our appliance solutions and exceptional service.</p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <div className="md:inline-block bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center mb-4 mx-auto md:mx-0 md:ml-4">
                    <span className="text-xl font-bold">2023</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={item}>
              Our Mission & Values
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
              We're committed to delivering excellence in every interaction, with core values that guide our daily operations.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <div className="text-4xl">👥</div>,
                title: "Customer-First Support",
                description: "Your satisfaction is our top priority. We listen, understand, and deliver solutions tailored to your needs."
              },
              {
                icon: <div className="text-4xl">🔧</div>,
                title: "Quality & Genuine Parts",
                description: "We use only manufacturer-approved parts to ensure longevity and maintain your appliance's warranty."
              },
              {
                icon: <div className="text-4xl">⚡</div>,
                title: "Fast Response Time",
                description: "We understand appliance issues can't wait. Our team strives for same or next-day service whenever possible."
              },
              {
                icon: <div className="text-4xl">💰</div>,
                title: "Transparent Pricing",
                description: "No hidden charges. We provide clear quotes before any work begins, so you know exactly what to expect."
              },
              {
                icon: <div className="text-4xl">👨‍🔧</div>,
                title: "Expert Technicians",
                description: "Our certified technicians undergo continuous training to handle all major appliance brands and models."
              },
              {
                icon: <div className="text-4xl">🌱</div>,
                title: "Energy Efficiency",
                description: "We recommend and service energy-efficient appliances to help you save on bills and reduce environmental impact."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={item}>
                What We Do
              </motion.h2>
              <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
                Comprehensive appliance solutions for homes and businesses across Mumbai.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sales & Installation</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Wide Range of Products</h4>
                      <p className="text-gray-600 mt-1">Premium appliances from top brands with official warranties.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Professional Installation</h4>
                      <p className="text-gray-600 mt-1">Expert installation by certified technicians.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service & Maintenance</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Repair Services</h4>
                      <p className="text-gray-600 mt-1">Same-day service for all major appliance brands.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Annual Maintenance</h4>
                      <p className="text-gray-600 mt-1">Preventive maintenance plans to extend appliance life.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Partnerships */}
      <section className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={item}>
              Authorized Partnerships
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
              We are proud to be authorized partners and service providers for leading appliance brands.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-32"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-12 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-blue-50 p-4 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts & Warranty</h3>
                <p className="text-gray-600">
                  As an authorized service provider, we use only genuine parts that maintain your manufacturer's warranty. 
                  Our work is backed by a comprehensive service warranty for your peace of mind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Import and render the second part */}
      <AboutPagePart2 />
    </div>
  );
};

// Import the second part of the content
import { AboutPagePart2 } from './about-combined-part2';

export default AboutPage;
