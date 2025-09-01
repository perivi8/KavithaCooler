import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

// Import brand logos for proper bundling
import godrejLogo from '/godrej-logo.jpg';
import voltasLogo from '/voltas-logo.jpg';
import blueStarLogo from '/blue-star-logo.jpg';
import panasonicLogo from '/panasonic-logo.jpg';
import samsungLogo from '/samsung-logo.jpg';
import lgLogo from '/lg-logo.jpg';

const BrandCarousel = () => {
  const navigate = useNavigate();
  
  const brands = [
    { name: 'Godrej', logo: godrejLogo, description: 'Innovative and reliable home appliances for modern Indian households.' },
    { name: 'Voltas', logo: voltasLogo, description: 'Trusted cooling solutions for every Indian home.' },
    { name: 'Blue Star', logo: blueStarLogo, description: 'Premium air conditioning and refrigeration solutions.' },
    { name: 'Panasonic', logo: panasonicLogo, description: 'Japanese technology for superior home appliances.' },
    { name: 'Samsung', logo: samsungLogo, description: 'Cutting-edge electronics and home appliances.' },
    { name: 'LG', logo: lgLogo, description: "Life's good with LG's innovative home solutions." },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-main">
        <div className="text-center mb-8">
          <h2 className="text-section-title text-secondary mb-4">
            Authorized Partners
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We are proud authorized dealers and service providers for leading appliance brands, 
            ensuring genuine products and expert support.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card 
              key={brand.name} 
              className="p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden p-3">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-secondary text-xl mb-2">
                {brand.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {brand.description}
              </p>
              <div className="flex gap-2 justify-center">
                <button 
                  onClick={() => navigate(`/products?brand=${brand.name.toLowerCase().replace(' ', '-')}`)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  Shop {brand.name}
                </button>
                <button 
                  onClick={() => navigate(`/service?brand=${brand.name.toLowerCase().replace(' ', '-')}`)}
                  className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
                >
                  Book Service
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust message */}
        <div className="text-center mt-8">
          <p className="text-small">
            <span className="font-medium text-success">✓ Genuine Products</span> • 
            <span className="font-medium text-success ml-2">✓ Official Warranty</span> • 
            <span className="font-medium text-success ml-2">✓ Expert Service</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;