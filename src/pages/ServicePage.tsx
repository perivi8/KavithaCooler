import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ServicePage = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get('brand');
  const category = searchParams.get('category');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    appliance: '',
    issue: '',
    preferredDate: '',
    preferredTime: ''
  });

  useEffect(() => {
    if (brand) {
      setFormData(prev => ({ ...prev, appliance: brand }));
    }
    if (category) {
      setFormData(prev => ({ ...prev, appliance: category }));
    }
  }, [brand, category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Service request submitted successfully! We will contact you within 24 hours.');
    console.log('Service request:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="container-main text-center">
          <h1 className="text-4xl font-bold mb-4">Book Service</h1>
          <p className="text-xl opacity-90">
            Professional repair and maintenance services for your home appliances
          </p>
          {brand && (
            <p className="mt-2 text-lg">
              Service for: <span className="font-semibold capitalize">{brand.replace('-', ' ')}</span>
            </p>
          )}
          {category && (
            <p className="mt-2 text-lg">
              Category: <span className="font-semibold capitalize">{category.replace('-', ' ')}</span>
            </p>
          )}
        </div>
      </section>

      <div className="container-main py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Service Request Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Address *</label>
                  <Textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your complete address"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Appliance/Brand *</label>
                  <Input
                    name="appliance"
                    value={formData.appliance}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., LG Washing Machine, Samsung AC"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Issue Description *</label>
                  <Textarea
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe the problem with your appliance"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <Input
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time</label>
                    <Input
                      name="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Service Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">service@kavitacoolers.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">123 Service Center Road, City, State - 123456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Service Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Why Choose Our Service?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Expert certified technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Genuine spare parts only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>90-day service warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Same-day service available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Transparent pricing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
