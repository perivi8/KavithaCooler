import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Settings, 
  Zap, 
  Phone, 
  Star, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle,
  ChevronRight,
  Tv as TvIcon,
  Snowflake,
  Refrigerator as Fridge,
  Wind,
  Droplets,
  Fan as FanIcon,
  Microwave as MicrowaveIcon
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Icon Components
const Tv = (props: any) => <TvIcon className="h-6 w-6 text-blue-500" {...props} />;
const AirConditioner = (props: any) => <Snowflake className="h-6 w-6 text-blue-400" {...props} />;
const Refrigerator = (props: any) => <Fridge className="h-6 w-6 text-blue-300" {...props} />;
const WashingMachine = (props: any) => <Settings className="h-6 w-6 text-blue-400" {...props} />;
const AirCooler = (props: any) => <Wind className="h-6 w-6 text-blue-300" {...props} />;
const WaterHeater = (props: any) => <Droplets className="h-6 w-6 text-orange-400" {...props} />;
const Fan = (props: any) => <FanIcon className="h-6 w-6 text-gray-600" {...props} />;
const Microwave = (props: any) => <MicrowaveIcon className="h-6 w-6 text-red-400" {...props} />;

// Service Categories
const serviceCategories = [
  {
    title: "TV Repairs",
    description: "Expert diagnosis and repair for all TV brands and models.",
    icon: <Tv />,
  },
  {
    title: "AC Service",
    description: "Professional AC installation, maintenance, and repair services.",
    icon: <AirConditioner />,
  },
  {
    title: "Refrigerator Repair",
    description: "Fast and reliable refrigerator repair services for all major brands.",
    icon: <Refrigerator />,
  },
  {
    title: "Washing Machine",
    description: "Expert repair for all types of washing machines.",
    icon: <WashingMachine />,
  },
  {
    title: "Air Cooler",
    description: "Professional air cooler installation and repair services.",
    icon: <AirCooler />,
  },
  {
    title: "Water Heater",
    description: "Expert repair and maintenance for all types of water heaters.",
    icon: <WaterHeater />,
  },
  {
    title: "Fan Repair",
    description: "Fast and affordable fan repair services.",
    icon: <Fan />,
  },
  {
    title: "Microwave Oven",
    description: "Expert repair services for all microwave oven brands.",
    icon: <Microwave />,
  },
];

