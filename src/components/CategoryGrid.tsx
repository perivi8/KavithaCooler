import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Import category images
import refrigeratorImage from '@/assets/refrigerator-category.jpg';
import tvImage from '@/assets/tv-category.jpg';
import washingMachineImage from '@/assets/washing-machine-category.jpg';
import fanImage from '@/assets/fan-category.jpg';

const CategoryGrid = () => {
  const categories = [
    {
      id: 'refrigerator',
      name: 'Refrigerator',
      description: 'Energy efficient cooling solutions',
      image: refrigeratorImage,
      itemCount: '150+ Models',
      href: '/shop/refrigerator',
    },
    {
      id: 'ac',
      name: 'Air Conditioner',
      description: 'Smart cooling for every room',
      image: '/lg.jpg',
      itemCount: '120+ Models',
      href: '/shop/ac',
    },
    {
      id: 'tv',
      name: 'Television',
      description: 'Smart TVs with latest technology',
      image: tvImage,
      itemCount: '200+ Models',
      href: '/shop/tv',
    },
    {
      id: 'washing-machine',
      name: 'Washing Machine',
      description: 'Efficient laundry solutions',
      image: washingMachineImage,
      itemCount: '80+ Models',
      href: '/shop/washing-machine',
    },
    {
      id: 'fan',
      name: 'Fan',
      description: 'Stylish and energy efficient',
      image: fanImage,
      itemCount: '100+ Models',
      href: '/shop/fan',
    },
    {
      id: 'water-heater',
      name: 'Water Heater',
      description: 'Instant and storage heaters',
      image: '/crompton wh.jpg',
      itemCount: '60+ Models',
      href: '/shop/water-heater',
    },
    {
      id: 'air-cooler',
      name: 'Air Cooler',
      description: 'Eco-friendly cooling solutions',
      image: '/voltas air.jpg',
      itemCount: '40+ Models',
      href: '/shop/air-cooler',
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-secondary mb-4">
            Shop by Category
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our comprehensive range of home appliances from trusted brands. 
            Find the perfect solution for every room in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Item count badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-secondary">{category.itemCount}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-item-title text-secondary group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-small mt-1">
                      {category.description}
                    </p>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary hover:text-white"
                  >
                    <Link to={category.href}>
                      <span>Shop Now</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/shop">
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;