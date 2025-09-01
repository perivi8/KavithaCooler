import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories, brands, priceRanges, energyRatings, sortOptions } from "@/data/products";
import { Variants } from "framer-motion";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, Filter, Loader2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

type FilterState = {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  energyRatings: string[];
  inStock: boolean;
};

const Shop = () => {
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 1000000],
    energyRatings: [],
    inStock: false,
  });

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.categories.length > 0) {
      params.set("categories", filters.categories.join(","));
    }
    
    if (filters.brands.length > 0) {
      params.set("brands", filters.brands.join(","));
    }
    
    if (filters.energyRatings.length > 0) {
      params.set("ratings", filters.energyRatings.join(","));
    }
    
    if (filters.inStock) {
      params.set("inStock", "true");
    }
    
    if (sortBy !== "popularity") {
      params.set("sort", sortBy);
    }
    
    setSearchParams(params, { replace: true });
    
    // Apply filters
    applyFilters();
  }, [filters, sortBy]);

  // Parse URL params on initial load
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    
    const newFilters: Partial<FilterState> = {
      categories: params.categories?.split(",") || [],
      brands: params.brands?.split(",") || [],
      energyRatings: params.ratings?.split(",") || [],
      inStock: params.inStock === "true",
    };
    
    setFilters(prev => ({
      ...prev,
      ...newFilters,
    }));
    
    if (params.sort) {
      setSortBy(params.sort);
    }
    
    // Initial filter application
    applyFilters();
  }, []);
  
  const applyFilters = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let result = [...products];
      
      // Apply category filter
      if (filters.categories.length > 0) {
        result = result.filter(product => 
          filters.categories.includes(product.category.toLowerCase())
        );
      }
      
      // Apply brand filter
      if (filters.brands.length > 0) {
        result = result.filter(product => 
          filters.brands.includes(product.brand.toLowerCase())
        );
      }
      
      // Apply price range filter
      result = result.filter(
        product => 
          product.price >= filters.priceRange[0] && 
          product.price <= filters.priceRange[1]
      );
      
      // Apply energy rating filter
      if (filters.energyRatings.length > 0) {
        result = result.filter(product => 
          product.energyRating && 
          filters.energyRatings.includes(product.energyRating.split(" ")[0])
        );
      }
      
      // Apply in-stock filter
      if (filters.inStock) {
        result = result.filter(product => product.inStock);
      }
      
      // Apply sorting
      result = sortProducts(result, sortBy);
      
      setFilteredProducts(result);
      setIsLoading(false);
    }, 500); // Simulate network delay
  };
  
  const sortProducts = (products: Product[], sortBy: string) => {
    switch (sortBy) {
      case "price-low-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].reverse(); // Just for demo
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products; // Default sorting (popularity)
    }
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };
  
  const handleBrandChange = (brandId: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brandId)
        ? prev.brands.filter(id => id !== brandId)
        : [...prev.brands, brandId]
    }));
  };
  
  const handlePriceRangeChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [value[0], value[1]]
    }));
  };
  
  const handleEnergyRatingChange = (ratingId: string) => {
    setFilters(prev => ({
      ...prev,
      energyRatings: prev.energyRatings.includes(ratingId)
        ? prev.energyRatings.filter((r: string) => r !== ratingId)
        : [...prev.energyRatings, ratingId]
    }));
  };
  
  const handleInStockChange = (checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      inStock: checked
    }));
  };
  
  const clearAllFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 1000000],
      energyRatings: [],
      inStock: false,
    });
    setSortBy("popularity");
  };
  
  const renderFilters = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category: { id: string; name: string }) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleCategoryChange(category.id);
                  } else {
                    setFilters(prev => ({
                      ...prev,
                      categories: prev.categories.filter(id => id !== category.id)
                    }));
                  }
                }}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm font-medium leading-none">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-medium mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand: { id: string; name: string }) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand.id}`}
                checked={filters.brands.includes(brand.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleBrandChange(brand.id);
                  } else {
                    setFilters(prev => ({
                      ...prev,
                      brands: prev.brands.filter(id => id !== brand.id)
                    }));
                  }
                }}
              />
              <Label htmlFor={`brand-${brand.id}`} className="text-sm font-medium leading-none">
                {brand.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            min={0}
            max={100000}
            step={1000}
            onValueChange={handlePriceRangeChange}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-slate-600">
            <span>₹{filters.priceRange[0].toLocaleString()}</span>
            <span>₹{filters.priceRange[1].toLocaleString()}+</span>
          </div>
        </div>
      </div>

      {/* Energy Rating */}
      <div>
        <h3 className="font-medium mb-3">Energy Rating</h3>
        <div className="space-y-2">
          {energyRatings.map((rating: { id: string; name: string }) => (
            <div key={`energy-rating-${rating.id}`} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating.id}`}
                checked={filters.energyRatings.includes(rating.id)}
                onCheckedChange={(checked) => {
                  handleEnergyRatingChange(rating.id);
                }}
              />
              <Label htmlFor={`rating-${rating.id}`} className="text-sm font-medium leading-none flex items-center">
                {rating.name} Star
                <div className="flex ml-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < parseInt(rating.id) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
                    />
                  ))}
                </div>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* In Stock Only */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="in-stock"
          checked={filters.inStock}
          onCheckedChange={(checked) => handleInStockChange(checked as boolean)}
        />
        <Label htmlFor="in-stock" className="text-sm font-medium leading-none">
          In Stock Only
        </Label>
      </div>
    </div>
  );

  // Animation variants for staggered grid items
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as any, // Type assertion for ease array
      },
    },
  };

  // Format product specs for the card
  const formatProductSpecs = (product: Product) => {
    const specs = [];
    if (product.capacity) {
      specs.push(`${product.category === 'AC' ? 'Cooling Capacity' : 'Capacity'}: ${product.capacity}`);
    }
    if (product.energyRating) {
      specs.push(`Energy Rating: ${product.energyRating}`);
    }
    return specs;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8">
        <div className="mb-8">
          <h1 className="font-poppins text-3xl font-bold text-slate-900">Shop Appliances</h1>
          <p className="mt-2 text-sm text-slate-600">
            Explore our wide range of home appliances from trusted brands.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Mobile Filters */}
          <div className="md:hidden">
            <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader className="mb-6">
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                {renderFilters()}
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filters */}
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-poppins text-lg font-semibold text-slate-900">Filters</h2>
                {(filters.categories.length > 0 || 
                  filters.brands.length > 0 || 
                  filters.energyRatings.length > 0 || 
                  filters.inStock) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAllFilters}
                    className="h-auto p-0 text-sm text-primary hover:bg-transparent hover:underline"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              {renderFilters()}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Top Controls */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-slate-600">
                Showing <span className="font-medium">1-{filteredProducts.length}</span> of{' '}
                <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Label htmlFor="sort" className="whitespace-nowrap text-sm font-medium text-slate-700">
                  Sort by:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Loading State */}
            {isLoading ? (
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(8)].map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
                <AnimatePresence>
                  <motion.div 
                    className="w-full"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {filteredProducts.map((product) => (
                        <motion.div key={product.id} variants={item} className="w-full">
                          <ProductCard
                            id={product.id}
                            title={product.title}
                            brand={product.brand}
                            rating={product.reviewsCount > 0 ? { 
                              value: product.rating, 
                              count: product.reviewsCount 
                            } : undefined}
                            price={product.price}
                            mrp={product.mrp}
                            discountPct={product.discountPct}
                            imageUrl={product.image}
                            inStock={product.inStock}
                            specs={formatProductSpecs(product)}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-white p-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins mt-4 text-lg font-semibold text-slate-900">No products found</h3>
                <p className="mt-2 text-sm text-slate-500">Try adjusting your search or filter to find what you're looking for.</p>
                <Button variant="outline" className="mt-6" onClick={clearAllFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled={true}>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="font-medium">
                    1
                  </Button>
                  <Button variant="ghost" size="sm">
                    2
                  </Button>
                  <Button variant="ghost" size="sm">
                    3
                  </Button>
                  <span className="px-2 text-sm text-slate-500">...</span>
                  <Button variant="ghost" size="sm">
                    10
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
