import { motion } from "framer-motion";
import { RotateCcw, Wrench, Clock, CheckCircle, AlertTriangle, Phone, Mail, Package } from "lucide-react";
import { useState } from "react";

const ReturnsRepairs = () => {
  const [activeTab, setActiveTab] = useState<'returns' | 'repairs'>('returns');

  const returnPolicy = [
    {
      period: "7 Days",
      category: "Small Appliances",
      items: ["Microwave Ovens", "Mixer Grinders", "Toasters", "Electric Kettles"],
      conditions: ["Unopened packaging", "All accessories included", "Original receipt required"]
    },
    {
      period: "15 Days",
      category: "Major Appliances",
      items: ["Refrigerators", "Washing Machines", "Air Conditioners", "Water Heaters"],
      conditions: ["Installation not completed", "Product not used", "Original packaging preferred"]
    }
  ];

  const repairServices = [
    {
      type: "In-Warranty Repairs",
      description: "Free repairs for manufacturing defects within warranty period",
      turnaround: "2-5 business days",
      cost: "Free",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      type: "Out-of-Warranty Repairs",
      description: "Professional repairs with genuine parts and service guarantee",
      turnaround: "3-7 business days",
      cost: "Chargeable",
      icon: Wrench,
      color: "text-blue-500"
    },
    {
      type: "Emergency Repairs",
      description: "Same-day or next-day service for critical appliances",
      turnaround: "Same day",
      cost: "Premium charges",
      icon: AlertTriangle,
      color: "text-orange-500"
    }
  ];

  const returnProcess = [
    { step: 1, title: "Contact Us", description: "Call our support team within the return period" },
    { step: 2, title: "Approval", description: "We'll verify eligibility and approve your return request" },
    { step: 3, title: "Pickup", description: "Our team will schedule a pickup from your location" },
    { step: 4, title: "Inspection", description: "Product will be inspected for return conditions" },
    { step: 5, title: "Refund", description: "Refund will be processed within 7-10 business days" }
  ];

  const repairProcess = [
    { step: 1, title: "Diagnosis", description: "Free diagnosis to identify the issue" },
    { step: 2, title: "Estimate", description: "Detailed cost estimate for repairs" },
    { step: 3, title: "Approval", description: "Your approval before proceeding with repairs" },
    { step: 4, title: "Repair", description: "Professional repair with genuine parts" },
    { step: 5, title: "Testing", description: "Quality testing before delivery" }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Repairs</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Easy returns and professional repair services to ensure your complete satisfaction with our products.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('returns')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'returns'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <RotateCcw className="w-5 h-5 inline-block mr-2" />
              Returns Policy
            </button>
            <button
              onClick={() => setActiveTab('repairs')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'repairs'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <Wrench className="w-5 h-5 inline-block mr-2" />
              Repair Services
            </button>
          </div>
        </motion.div>

        {/* Returns Content */}
        {activeTab === 'returns' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Return Policy */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Policy Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {returnPolicy.map((policy, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{policy.period}</h3>
                        <p className="text-sm text-gray-600">{policy.category}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Applicable Items:</h4>
                      <ul className="space-y-1">
                        {policy.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <Package className="w-3 h-3 text-gray-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Conditions:</h4>
                      <ul className="space-y-1">
                        {policy.conditions.map((condition, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Return Process */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {returnProcess.map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-sm text-gray-600">{process.description}</p>
                    {index < returnProcess.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Return Conditions */}
            <div className="bg-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Return Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligible for Return</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Product in original condition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">All accessories and manuals included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Original packaging (preferred)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Valid purchase receipt</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Not Eligible for Return</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Products damaged by misuse</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Items beyond return period</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Products with missing accessories</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Customized or personalized items</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Repairs Content */}
        {activeTab === 'repairs' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Repair Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Repair Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {repairServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <IconComponent className={`w-8 h-8 ${service.color} mr-3`} />
                        <h3 className="text-lg font-semibold text-gray-900">{service.type}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Turnaround:</span>
                          <span className="text-sm font-medium text-gray-900">{service.turnaround}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Cost:</span>
                          <span className="text-sm font-medium text-gray-900">{service.cost}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Repair Process */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Repair Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {repairProcess.map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-sm text-gray-600">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Repair Guarantee */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Repair Guarantee</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Genuine Parts</h3>
                  <p className="text-sm text-gray-600">We use only genuine manufacturer parts for all repairs</p>
                </div>
                <div className="text-center">
                  <Wrench className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Technicians</h3>
                  <p className="text-sm text-gray-600">Certified technicians with years of experience</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Warranty</h3>
                  <p className="text-sm text-gray-600">90-day warranty on all repair work</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Need Help with Returns or Repairs?</h2>
            <p className="text-orange-100">Contact our support team for assistance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-orange-100 mb-2">Returns & Repairs Helpline</p>
              <a href="tel:+919876543210" className="text-xl font-bold hover:text-orange-200 transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-orange-100 mb-2">Support Team</p>
              <a href="mailto:support@kavithacoolers.shop" className="text-xl font-bold hover:text-orange-200 transition-colors">
                support@kavithacoolers.shop
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnsRepairs;
