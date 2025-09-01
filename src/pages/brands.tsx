import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Brand data
const brands = [
  {
    id: 1,
    name: 'Godrej',
    logo: '/godrej logo.jpg',
    description: 'Innovative and reliable home appliances for modern Indian households.'
  },
  {
    id: 2,
    name: 'Voltas',
    logo: '/voltas logo.jpg',
    description: 'Trusted cooling solutions for every Indian home.'
  },
  {
    id: 3,
    name: 'Blue Star',
    logo: '/blue star logo.jpg',
    description: 'Premium air conditioning and refrigeration solutions.'
  },
  {
    id: 4,
    name: 'Panasonic',
    logo: '/panasonic logo.jpg',
    description: 'Japanese technology for superior home appliances.'
  },
  {
    id: 5,
    name: 'Samsung',
    logo: '/samsung logo.jpg',
    description: 'Cutting-edge electronics and home appliances.'
  },
  {
    id: 6,
    name: 'LG',
    logo: '/lg logo.jpg',
    description: 'Life\'s good with LG\'s innovative home solutions.'
  }
];

const BrandsPage = () => {
  useEffect(() => {
    document.title = 'Our Trusted Brands | Kavita Cooler';
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7FA]">

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 bg-cover bg-center flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-poppins font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Trusted Brands
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-dm-sans max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Kavita Cooler is an authorized dealer and service partner for leading global appliance brands.
          </motion.p>
        </div>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </motion.section>

      {/* Brand Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex-grow flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-full bg-gray-100 flex items-center justify-center p-2">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-[#1A1A1A] mb-2">{brand.name}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 font-dm-sans flex-grow">{brand.description}</p>
                  <div className="space-y-2 w-full">
                    <Link to={`/shop?brand=${encodeURIComponent(brand.name)}`} className="block w-full">
                      <Button className="w-full bg-[#004AAD] hover:bg-[#003d8f] transition-colors">
                        Shop {brand.name}
                      </Button>
                    </Link>
                    <Link to={`/service?brand=${encodeURIComponent(brand.name)}`} className="block w-full">
                      <Button variant="outline" className="w-full border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD]/10">
                        Book Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Partnerships Section */}
      <section className="py-16 md:py-24 bg-[#F4F7FA]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Our Certified Technicians"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1A1A1A] mb-6">
                About Our Partnerships
              </h2>
              <p className="text-[#6B7280] font-dm-sans mb-8">
                As authorized partners, we provide genuine products, warranty support, and certified servicing for all major appliance brands. Our trained technicians ensure your appliances receive the best care possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E6F0FF] p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[#1A1A1A]">Authorized Warranty</h3>
                    <p className="text-sm text-[#6B7280] font-dm-sans">Genuine manufacturer warranty on all products and services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E6F0FF] p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[#1A1A1A]">Genuine Parts</h3>
                    <p className="text-sm text-[#6B7280] font-dm-sans">Only authentic manufacturer parts used for all repairs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E6F0FF] p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[#1A1A1A]">Certified Technicians</h3>
                    <p className="text-sm text-[#6B7280] font-dm-sans">Factory-trained professionals for expert service.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Brand Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1A1A1A] mb-4">Featured Brands</h2>
            <p className="text-[#6B7280] font-dm-sans max-w-2xl mx-auto">Discover our most popular brands and their latest innovations in home appliances.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.slice(0, 3).map((brand, index) => (
              <motion.div 
                key={`featured-${brand.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-poppins font-bold text-white">{brand.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#6B7280] font-dm-sans mb-6">{brand.description}</p>
                  <Link to={`/shop?brand=${encodeURIComponent(brand.name)}`} className="inline-block">
                    <Button className="bg-[#004AAD] hover:bg-[#003d8f] transition-colors">
                      Explore {brand.name} Products
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#004AAD] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Looking for brand-authorized service or products?</h2>
            <p className="text-lg font-dm-sans mb-8 max-w-2xl mx-auto opacity-90">
              Experience the assurance of genuine products and expert service from authorized dealers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/shop">
                <Button className="bg-white text-[#004AAD] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                  Shop Now
                </Button>
              </Link>
              <Link to="/service">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
                  Book a Service
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;
