import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle, Search, Phone, Mail } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What brands do you service?",
          answer: "We are authorized service partners for major brands including Samsung, LG, Whirlpool, Godrej, Panasonic, Bosch, Siemens, Liebherr, and V-Guard. We service all types of home appliances from these brands."
        },
        {
          question: "Do you provide home service?",
          answer: "Yes, we provide doorstep service for most appliances. Our technicians will visit your home at your convenient time for diagnosis, repair, and maintenance services."
        },
        {
          question: "What are your service charges?",
          answer: "Service charges vary based on the type of appliance and service required. In-warranty services are free, while out-of-warranty services have nominal charges. We provide transparent pricing before starting any work."
        },
        {
          question: "How can I track my service request?",
          answer: "You can track your service request using the service ID provided at the time of booking. Visit our 'Track Service' page and enter your service ID to get real-time updates."
        }
      ]
    },
    {
      category: "Booking & Scheduling",
      questions: [
        {
          question: "How do I book a service?",
          answer: "You can book a service through our website by filling out the service booking form, calling our helpline, or visiting our service center. We'll confirm your appointment within 2 hours."
        },
        {
          question: "What are your service hours?",
          answer: "Our service hours are Monday to Saturday, 9:00 AM to 8:00 PM. We also offer emergency services on Sundays for critical appliances at premium charges."
        },
        {
          question: "Can I reschedule my appointment?",
          answer: "Yes, you can reschedule your appointment by calling our support team at least 4 hours before the scheduled time. We'll accommodate your request based on technician availability."
        },
        {
          question: "Do you provide same-day service?",
          answer: "Yes, we offer same-day service for urgent repairs subject to technician availability. Emergency service charges may apply for same-day requests."
        }
      ]
    },
    {
      category: "Warranty & Repairs",
      questions: [
        {
          question: "What does your warranty cover?",
          answer: "Our warranty covers manufacturing defects, functional issues, and component failures. It includes free repairs, replacement parts, and service visits during the warranty period."
        },
        {
          question: "How long is the warranty period?",
          answer: "Warranty periods vary by product: Refrigerators (2 years + 10 years compressor), Washing Machines (2 years + 10 years motor), ACs (1 year + 5 years compressor), and other appliances typically have 1-2 years comprehensive warranty."
        },
        {
          question: "Do you use genuine spare parts?",
          answer: "Yes, we use only genuine manufacturer spare parts for all repairs. This ensures optimal performance and maintains your appliance warranty."
        },
        {
          question: "What if my appliance can't be repaired?",
          answer: "If your appliance is beyond repair and still under warranty, we'll facilitate replacement through the manufacturer. For out-of-warranty items, we'll provide honest advice on repair vs. replacement."
        }
      ]
    },
    {
      category: "Installation & Maintenance",
      questions: [
        {
          question: "Do you provide installation services?",
          answer: "Yes, we provide professional installation services for all major appliances including ACs, washing machines, refrigerators, and water heaters. Installation is often included with purchase."
        },
        {
          question: "How often should I service my appliances?",
          answer: "We recommend annual maintenance for ACs, bi-annual for refrigerators and washing machines, and quarterly cleaning for water heaters. Regular maintenance extends appliance life and maintains efficiency."
        },
        {
          question: "What's included in preventive maintenance?",
          answer: "Preventive maintenance includes cleaning, lubrication, filter replacement, performance testing, and safety checks. We also provide maintenance tips to help you care for your appliances."
        },
        {
          question: "Do you provide AMC (Annual Maintenance Contract)?",
          answer: "Yes, we offer comprehensive AMC packages that include regular maintenance visits, priority service, discounted repairs, and extended warranty benefits."
        }
      ]
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, UPI, credit/debit cards, and bank transfers. For online bookings, you can pay through our secure payment gateway."
        },
        {
          question: "Do I need to pay in advance?",
          answer: "No advance payment is required for service bookings. You pay only after the service is completed and you're satisfied with the work."
        },
        {
          question: "Are there any hidden charges?",
          answer: "No, we believe in transparent pricing. All charges including service fees, parts cost, and taxes are clearly mentioned in the estimate before starting work."
        },
        {
          question: "Do you provide service estimates?",
          answer: "Yes, we provide detailed estimates before starting any paid service. The estimate includes diagnosis findings, required parts, labor charges, and total cost."
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, warranty, and support.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{category.category}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* No Results */}
        {searchTerm && filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-12 text-center"
          >
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any FAQs matching your search. Try different keywords or contact our support team.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mt-12"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
            <p className="text-orange-100">Our support team is here to help you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-orange-100 mb-2">Customer Support</p>
              <a href="tel:+919876543210" className="text-xl font-bold hover:text-orange-200 transition-colors">
                +91 98765 43210
              </a>
              <p className="text-sm text-orange-200 mt-1">Mon-Sat: 9:00 AM - 8:00 PM</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-orange-100 mb-2">Support Team</p>
              <a href="mailto:support@kavithacoolers.shop" className="text-xl font-bold hover:text-orange-200 transition-colors">
                support@kavithacoolers.shop
              </a>
              <p className="text-sm text-orange-200 mt-1">We'll respond within 24 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <a
            href="/services/book"
            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
              <HelpCircle className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Book a Service</h3>
            <p className="text-sm text-gray-600">Schedule professional service for your appliances</p>
          </a>
          <a
            href="/track-service"
            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
              <Search className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Service</h3>
            <p className="text-sm text-gray-600">Check the status of your service request</p>
          </a>
          <a
            href="/policies/warranty"
            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
              <HelpCircle className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Warranty Info</h3>
            <p className="text-sm text-gray-600">Learn about our warranty policies</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
