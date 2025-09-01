// This is the second part of the combined About page
// This file should be imported and rendered after the first part

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Check, Wrench, Star } from 'lucide-react';

export const AboutPagePart2 = () => {
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

  // Team members
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

  // Testimonials
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
    <>
      {/* Numbers That Matter */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "13+", label: "Years in Service" },
              { number: "10K+", label: "Happy Customers" },
              { number: "4.8/5", label: "Average Rating" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Service Center */}
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
              Our Team & Service Center
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
              Meet the dedicated professionals who make Kavita Cooler a trusted name in appliance service
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="bg-[#F4F7FA] rounded-xl p-8 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Service Center</h3>
              <p className="text-gray-600 mb-6 text-center">
                Visit our state-of-the-art service center equipped with the latest tools and technology to handle all your appliance needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">123 Appliance Street, Andheri East, Mumbai - 400069</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Mon-Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 md:py-24 bg-[#F4F7FA]">
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
                Our Coverage Area
              </motion.h2>
              <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
                We proudly serve customers across Mumbai with our appliance sales and service solutions
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    'Andheri (E & W)', 'Bandra', 'Bandra Kurla Complex', 'Bhandup', 'Bhayandar', 'Borivali',
                    'Chembur', 'Dadar', 'Ghatkopar', 'Goregaon', 'Jogeshwari', 'Juhu', 'Kandivali', 'Khar',
                    'Kurla', 'Malad', 'Mira Road', 'Mulund', 'Powai', 'Santacruz', 'Sion', 'Thane', 'Vikhroli', 'Vile Parle', 'Worli'
                  ].sort().map((area, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-6">Don't see your area? Contact us to check availability!</p>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90">
                      Check Availability
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
              Our simple 4-step process ensures a hassle-free appliance service experience
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Request Service',
                description: 'Book online or call us to schedule a service at your convenience.',
                icon: <Phone className="h-6 w-6 text-primary" />
              },
              {
                number: '02',
                title: 'Diagnosis',
                description: 'Our technician will diagnose the issue and provide a transparent quote.',
                icon: <Wrench className="h-6 w-6 text-primary" />
              },
              {
                number: '03',
                title: 'Repair/Install',
                description: 'We perform the repair or installation using genuine parts.',
                icon: <Wrench className="h-6 w-6 text-primary" />
              },
              {
                number: '04',
                title: 'Sit Back & Enjoy',
                description: 'Your appliance is now working perfectly. Enjoy our service warranty!',
                icon: <Check className="h-6 w-6 text-primary" />
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Customers Say
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={item}>
              Don't just take our word for it. Here's what our customers have to say about our service.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={item}>
              Need help with an appliance today?
            </motion.h2>
            <motion.p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100" variants={item}>
              Our team is ready to assist you with all your appliance needs. Get in touch now!
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={item}>
              <Link to="/services">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book a Service
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
