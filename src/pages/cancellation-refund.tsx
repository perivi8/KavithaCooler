import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const CancellationRefund = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation & Refund Policy</h1>
            <p className="text-xl opacity-90">Simple, Fair, and Transparent</p>
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
          <p className="text-gray-700">
            At Kavita Coolers (Kavita Cool Home), customer satisfaction is our top priority. While we strive to complete every repair and service request with care and professionalism, we understand that cancellations or disputes may arise. This policy explains how cancellations, refunds, and service-related issues are handled.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Cancellations</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Service Appointments:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Appointments can be cancelled or rescheduled up to 4 hours before the scheduled visit at no extra charge.</li>
            <li>Cancellations made after the technician has been dispatched may incur a minimum visit/inspection charge.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Spare Parts / Accessory Orders:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Orders may be cancelled within 2 hours of placement, provided the part has not yet been packed or shipped.</li>
            <li>Once dispatched, cancellations are no longer possible.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Eligibility</h2>
          <p className="text-gray-700 mb-4">Refunds may be considered in the following cases:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Duplicate booking or payment errors</li>
            <li>Overcharging or billing discrepancies</li>
            <li>Non-availability of a part or service after payment</li>
            <li>Genuine dissatisfaction with service (evaluated case by case)</li>
          </ul>
          <p className="text-gray-700 mb-2 font-medium">Refunds are not applicable for:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Services already completed to industry standards</li>
            <li>Delays caused by factors outside our control (e.g., traffic, weather, courier issues)</li>
            <li>Misuse, negligence, or re-damage of the appliance after service</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Parts Warranty & Replacement</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Spare parts purchased via Kavita Coolers may carry a limited warranty, depending on the manufacturer.</li>
            <li>If a part is found defective within the warranty period, it will be replaced or repaired free of cost, subject to verification.</li>
            <li>Warranty does not apply to damage caused by misuse, incorrect installation by third parties, or tampering.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Process</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Once a refund is approved, it will be initiated within 3–5 business days.</li>
            <li>Refunds are processed through the original payment method (UPI, bank transfer, card, etc.).</li>
            <li>Depending on the payment provider, refunds may take 5–10 business days to reflect in your account.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Help?</h2>
          <p className="text-gray-700 mb-6">
            For cancellations, refunds, or disputes, please contact:
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

            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Monday to Saturday, 10 AM – 7 PM IST</span>
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

export default CancellationRefund;
