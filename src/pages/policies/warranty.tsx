import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react";

const WarrantyPolicy = () => {
  const warrantyTerms = [
    {
      category: "Refrigerators",
      warranty: "2 Years Comprehensive + 10 Years Compressor",
      coverage: ["Compressor", "Cooling system", "Electrical components", "Door seals"]
    },
    {
      category: "Washing Machines",
      warranty: "2 Years Comprehensive + 10 Years Motor",
      coverage: ["Motor", "Drum", "Control panel", "Water inlet valve"]
    },
    {
      category: "Air Conditioners",
      warranty: "1 Year Comprehensive + 5 Years Compressor",
      coverage: ["Compressor", "Cooling coil", "Remote control", "Installation"]
    },
    {
      category: "Water Heaters",
      warranty: "2 Years Comprehensive + 5 Years Tank",
      coverage: ["Heating element", "Tank", "Thermostat", "Safety valve"]
    },
    {
      category: "Microwave Ovens",
      warranty: "1 Year Comprehensive + 3 Years Magnetron",
      coverage: ["Magnetron", "Control panel", "Door mechanism", "Turntable"]
    }
  ];

  const exclusions = [
    "Physical damage due to mishandling or accidents",
    "Damage caused by power surges or voltage fluctuations",
    "Normal wear and tear of consumable parts",
    "Damage due to use of non-genuine spare parts",
    "Service by unauthorized technicians",
    "Damage due to natural calamities",
    "Cosmetic damages that don't affect functionality"
  ];

  const claimProcess = [
    {
      step: 1,
      title: "Contact Support",
      description: "Call our helpline or visit our service center with your purchase receipt"
    },
    {
      step: 2,
      title: "Diagnosis",
      description: "Our technician will inspect the appliance and verify warranty coverage"
    },
    {
      step: 3,
      title: "Approval",
      description: "Once approved, we'll proceed with repair or replacement as applicable"
    },
    {
      step: 4,
      title: "Service",
      description: "Professional repair or replacement will be completed at no cost to you"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Warranty Policy</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We stand behind our products with comprehensive warranty coverage. Your satisfaction and peace of mind are our top priorities.
          </p>
        </motion.div>

        {/* Warranty Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Warranty Coverage by Product Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warrantyTerms.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.category}</h3>
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-orange-600">{item.warranty}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Covered Components:</h4>
                  <ul className="space-y-1">
                    {item.coverage.map((component, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Warranty Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Covered</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Manufacturing Defects</h3>
                  <p className="text-sm text-gray-600">Any defects in materials or workmanship</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Functional Issues</h3>
                  <p className="text-sm text-gray-600">Problems affecting normal operation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Component Failure</h3>
                  <p className="text-sm text-gray-600">Failure of covered components during warranty period</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Free Service</h3>
                  <p className="text-sm text-gray-600">No charges for labor, parts, or service visits</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Not Covered</h2>
            <div className="space-y-3">
              {exclusions.map((exclusion, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{exclusion}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Claim Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Claim Warranty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Documents</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Original purchase receipt/invoice
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Warranty card (if applicable)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Product serial number
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Standards</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-orange-500 mr-2" />
                  Response within 24 hours
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-orange-500 mr-2" />
                  On-site service within 48 hours
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-orange-500 mr-2" />
                  Genuine parts guarantee
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Need Warranty Support?</h2>
            <p className="text-orange-100">Our warranty support team is here to help you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-orange-100 mb-2">Warranty Helpline</p>
              <a href="tel:+919876543210" className="text-xl font-bold hover:text-orange-200 transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-orange-100 mb-2">Warranty Support</p>
              <a href="mailto:warranty@kavithacoolers.shop" className="text-xl font-bold hover:text-orange-200 transition-colors">
                warranty@kavithacoolers.shop
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
