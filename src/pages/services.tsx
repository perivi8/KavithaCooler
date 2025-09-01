import React, { useEffect } from 'react';
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Truck, 
  Settings, 
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
  Droplets,
  Fan as FanIcon,
  Microwave as MicrowaveIcon
} from "lucide-react";

// Icon Components
const Tv = (props: any) => <TvIcon className="h-6 w-6 text-blue-500" {...props} />;
const AirConditioner = (props: any) => <Snowflake className="h-6 w-6 text-blue-400" {...props} />;
const Refrigerator = (props: any) => <Fridge className="h-6 w-6 text-blue-300" {...props} />;
const WashingMachine = (props: any) => <Settings className="h-6 w-6 text-blue-400" {...props} />;
const WaterHeater = (props: any) => <Droplets className="h-6 w-6 text-orange-400" {...props} />;
const Fan = (props: any) => <FanIcon className="h-6 w-6 text-gray-600" {...props} />;
const Microwave = (props: any) => <MicrowaveIcon className="h-6 w-6 text-red-400" {...props} />;

// Service Categories
const serviceCategories = [
  {
    title: "TV Repairs",
    description: "Expert diagnosis and repair for all TV brands and models.",
    icon: <Tv />,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "AC Service",
    description: "Professional AC installation, maintenance, and repair services.",
    icon: <AirConditioner />,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Refrigerator Repair",
    description: "Fast and reliable refrigerator repair services.",
    icon: <Refrigerator />,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
  },
  {
    title: "Washing Machine",
    description: "Expert repair for all types of washing machines.",
    icon: <WashingMachine />,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Air Cooler",
    description: "Installation and repair services for all air cooler models.",
    icon: <img src="/placeholder.svg" alt="Air Cooler" className="h-6 w-6 text-blue-300" />,
    image: "https://images.unsplash.com/photo-1623945199983-eb3a108a444a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Water Heater",
    description: "Repair and maintenance for water heaters of all brands.",
    icon: <WaterHeater />,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a6f7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Fan Repair",
    description: "Fast and affordable ceiling and table fan repairs.",
    icon: <Fan />,
    image: "https://images.unsplash.com/photo-1589391886635-adadc25845c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Microwave Oven",
    description: "Expert repair services for all microwave oven brands.",
    icon: <Microwave />,
    image: "https://images.unsplash.com/photo-1611182615748-a0403ec5f4a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
];

// Service Card Component
const ServiceCard = ({ title, description, icon, image }: { title: string; description: string; icon: React.ReactNode, image: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    className="group relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:shadow-md"
  >
    <div className="h-40 w-full overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <div className="mb-4 flex h-12 w-12 -mt-12 relative z-10 items-center justify-center rounded-lg bg-[#E6F0FF] text-[#004AAD] shadow-md">
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
      {(() => {
        useEffect(() => {
          document.title = 'Appliance Services & Repairs | Kavita Cooler';
          const metaDescription = document.createElement('meta');
          metaDescription.name = 'description';
          metaDescription.content = 'Authorized service and repairs for all home appliances. Certified technicians, genuine parts, and doorstep service.';
          document.head.appendChild(metaDescription);
          
          return () => {
            document.head.removeChild(metaDescription);
          };
        }, []);
        return null;
      })()}

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
                    className="font-dm-sans font-medium text-[#1A1A1A] border-[#E5E7EB] hover:bg-gray-50"
                  >
                    Track Service
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative mt-16 h-64 md:mt-0 md:h-full"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Appliance technician at work"
                className="rounded-lg object-cover md:absolute md:-left-20 md:top-0 md:h-full md:w-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Service Categories */}
        <motion.section 
          className="py-16 md:py-24 bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                Our Service Categories
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-dm-sans text-lg text-[#6B7280]">
                Professional repairs and maintenance for all major home appliances
              </p>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-full"
                >
                  <ServiceCard
                    title={category.title}
                    description={category.description}
                    icon={category.icon}
                    image={category.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-16 md:py-24 bg-[#F4F7FA] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div 
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-24"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="lg:order-last"
                  variants={fadeInUp}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Technician at work"
                      className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                  </motion.div>
                </motion.div>
                <motion.div variants={item}>
                  <motion.h2 
                    className="font-poppins text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl"
                    variants={fadeInUp}
                  >
                    Why Choose Our Appliance Repair Services?
                  </motion.h2>
                  <motion.p 
                    className="mt-6 text-lg leading-8 text-[#6B7280]"
                    variants={fadeInUp}
                  >
                    We are committed to providing top-quality appliance repair services with a focus on customer satisfaction and technical excellence.
                  </motion.p>
                  <motion.div 
                    className="mt-10 space-y-6"
                    variants={container}
                  >
                    {[
                      {
                        icon: <ShieldCheck className="h-6 w-6 text-white" />,
                        title: "Certified Technicians",
                        description: "Our technicians are certified and trained to handle all major appliance brands and models."
                      },
                      {
                        icon: <Clock className="h-6 w-6 text-white" />,
                        title: "Same-Day Service",
                        description: "We offer same-day service for most repairs to minimize your inconvenience."
                      },
                      {
                        icon: <Truck className="h-6 w-6 text-white" />,
                        title: "Doorstep Service",
                        description: "Our technicians come to your home or business for repairs and maintenance."
                      },
                      {
                        icon: <Star className="h-6 w-6 text-white" />,
                        title: "Satisfaction Guarantee",
                        description: "We stand behind our work with a 100% satisfaction guarantee on all services."
                      }
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex gap-x-6 group"
                        variants={item}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-500 group-hover:bg-[#FF7A00] transition-colors duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-[#1A1A1A] group-hover:text-[#004AAD] transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="mt-2 text-[#6B7280]">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Service Booking Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                Book a Service
              </h2>
              <p className="mt-4 font-dm-sans text-lg text-[#6B7280]">
                Fill out the form below and our team will get back to you within 30 minutes.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-dm-sans font-medium text-[#1A1A1A]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="block w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-dm-sans text-[#1A1A1A] shadow-sm focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-dm-sans font-medium text-[#1A1A1A]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="block w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-dm-sans text-[#1A1A1A] shadow-sm focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-opacity-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="appliance" className="block font-dm-sans font-medium text-[#1A1A1A]">
                      Appliance Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="appliance"
                      name="appliance"
                      required
                      className="block w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-dm-sans text-[#1A1A1A] shadow-sm focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-opacity-50"
                    >
                      <option value="">Select an appliance</option>
                      <option value="tv">TV</option>
                      <option value="ac">Air Conditioner</option>
                      <option value="refrigerator">Refrigerator</option>
                      <option value="washing-machine">Washing Machine</option>
                      <option value="air-cooler">Air Cooler</option>
                      <option value="water-heater">Water Heater</option>
                      <option value="fan">Fan</option>
                      <option value="microwave">Microwave</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="brand" className="block font-dm-sans font-medium text-[#1A1A1A]">
                      Brand <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="brand"
                      name="brand"
                      required
                      className="block w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-dm-sans text-[#1A1A1A] shadow-sm focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-opacity-50"
                    >
                      <option value="">Select brand</option>
                      <option value="samsung">Samsung</option>
                      <option value="lg">LG</option>
                      <option value="whirlpool">Whirlpool</option>
                      <option value="godrej">Godrej</option>
                      <option value="voltas">Voltas</option>
                      <option value="bluestar">Blue Star</option>
                      <option value="daikin">Daikin</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="issue" className="block font-dm-sans font-medium text-[#1A1A1A]">
                    Describe the Issue <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="issue"
                    name="issue"
                    rows={4}
                    required
                    className="block w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-dm-sans text-[#1A1A1A] shadow-sm focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-opacity-50"
                    placeholder="Please describe the issue you're experiencing..."
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="block font-dm-sans font-medium text-[#1A1A1A]">
                    Preferred Service Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="block w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-dm-sans text-[#1A1A1A] shadow-sm focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-opacity-50"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-[#E5E7EB] text-[#004AAD] focus:ring-[#004AAD]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-dm-sans text-[#6B7280]">
                      I agree to the{' '}
                      <a href="#" className="font-medium text-[#004AAD] hover:text-[#003D8F]">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#004AAD] hover:bg-[#003D8F] font-dm-sans font-medium text-white text-base py-6"
                  >
                    Submit Service Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Partner Brands */}
        <section className="py-16 md:py-24 bg-[#F4F7FA]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                Authorized Service Partner for Leading Brands
              </h2>
              <p className="mt-4 font-dm-sans text-lg text-[#6B7280]">
                We are proud to be the trusted service partner for top appliance brands
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {[
                  { name: 'Samsung', logo: '/samsung logo.jpg' },
                  { name: 'LG', logo: '/lg logo.jpg' },
                  { name: 'Godrej', logo: '/godrej logo.jpg' },
                  { name: 'Voltas', logo: '/voltas logo.jpg' },
                  { name: 'Blue Star', logo: '/blue star logo.jpg' },
                  { name: 'Panasonic', logo: '/panasonic logo.jpg' },
                  { name: 'V-Guard', logo: '/v guard logo.jpg' },
                  { name: 'Bosch', logo: '/bosch logo.jpg' },
                  { name: 'Siemens', logo: '/siemens logo.jpg' },
                  { name: 'Liebherr', logo: '/liebherr logo.jpg' },
                ].map((brand, index) => (
                  <motion.div 
                    key={brand.name}
                    className="flex h-24 items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="relative h-12 w-full">
                      <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    /></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-4 font-dm-sans text-lg text-[#6B7280]">
                Don't just take our word for it. Here's what our customers have to say about our services.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Rajesh Kumar',
                    role: 'Homeowner',
                    content: 'The technician arrived on time and fixed my AC in no time. Very professional service and reasonable pricing. Highly recommended!',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
                  },
                  {
                    name: 'Priya Sharma',
                    role: 'Working Professional',
                    content: 'Our refrigerator stopped working suddenly. Kavita Cooler sent a technician the same day who diagnosed and fixed the issue. Excellent service!',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
                  },
                  {
                    name: 'Amit Patel',
                    role: 'Small Business Owner',
                    content: 'Regular maintenance service for our office ACs. Always reliable, professional, and reasonably priced. Great customer support too!',
                    rating: 4,
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className="h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-poppins font-semibold text-[#1A1A1A]">
                          {testimonial.name}
                        </h4>
                        <p className="font-dm-sans text-sm text-[#6B7280]">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="ml-auto flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 font-dm-sans text-[#6B7280]">"{testimonial.content}"</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white font-dm-sans font-medium"
                >
                  View All Testimonials
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#004AAD] py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-poppins text-3xl font-bold text-white sm:text-4xl">
                Need Help With Your Appliances?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-dm-sans text-lg text-blue-100">
                Our expert technicians are ready to help you with all your appliance repair and maintenance needs.
              </p>
              
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <motion.div 
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 font-poppins font-semibold text-white">Call Us</h3>
                  <p className="mt-2 font-dm-sans text-blue-100">
                    <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
                  </p>
                  <p className="font-dm-sans text-sm text-blue-100">Mon-Sun: 8AM - 8PM</p>
                </motion.div>

                <motion.div 
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 font-poppins font-semibold text-white">Email Us</h3>
                  <p className="mt-2 font-dm-sans text-blue-100">
                    <a href="mailto:contact@kavithacoolers.shop" className="hover:underline">contact@kavithacoolers.shop</a>
                  </p>
                  <p className="font-dm-sans text-sm text-blue-100">Response within 2 hours</p>
                </motion.div>

                <motion.div 
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 font-poppins font-semibold text-white">Visit Us</h3>
                  <p className="mt-2 font-dm-sans text-blue-100">
                    123 Tech Park, Sector 62<br />
                    Noida, Uttar Pradesh 201301
                  </p>
                </motion.div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="bg-white text-[#004AAD] hover:bg-blue-50 font-dm-sans font-medium text-base px-8 py-6"
                >
                  Book a Service Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-dm-sans font-medium text-base px-8 py-6"
                >
                  Track Service Request
                </Button>
              </div>

              <div className="mt-12 flex justify-center space-x-6">
                <a href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">WhatsApp</span>
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServicesPage;
