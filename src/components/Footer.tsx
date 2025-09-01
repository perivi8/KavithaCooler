import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };


  return (
    <footer className="bg-[#0F172A] text-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Top Section: Navigation Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand / About */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-jakarta text-xl font-bold">Kavita Cooler</h3>
            <p className="text-[#9CA3AF] text-sm mb-3">
              Authorized Dealer & Service Partner for Leading Appliance Brands.
            </p>
            <div className="flex items-start space-x-3 text-[#9CA3AF] text-sm mb-3">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FF7A00]" />
              <address className="not-italic">
                No:505/B23, Asirvatham Nagar,<br />
                MS Road, Vetturnimadam,<br />
                Nagercoil, Kanniyakumari,<br />
                Tamil Nadu - 629001
              </address>
            </div>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="text-[#9CA3AF] hover:text-[#FF7A00] transition-colors duration-200 p-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div variants={item}>
            <h4 className="font-jakarta font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {[
                'TVs', 'Refrigerators', 'Washing Machines', 'ACs', 'Air Coolers', 'Water Heaters', 'Fans'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/shop?category=${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#9CA3AF] hover:text-[#FF7A00] text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services & Support */}
          <motion.div variants={item}>
            <h4 className="font-jakarta font-semibold mb-4">Services & Support</h4>
            <ul className="space-y-2">
              {[
                { text: 'Book a Service', path: '/services/book' },
                { text: 'Track Service', path: '/track-service' },
                { text: 'Warranty Policy', path: '/policies/warranty' },
                { text: 'Returns & Repairs', path: '/services/repairs' },
                { text: 'FAQ', path: '/faq' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-[#9CA3AF] hover:text-[#FF7A00] text-sm transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company & Contact */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="font-jakarta font-semibold">Company</h4>
            <ul className="space-y-2">
              {[
                { text: 'About Us', path: '/about' },
                { text: 'Contact Us', path: '/contact' },
                { text: 'Store Locator', path: '/store-locator' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-[#9CA3AF] hover:text-[#FF7A00] text-sm transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm hover:text-[#FF7A00] transition-colors duration-200">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <a href="mailto:contact@kavithacoolers.shop" className="text-sm hover:text-[#FF7A00] transition-colors duration-200">
                  contact@kavithacoolers.shop
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <p className="text-sm text-[#9CA3AF]">Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <p className="text-sm text-[#9CA3AF]">123 Main Road, City, State - 123456</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Middle Section: Partner Assurance */}
        <motion.div 
          className="py-8 border-t border-[#1E293B] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView="show"
          variants={{
            show: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5 }
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-center text-[#9CA3AF] text-sm mb-6">
            Authorized Service Partner for Trusted Global Brands.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {[
              { name: 'Godrej', logo: '/godrej logo.jpg' },
              { name: 'Panasonic', logo: '/panasonic logo.jpg' },
              { name: 'Bosch', logo: '/bosch logo.jpg' },
              { name: 'Siemens', logo: '/siemens logo.jpg' },
              { name: 'Liebherr', logo: '/liebherr logo.jpg' },
              { name: 'V-Guard', logo: '/v guard logo.jpg' },
            ].map((brand, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-white rounded p-1">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-[#9CA3AF] text-sm font-medium group-hover:text-white transition-colors duration-200">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Bottom Section: Legal + Copyright */}
        <motion.div 
          className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView="show"
          variants={{
            show: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5, delay: 0.2 }
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-[#9CA3AF] text-sm">
            © {new Date().getFullYear()} Kavita Cooler. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: 'Privacy Policy', path: '/privacy' },
              { text: 'Terms & Conditions', path: '/terms' },
              { text: 'Shipping Policy', path: '/shipping' },
              { text: 'Cancellation & Refund', path: '/cancellation-refund' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[#9CA3AF] hover:text-[#FF7A00] text-xs md:text-sm transition-colors duration-200"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
