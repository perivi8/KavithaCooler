import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Check, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: '',
    applianceType: '',
    brand: '',
    message: '',
    preferredDate: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2 || formData.name.length > 60) {
      newErrors.name = 'Name must be between 2-60 characters';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.topic) {
      newErrors.topic = 'Please select a topic';
    }
    
    if ((formData.topic === 'service' || formData.topic === 'installation') && !formData.applianceType) {
      newErrors.applianceType = 'Please select an appliance type';
    }
    
    if (!formData.message) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.length < 20 || formData.message.length > 600) {
      newErrors.message = 'Message must be between 20-600 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Brand logos
  const brands = [
    { name: 'Godrej', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Godrej_logo.svg/2560px-Godrej_logo.svg.png' },
    { name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Panasonic_logo_%28blue%29.svg/2560px-Panasonic_logo_%28blue%29.svg.png' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bosch-logo.svg/2560px-Bosch-logo.svg.png' },
    { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Siemens_AG_logo.svg/1280px-Siemens_AG_logo.svg.png' },
    { name: 'Liebherr', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Liebherr_Logo.svg/2560px-Liebherr_Logo.svg.png' },
    { name: 'V-Guard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/V-Guard_Industries_Logo.svg/2560px-V-Guard_Industries_Logo.svg.png' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-[#1E40AF] text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Kavita Cooler</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Sales, service, installation or warranty support—our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919876543210">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" /> Call Us Now
                </Button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div 
              className="bg-[#F4F7FA] p-6 rounded-xl hover:shadow-md transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our support team</p>
              <a href="tel:+919876543210" className="text-primary font-medium inline-flex items-center">
                +91 98765 43210 <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-sm text-gray-500 mt-2">9:00 AM - 7:00 PM</p>
            </motion.div>

            <motion.div 
              className="bg-[#F4F7FA] p-6 rounded-xl hover:shadow-md transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Chat with us instantly</p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-primary font-medium inline-flex items-center">
                Start Chat <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div 
              className="bg-[#F4F7FA] p-6 rounded-xl hover:shadow-md transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll get back to you soon</p>
              <a href="mailto:contact@kavithacoolers.shop" className="text-primary font-medium inline-flex items-center">
                contact@kavithacoolers.shop <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-sm text-gray-500 mt-2">Replies within 24 hours</p>
            </motion.div>

            <motion.div 
              className="bg-[#F4F7FA] p-6 rounded-xl hover:shadow-md transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our service center location</p>
              <a 
                href="https://www.google.com/maps/place/Asirvatham+Nagar,+Vetturnimadam,+Nagercoil,+Tamil+Nadu+629001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-medium inline-flex items-center"
              >
                Get Directions <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-sm text-gray-500 mt-2">No:505/B23, Asirvatham Nagar,<br />MS Road, Vetturnimadam<br />Nagercoil, Kanniyakumari<br />Tamil Nadu - 629001</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-sm p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for contacting us. Our team will get back to you shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={() => setIsSubmitted(false)} className="bg-primary hover:bg-primary/90">
                      Send Another Message
                    </Button>
                    <Link to="/services">
                      <Button variant="outline">
                        Book a Service
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="topic">Topic *</Label>
                      <Select 
                        value={formData.topic} 
                        onValueChange={(value) => setFormData({...formData, topic: value})}
                      >
                        <SelectTrigger className={errors.topic ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="service">Service/Repair</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="warranty">Warranty</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.topic && <p className="text-sm text-red-500">{errors.topic}</p>}
                    </div>
                    
                    {(formData.topic === 'service' || formData.topic === 'installation') && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="applianceType">Appliance Type *</Label>
                          <Select 
                            value={formData.applianceType} 
                            onValueChange={(value) => setFormData({...formData, applianceType: value})}
                          >
                            <SelectTrigger className={errors.applianceType ? 'border-red-500' : ''}>
                              <SelectValue placeholder="Select appliance" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tv">TV</SelectItem>
                              <SelectItem value="fan">Fan</SelectItem>
                              <SelectItem value="refrigerator">Refrigerator</SelectItem>
                              <SelectItem value="ac">AC</SelectItem>
                              <SelectItem value="washing-machine">Washing Machine</SelectItem>
                              <SelectItem value="air-cooler">Air Cooler</SelectItem>
                              <SelectItem value="water-heater">Water Heater</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.applianceType && <p className="text-sm text-red-500">{errors.applianceType}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="brand">Brand</Label>
                          <Select 
                            value={formData.brand} 
                            onValueChange={(value) => setFormData({...formData, brand: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select brand (optional)" />
                            </SelectTrigger>
                            <SelectContent>
                              {brands.map(brand => (
                                <SelectItem key={brand.name.toLowerCase()} value={brand.name.toLowerCase()}>
                                  {brand.name}
                                </SelectItem>
                              ))}
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Issue Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry or issue..."
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    <p className="text-sm text-gray-500">{formData.message.length}/600 characters</p>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 h-12 px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Hours & Response */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-[#F4F7FA] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
                    { day: 'Sunday', hours: 'Emergency Service Only' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-1.5 rounded-full mr-4 mt-0.5">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.day}</p>
                        <p className="text-gray-600">{item.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Response Time</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-4 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone Support</p>
                      <p className="text-gray-600">Immediate response during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-4 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email Support</p>
                      <p className="text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-4 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Service Appointments</p>
                      <p className="text-gray-600">Same or next day availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Assurance */}
      <section className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary mb-4">AUTHORIZED DEALER & SERVICE PROVIDER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to be an authorized partner for these premium appliance brands
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {brands.map((brand) => (
              <motion.div 
                key={brand.name}
                className="bg-white p-6 rounded-xl flex items-center justify-center h-32 hover:shadow-md transition-all duration-300"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need quick appliance service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're just one click away. Book a service or browse our selection of premium appliances.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book a Service
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Shop Appliances
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