// Service Card Component
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    className="group relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:shadow-md"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F0FF] text-[#004AAD]">
      {icon}
    </div>
    <h3 className="font-poppins text-lg font-semibold text-[#1A1A1A]">{title}</h3>
    <p className="mt-2 font-dm-sans text-sm text-[#6B7280]">{description}</p>
    <div className="mt-4">
      <Button variant="link" className="h-auto p-0 font-dm-sans font-medium text-[#004AAD] hover:no-underline">
        Learn more
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  </motion.div>
);

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Appliance Services & Repairs | Kavita Cooler</title>
        <meta
          name="description"
          content="Authorized service and repairs for all home appliances. Certified technicians, genuine parts, and doorstep service."
        />
      </Head>

      <main className="bg-[#F4F7FA]">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6 py-16 md:flex md:items-center md:py-24 lg:px-8">
            <motion.div 
              className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                className="font-poppins text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl"
                variants={item}
              >
                Authorized Service & Repairs for Your Home Appliances
              </motion.h1>
              <motion.p 
                className="mt-6 font-dm-sans text-lg leading-8 text-[#6B7280]"
                variants={item}
              >
                Expert repairs and maintenance by certified technicians. We come to you with genuine parts and a satisfaction guarantee.
              </motion.p>
              <motion.div 
                className="mt-10 flex items-center gap-x-6"
                variants={item}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#FF7A00] hover:bg-[#E66A00] font-dm-sans font-medium text-white"
                  >
                    Book a Service
                    <motion.span 
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      className="inline-flex ml-2"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-dm-sans font-medium text-[#1A1A1A] border-[#D1D5DB] hover:bg-[#F9FAFB]"
                  >
                    Call Now
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-16 md:mt-0 md:ml-10 lg:ml-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/technician.jpg"
                  alt="Appliance repair technician"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                        <ShieldCheck className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Certified Technicians</h3>
                      <p className="text-sm text-white/90">Expert service you can trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2 
                className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Appliance Services
              </motion.h2>
              <motion.p 
                className="mt-4 font-dm-sans text-lg text-[#6B7280]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Comprehensive repair and maintenance services for all your home appliances.
              </motion.p>
            </div>

            <motion.div 
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {serviceCategories.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-[#004AAD] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2 
                className="font-poppins text-3xl font-bold text-white sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Need Help With Your Appliances?
              </motion.h2>
              <motion.p 
                className="mt-4 font-dm-sans text-lg text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Our expert technicians are ready to help you with all your appliance repair needs.
              </motion.p>
              <motion.div 
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-[#004AAD] hover:bg-gray-100 font-dm-sans font-medium"
                >
                  Book a Service
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 font-dm-sans font-medium"
                >
                  Call Now
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-4 font-dm-sans text-lg text-[#6B7280]">
                Don't just take our word for it. Here's what our customers have to say about our services.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Homeowner",
                  content: "Excellent service! The technician was on time, professional, and fixed my AC quickly. Highly recommended!",
                  rating: 5,
                },
                {
                  name: "Priya Patel",
                  role: "Apartment Owner",
                  content: "Great experience with Kavita Cooler. They repaired my refrigerator the same day I called. Very satisfied!",
                  rating: 5,
                },
                {
                  name: "Amit Kumar",
                  role: "Business Owner",
                  content: "We use their services for all our office appliances. Always reliable and professional.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#004AAD] font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-poppins font-semibold text-[#1A1A1A]">
                        {testimonial.name}
                      </h4>
                      <p className="font-dm-sans text-sm text-[#6B7280]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="mt-4 font-dm-sans text-[#6B7280]">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#F9FAFB] py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-4 font-dm-sans text-lg text-[#6B7280]">
                Have questions or need assistance? Our team is here to help.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div 
                className="rounded-xl bg-white p-6 shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F0FF] text-[#004AAD]">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-poppins font-semibold text-[#1A1A1A]">Our Location</h3>
                <p className="mt-2 font-dm-sans text-[#6B7280]">
                  123 Tech Park, Sector 62, Noida, Uttar Pradesh 201309
                </p>
              </motion.div>

              <motion.div 
                className="rounded-xl bg-white p-6 shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F0FF] text-[#004AAD]">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-poppins font-semibold text-[#1A1A1A]">Call Us</h3>
                <p className="mt-2 font-dm-sans text-[#6B7280]">
                  <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
                </p>
                <p className="font-dm-sans text-sm text-[#6B7280]">Mon-Sun: 8AM - 8PM</p>
              </motion.div>

              <motion.div 
                className="rounded-xl bg-white p-6 shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F0FF] text-[#004AAD]">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-poppins font-semibold text-[#1A1A1A]">Email Us</h3>
                <p className="mt-2 font-dm-sans text-[#6B7280]">
                  <a href="mailto:service@kavitacooler.com" className="hover:underline">service@kavitacooler.com</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 py-12 md:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-poppins text-lg font-semibold">Kavita Cooler</h3>
              <p className="mt-4 font-dm-sans text-sm text-gray-400">
                Your trusted partner for all home appliance repairs and maintenance services.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-poppins text-lg font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                {serviceCategories.slice(0, 4).map((service) => (
                  <li key={service.title}>
                    <a href="#" className="font-dm-sans text-sm text-gray-400 hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-poppins text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="font-dm-sans text-sm text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="font-dm-sans text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="font-dm-sans text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="font-dm-sans text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-poppins text-lg font-semibold">Newsletter</h3>
              <p className="mt-4 font-dm-sans text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                />
                <button className="rounded-r-lg bg-[#004AAD] px-4 py-2 text-sm font-medium text-white hover:bg-[#003D8F] focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:ring-offset-2 focus:ring-offset-gray-900">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-center font-dm-sans text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Kavita Cooler. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
