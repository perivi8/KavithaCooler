import { Card } from '@/components/ui/card';

const ServiceCategories = () => {
  const serviceCategories = [
    {
      name: 'Washing Machine',
      description: 'Expert repair for all types of washing machines.',
      image: '/ifb washing.jpg',
      services: ['Repair', 'Maintenance', 'Installation']
    },
    {
      name: 'AC Service',
      description: 'Professional AC installation, maintenance, and repair services.',
      image: '/voltas ac.jpg',
      services: ['Installation', 'Maintenance', 'Repair']
    },
    {
      name: 'Refrigerator',
      description: 'Complete refrigerator repair solutions.',
      image: '/samsung refrig.jpg',
      services: ['Repair', 'Gas Charging', 'Maintenance']
    },
    {
      name: 'Television',
      description: 'TV repair and maintenance services.',
      image: '/sony tv.jpg',
      services: ['Repair', 'Screen Fix', 'Setup']
    }
  ];

  const handleBookService = (category: string) => {
    window.location.href = `/service?category=${category.toLowerCase().replace(' ', '-')}`;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-8">
          <h2 className="text-section-title text-secondary mb-4">
            Our Service Categories
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Professional repairs and maintenance for all major home appliances
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <Card 
              key={category.name} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={category.image} 
                  alt={`${category.name} service`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onLoad={() => console.log(`Image loaded: ${category.image}`)}
                  onError={(e) => {
                    console.error(`Failed to load image: ${category.image}`);
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-secondary text-lg mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {category.services.map((service) => (
                    <span 
                      key={service}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => handleBookService(category.name)}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Book Service
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Promise */}
        <div className="text-center mt-8">
          <p className="text-small">
            <span className="font-medium text-success">✓ Expert Technicians</span> • 
            <span className="font-medium text-success ml-2">✓ Genuine Parts</span> • 
            <span className="font-medium text-success ml-2">✓ Service Warranty</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
