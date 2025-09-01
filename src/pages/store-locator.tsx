import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Car, Star } from "lucide-react";

const StoreLocator = () => {

  const stores = [
    {
      id: 1,
      name: "Kavita Cooler - Main Store",
      address: "No:505/B23, Asirvatham Nagar, MS Road, Vetturnimadam, Nagercoil, Kanniyakumari, Tamil Nadu - 629001",
      phone: "+91 98765 43210",
      email: "nagercoil@kavithacoolers.shop",
      hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
      services: ["Sales", "Service", "Spare Parts", "Installation"],
      rating: 4.8,
      reviews: 156,
      coordinates: { lat: 8.1778, lng: 77.4364 },
      features: ["Parking Available", "AC Showroom", "Expert Consultation"]
    },
    {
      id: 2,
      name: "Kavita Cooler - Service Center",
      address: "Shop No. 15, Commercial Complex, Kottar, Nagercoil, Tamil Nadu - 629002",
      phone: "+91 98765 43211",
      email: "service@kavithacoolers.shop",
      hours: "Mon-Sat: 8:00 AM - 7:00 PM, Sun: Closed",
      services: ["Service", "Repairs", "Spare Parts", "Warranty Claims"],
      rating: 4.6,
      reviews: 89,
      coordinates: { lat: 8.1889, lng: 77.4267 },
      features: ["Quick Service", "Genuine Parts", "Trained Technicians"]
    },
    {
      id: 3,
      name: "Kavita Cooler - Express Service",
      address: "Near Bus Stand, Thuckalay, Kanniyakumari, Tamil Nadu - 629175",
      phone: "+91 98765 43212",
      email: "thuckalay@kavithacoolers.shop",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM",
      services: ["Emergency Service", "Installation", "Basic Repairs"],
      rating: 4.5,
      reviews: 67,
      coordinates: { lat: 8.3167, lng: 77.3167 },
      features: ["Same Day Service", "Emergency Support", "Mobile Service"]
    }
  ];

  const getDirections = (store: typeof stores[0]) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <MapPin className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Store Locator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find our authorized stores and service centers near you. Visit us for sales, service, and support.
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 opacity-50"></div>
            <div className="relative z-10 text-center">
              <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">Map integration coming soon</p>
              <p className="text-sm text-gray-500">
                For now, use the store listings below to find locations and get directions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Store Listings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
          
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Store Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h3>
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium text-gray-900">{store.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({store.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{store.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <a 
                          href={`tel:${store.phone}`}
                          className="text-gray-700 hover:text-orange-500 transition-colors"
                        >
                          {store.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <p className="text-gray-700">{store.hours}</p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Services Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-3 lg:w-48">
                    <motion.button
                      onClick={() => getDirections(store)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </motion.button>
                    <a
                      href={`tel:${store.phone}`}
                      className="flex items-center justify-center px-4 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Store
                    </a>
                    <a
                      href={`mailto:${store.email}`}
                      className="flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Email Store
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Nagercoil Region</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Nagercoil City</li>
                <li>• Vetturnimadam</li>
                <li>• Kottar</li>
                <li>• Asirvatham Nagar</li>
                <li>• Vadasery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kanniyakumari District</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Thuckalay</li>
                <li>• Kanniyakumari</li>
                <li>• Colachel</li>
                <li>• Padmanabhapuram</li>
                <li>• Marthandam</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Extended Areas</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Tirunelveli</li>
                <li>• Tenkasi</li>
                <li>• Radhapuram</li>
                <li>• Kalkulam</li>
                <li>• Vilavancode</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact for New Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mt-8"
        >
          <div className="text-center">
            <Car className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Don't See Your Location?</h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              We're expanding our service network. Contact us to check if we can provide service in your area or to request a new service location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
              <a
                href="mailto:expansion@kavithacoolers.shop"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
              >
                Request Service Area
              </a>
            </div>
          </div>
        </motion.div>

        {/* Store Hours Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-blue-50 rounded-2xl p-6 mt-8"
        >
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Store Hours Notice</h3>
              <p className="text-gray-600 text-sm mb-2">
                Store hours may vary during festivals and holidays. We recommend calling ahead to confirm availability.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Emergency Service:</strong> Available 24/7 for critical appliances with premium charges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoreLocator;
