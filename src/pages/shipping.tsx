import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ShippingPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-xl opacity-90">Timely, Safe, and Reliable Delivery of Spare Parts & Accessories</p>
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
            At Kavita Coolers (Kavita Cool Home), our primary focus is on providing quality repair and maintenance services. For customers who require spare parts, accessories, or replacement items, we ensure safe, reliable, and on-time delivery through trusted logistics partners.
          </p>
          <p className="text-gray-700">
            This policy explains how we handle processing, shipping, and delivery for such orders.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Processing Time</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Orders for spare parts or accessories are processed within 2–4 business days of payment confirmation.</li>
            <li>Orders placed on weekends or public holidays will be processed the next working day.</li>
            <li>In case of out-of-stock parts, customers will be notified with an estimated availability date or offered an alternative solution.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Destinations & Timelines</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Domestic (India)</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Metro Cities: 3–6 business days after dispatch</li>
            <li>Non-Metro & Rural Areas: 5–10 business days after dispatch</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">International</h3>
          <p className="text-gray-700">
            At present, we primarily serve the domestic market. International shipping (if applicable) will be coordinated separately with timelines communicated during order confirmation.
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Charges</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Charges are calculated based on order value, weight, and delivery location.</li>
            <li>All applicable shipping costs will be displayed during checkout or communicated prior to order confirmation.</li>
            <li>Free shipping offers may apply on select promotions or minimum order values.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Packaging & Handling</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All parts are packed in tamper-proof, protective packaging to ensure safe transit.</li>
            <li>Fragile parts (like coils or electronics) receive extra cushioning and labeling.</li>
            <li>Customers are advised to check the packaging upon delivery and report any visible damage immediately.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tracking Your Order</h2>
          <p className="text-gray-700 mb-4">Once your order is dispatched, you will receive:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>A tracking ID (via SMS, email, or WhatsApp)</li>
            <li>A link to monitor the shipment's status in real-time</li>
          </ul>
          <p className="text-gray-700">Please allow 24–48 hours for tracking information to update after dispatch.</p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Delays & Exceptions</h2>
          <p className="text-gray-700 mb-4">While we strive for timely delivery, delays may occur due to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Unforeseen courier/logistics disruptions</li>
            <li>Public holidays or regional lockdowns</li>
            <li>Natural calamities or force majeure events</li>
          </ul>
          <p className="text-gray-700">In such cases, our team will proactively update you with revised timelines.</p>
        </motion.div>

        <motion.div variants={item} className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Help With Shipping?</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about your shipment or need assistance:
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

export default ShippingPolicy;
