import { motion } from "framer-motion";
import { Search, Clock, CheckCircle, Wrench, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const TrackService = () => {
  const [trackingId, setTrackingId] = useState("");
  const [serviceData, setServiceData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setServiceData({
        id: trackingId,
        status: "in-progress",
        appliance: "Refrigerator",
        brand: "Samsung",
        model: "RT28K3022S8",
        issue: "Not cooling properly",
        technician: "Raj Kumar",
        phone: "+91 98765 43210",
        scheduledDate: "2024-01-15",
        scheduledTime: "2:00 PM - 5:00 PM",
        address: "123 Main Street, Nagercoil",
        timeline: [
          { status: "Service Booked", date: "2024-01-12", time: "10:30 AM", completed: true },
          { status: "Technician Assigned", date: "2024-01-13", time: "9:15 AM", completed: true },
          { status: "Parts Ordered", date: "2024-01-14", time: "11:00 AM", completed: true },
          { status: "Service in Progress", date: "2024-01-15", time: "2:00 PM", completed: false },
          { status: "Service Completed", date: "", time: "", completed: false },
        ]
      });
      setLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-100";
      case "in-progress": return "text-orange-600 bg-orange-100";
      case "pending": return "text-gray-600 bg-gray-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your service request ID to track the status of your appliance service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <form onSubmit={handleTrack} className="flex gap-4">
            <div className="flex-1">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Search className="w-4 h-4 mr-2 text-orange-500" />
                Service Request ID
              </label>
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your service request ID (e.g., SRV123456)"
              />
            </div>
            <div className="flex items-end">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {loading ? "Tracking..." : "Track Service"}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {serviceData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Service Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Service Details</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(serviceData.status)}`}>
                  {serviceData.status === "in-progress" ? "In Progress" : serviceData.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Appliance</h3>
                    <p className="text-lg font-semibold text-gray-900">{serviceData.appliance}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Brand & Model</h3>
                    <p className="text-lg font-semibold text-gray-900">{serviceData.brand} {serviceData.model}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Issue</h3>
                    <p className="text-gray-700">{serviceData.issue}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Technician</h3>
                    <p className="text-lg font-semibold text-gray-900">{serviceData.technician}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Contact</h3>
                    <p className="text-gray-700 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-orange-500" />
                      {serviceData.phone}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Scheduled</h3>
                    <p className="text-gray-700">{serviceData.scheduledDate} at {serviceData.scheduledTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Service Address</h3>
                <p className="text-gray-700 flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-orange-500 mt-0.5" />
                  {serviceData.address}
                </p>
              </div>
            </div>

            {/* Service Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Timeline</h2>
              
              <div className="space-y-6">
                {serviceData.timeline.map((step: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {step.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : index === serviceData.timeline.findIndex((s: any) => !s.completed) ? (
                        <Clock className="w-6 h-6 text-orange-500" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.status}
                        </h3>
                        {step.date && (
                          <span className="text-sm text-gray-500">
                            {step.date} {step.time && `at ${step.time}`}
                          </span>
                        )}
                      </div>
                      {index < serviceData.timeline.length - 1 && (
                        <div className="mt-2 w-px h-6 bg-gray-200 ml-3" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Wrench className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about your service or need to reschedule, contact our support team.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:+919876543210"
                      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Support
                    </a>
                    <a
                      href="mailto:support@kavithacoolers.shop"
                      className="inline-flex items-center px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      Email Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrackService;
