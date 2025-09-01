import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90">Your Privacy is Our Commitment</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16 max-w-4xl"
      >
        <motion.div variants={item} className="mb-12">
          <p className="text-gray-700 mb-8">
            At Kavita Coolers (Kavita Cool Home), we value the trust you place in us. Since 2017, we have been committed to providing reliable and affordable home appliance repair services. Alongside our dedication to quality service, we are equally committed to protecting your privacy and ensuring that any personal information you share with us is handled securely, transparently, and in compliance with applicable laws including the Indian IT Act.
          </p>
          <p className="text-gray-700 mb-8">
            This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and your rights as our valued customer.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you interact with our website, service team, or technicians, we may collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Full Name</li>
            <li>Contact details (phone, email)</li>
            <li>Service Address & Billing Address</li>
            <li>Appliance details (type, brand, issue reported)</li>
            <li>Payment details (via secure third-party gateways; we do not store card data)</li>
            <li>Service history and preferences</li>
            <li>Device & browser data (for website usage)</li>
            <li>Cookies and analytics information (to improve performance)</li>
          </ul>
          <p className="text-gray-700">
            We only collect the data required to provide smooth, secure, and professional repair and support services.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why We Collect Your Information</h2>
          <p className="text-gray-700 mb-4">
            Your data is collected and used solely for legitimate purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Booking and managing repair/service requests</li>
            <li>Dispatching technicians to your location</li>
            <li>Processing invoices and payments securely</li>
            <li>Providing service history and warranty support</li>
            <li>Sending updates, offers, or reminders (with your consent)</li>
            <li>Improving our services and website performance</li>
            <li>Complying with legal and regulatory requirements</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Protect Your Information</h2>
          <p className="text-gray-700 mb-4">
            We take strong security measures to protect your information from misuse or unauthorized access:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>SSL Encryption for online interactions</li>
            <li>Secure Payment Gateways (we never store your payment details)</li>
            <li>Restricted Access – only authorized staff handle sensitive information</li>
            <li>Data Security Audits to maintain compliance and system integrity</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights & Choices</h2>
          <p className="text-gray-700 mb-4">
            As a customer, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Request access to the information we hold about you</li>
            <li>Ask for corrections or updates to your data</li>
            <li>Request deletion of your data (subject to legal obligations)</li>
            <li>Opt out of promotional communications at any time</li>
            <li>Raise privacy-related concerns with us directly</li>
          </ul>
          <p className="text-gray-700">
            We aim to address all verified requests within 30 business days.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your data. Your information may be shared only with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Verified service technicians (for service visits)</li>
            <li>Payment processors (for secure billing)</li>
            <li>Courier/logistics partners (if parts or replacements are shipped)</li>
            <li>Authorities if legally required</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect new practices, technology, or regulations. The latest version will always be available on our website with the revised "Last Updated" date.
          </p>
        </motion.div>

        <motion.div variants={item} className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            For privacy-related queries, complaints, or data requests, please contact:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Kavita Coolers</h3>
                <p className="text-gray-700">
                  No:505/B23, Asirvatham Nagar,<br />
                  MS Road, Vetturnimadam<br />
                  Nagercoil, Kanniyakumari<br />
                  Tamil Nadu - 629001
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <a href="tel:+919791253244" className="text-blue-600 hover:underline">+91 97912 53244</a>
            </div>
            
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <a href="mailto:contact@kavithacoolers.shop" className="text-blue-600 hover:underline">contact@kavithacoolers.shop</a>
            </div>
            
            <div className="pt-2">
              <p className="text-sm text-gray-500">Last Updated: August 2025</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
