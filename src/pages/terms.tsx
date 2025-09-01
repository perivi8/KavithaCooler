import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl opacity-90">Last Updated: August 2025</p>
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
            Welcome to Kavita Coolers (Kavita Cool Home). By accessing our website, booking a service, or engaging with our customer support team, you agree to the following Terms & Conditions. These terms govern all repair services, inquiries, and interactions with Kavita Coolers.
          </p>
          <p className="text-gray-700 mb-8 font-medium">
            If you do not agree with these terms, we kindly request you to discontinue the use of our services.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. General Use of Services</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You confirm that you are at least 18 years old, or using our services under the supervision of a legal guardian.</li>
            <li>You agree to provide accurate information when booking repair or service appointments.</li>
            <li>Misuse, fraudulent activity, or abusive behavior toward our staff or systems may result in suspension of services.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Requests & Bookings</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Service appointments are scheduled based on availability of technicians and customer location.</li>
            <li>Customers must provide correct appliance details (brand, type, issue) to ensure proper diagnosis and service.</li>
            <li>Emergency or same-day service is subject to technician availability and may incur additional charges.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Pricing & Payments</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Service charges vary depending on appliance type, repair complexity, and spare parts used.</li>
            <li>All charges will be communicated upfront before service is confirmed.</li>
            <li>Payments can be made via cash, UPI, net banking, or cards through secure payment methods.</li>
            <li>Kavita Coolers does not store your financial details; all transactions are processed securely by third-party payment providers.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Spare Parts & Warranty</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Only genuine or compatible spare parts are used during repairs.</li>
            <li>Warranty terms (if applicable) will be shared at the time of service.</li>
            <li>Kavita Coolers is not responsible for failures caused by customer misuse, lack of maintenance, or previously unauthorized repairs.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cancellations & Rescheduling</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Appointments can be cancelled or rescheduled at least 4 hours before the scheduled time without penalty.</li>
            <li>Cancellations made after technician dispatch may incur a visit charge.</li>
            <li>For detailed terms, refer to our Cancellation & Refund Policy.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">By using our services, you agree not to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide false or incomplete information about appliances or service requirements</li>
            <li>Misuse technician access or engage in unsafe behavior during service visits</li>
            <li>Attempt to bypass official booking/payment channels</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on our website, including logos, service descriptions, and marketing materials, are the intellectual property of Kavita Coolers. Unauthorized reproduction or commercial use is strictly prohibited.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">Kavita Coolers shall not be liable for:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Indirect or consequential damages caused during or after service</li>
            <li>Appliance failures due to pre-existing issues or external factors</li>
            <li>Delays caused by third-party logistics, supplier shortages, or force majeure events</li>
          </ul>
          <p className="text-gray-700">Our liability is limited to the value of the service provided.</p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law & Jurisdiction</h2>
          <p className="text-gray-700">
            These Terms & Conditions are governed by the laws of India. Any disputes shall fall under the jurisdiction of courts located in Nagercoil, Tamil Nadu.
          </p>
        </motion.div>

        <motion.div variants={item} className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">10. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            For clarifications, concerns, or support, please contact:
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
              <a href="https://www.kavithacoolers.shop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.kavithacoolers.shop
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
