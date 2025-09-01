import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, SlidersHorizontal, Star, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductsList } from '@/features/products/components/ProductsList';
import { useProducts } from '@/features/products';
import { categories, brands, sortOptions, priceRanges, ratings } from '@/features/products/data/products';
import { cn } from '@/lib/utils';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  
  // Transform categories and brands to include label and value properties
  const categoryOptions = categories
    .filter(cat => cat.id !== 'all')
    .map(cat => ({
      id: cat.id,
      label: cat.name,
      value: cat.id
    }));
    
  const brandOptions = brands.map(brand => ({
    id: brand.id,
    label: brand.name,
    value: brand.id
  }));
  const [searchQuery, setSearchQuery] = useState('');
  
  const { state, dispatch } = useProducts();
  const { filteredProducts } = state;
  
  // Initialize filters from URL params
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const filters: Record<string, string[]> = {};
    
    Object.entries(params).forEach(([key, value]) => {
      if (key !== 'q' && key !== 'sort') {
        filters[key] = value.split(',');
      }
    });
    
    setActiveFilters(filters);
    setSearchQuery(params.q || '');
    
    // Apply filters from URL
    const newFilters: Record<string, any> = {};
    
    if (params.category) {
      newFilters.categories = params.category.split(',');
    }
    
    if (params.brand) {
      newFilters.brands = params.brand.split(',');
    }
    
    if (params.price) {
      const [min, max] = params.price.split('-').map(Number);
      newFilters.priceRange = [min, max];
    }
    
    if (params.rating) {
      newFilters.ratings = params.rating.split(',').map(Number);
    }
    
    if (params.inStock) {
      newFilters.inStock = params.inStock === 'true';
    }
    
    if (params.q) {
      newFilters.search = params.q;
    }
    
    dispatch({ type: 'SET_FILTERS', payload: newFilters });
    
    if (params.sort) {
      dispatch({ type: 'SET_SORT_OPTION', payload: params.sort });
    }
  }, [searchParams, dispatch]);
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    
    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    } else {
      params.delete('q');
    }
    
    setSearchParams(params);
  };
  
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    const currentValues = params.get(filterType)?.split(',') || [];
    
    if (checked) {
      // Add filter
      if (!currentValues.includes(value)) {
        params.set(filterType, [...currentValues, value].join(','));
      }
    } else {
      // Remove filter
      const newValues = currentValues.filter(v => v !== value);
      if (newValues.length > 0) {
        params.set(filterType, newValues.join(','));
      } else {
        params.delete(filterType);
      }
    }
    
    // Reset to first page when filters change
    params.delete('page');
    setSearchParams(params);
  };
  
  // Handle price range filter
  const handlePriceRangeChange = (range: string[], checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    
    if (checked) {
      params.set('price', range.join('-'));
    } else {
      params.delete('price');
    }
    
    params.delete('page');
    setSearchParams(params);
  };
  
  // Handle rating filter
  const handleRatingChange = (rating: number, checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    const currentRatings = params.get('rating')?.split(',').map(Number) || [];
    
    if (checked) {
      // Add rating
      if (!currentRatings.includes(rating)) {
        params.set('rating', [...currentRatings, rating].sort((a, b) => b - a).join(','));
      }
    } else {
      // Remove rating
      const newRatings = currentRatings.filter(r => r !== rating);
      if (newRatings.length > 0) {
        params.set('rating', newRatings.join(','));
      } else {
        params.delete('rating');
      }
    }
    
    params.delete('page');
    setSearchParams(params);
  };
  
  // Handle in-stock filter
  const handleInStockChange = (checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    
    if (checked) {
      params.set('inStock', 'true');
    } else {
      params.delete('inStock');
    }
    
    params.delete('page');
    setSearchParams(params);
  };
  
  // Handle sort change
  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (value && value !== 'featured') {
      params.set('sort', value);
    } else {
      params.delete('sort');
    }
    
    setSearchParams(params);
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };
  
  // Check if a filter is active
  const isFilterActive = (filterType: string, value: string) => {
    return activeFilters[filterType]?.includes(value) || false;
  };
  
  // Check if any filters are active
  const hasActiveFilters = Object.keys(activeFilters).length > 0;
  
  // Get active filters count
  const activeFiltersCount = Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0);
  
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <div className="lg:hidden">
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1.5 rounded bg-primary px-1.5 py-0.5 text-xs font-medium text-white">
                {activeFiltersCount}
              </span>
            )}
          </Button>

          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 flex lg:hidden">
              <div className="fixed inset-0 bg-black/25" onClick={() => setMobileFiltersOpen(false)} />
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-50"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <div className="mt-4 border-t border-gray-200">
                  <FilterSection
                    title="Categories"
                    filterType="category"
                    options={categoryOptions}
                    isFilterActive={isFilterActive}
                    onChange={handleFilterChange}
                  />
                  
                  <FilterSection
                    title="Brands"
                    filterType="brand"
                    options={brandOptions}
                    isFilterActive={isFilterActive}
                    onChange={handleFilterChange}
                  />
                  
                  <FilterSection
                    title="Price Range"
                    filterType="price"
                    options={priceRanges}
                    isFilterActive={(_, value) => {
                      const priceRange = searchParams.get('price');
                      return priceRange === value.join('-');
                    }}
                    onChange={(_, value, checked) => handlePriceRangeChange(value, checked)}
                    isPriceRange
                  />
                  
                  <FilterSection
                    title="Rating"
                    filterType="rating"
                    options={ratings}
                    isFilterActive={(_, value) => {
                      const ratings = searchParams.get('rating')?.split(',').map(Number) || [];
                      return ratings.includes(value);
                    }}
                    onChange={(_, value, checked) => handleRatingChange(Number(value), checked)}
                    isRating
                  />
                  
                  <div className="border-t border-gray-200 px-4 py-6">
                    <div className="flex items-center">
                      <Checkbox
                        id="in-stock"
                        checked={searchParams.get('inStock') === 'true'}
                        onCheckedChange={handleInStockChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="in-stock" className="ml-3 text-sm text-gray-600">
                        In Stock Only
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 px-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={clearAllFilters}
                    disabled={!hasActiveFilters}
                  >
                    Clear all filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shop</h1>
            
            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <Select
                  value={searchParams.get('sort') || 'featured'}
                  onValueChange={handleSortChange}
                >
                  <SelectTrigger className="w-[200px] rounded-md">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Desktop filters */}
              <div className="hidden lg:block">
                <div className="space-y-6 border-b border-gray-200 pb-6">
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-md"
                    />
                    <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0">
                      <Search className="h-5 w-5 text-gray-400" />
                    </Button>
                  </form>
                </div>
                
                <div className="space-y-6 pt-6">
                  <FilterSection
                    title="Categories"
                    filterType="category"
                    options={categoryOptions}
                    isFilterActive={isFilterActive}
                    onChange={handleFilterChange}
                  />
                  
                  <FilterSection
                    title="Brands"
                    filterType="brand"
                    options={brandOptions}
                    isFilterActive={isFilterActive}
                    onChange={handleFilterChange}
                  />
                  
                  <FilterSection
                    title="Price Range"
                    filterType="price"
                    options={priceRanges}
                    isFilterActive={(_, value) => {
                      const priceRange = searchParams.get('price');
                      return priceRange === value.join('-');
                    }}
                    onChange={(_, value, checked) => handlePriceRangeChange(value, checked)}
                    isPriceRange
                  />
                  
                  <FilterSection
                    title="Rating"
                    filterType="rating"
                    options={ratings}
                    isFilterActive={(_, value) => {
                      const ratings = searchParams.get('rating')?.split(',').map(Number) || [];
                      return ratings.includes(value);
                    }}
                    onChange={(_, value, checked) => handleRatingChange(Number(value), checked)}
                    isRating
                  />
                  
                  <div className="pt-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="in-stock-desktop"
                        checked={searchParams.get('inStock') === 'true'}
                        onCheckedChange={handleInStockChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="in-stock-desktop" className="ml-3 text-sm text-gray-600">
                        In Stock Only
                      </Label>
                    </div>
                  </div>
                  
                  {hasActiveFilters && (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={clearAllFilters}
                    >
                      Clear all filters
                    </Button>
                  )}
                </div>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Active filters */}
                {hasActiveFilters && (
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Filters:</span>
                    
                    {Object.entries(activeFilters).map(([filterType, values]) => {
                      if (filterType === 'price') {
                        const [min, max] = searchParams.get('price')?.split('-').map(Number) || [];
                        const priceRange = priceRanges.find(
                          range => range.value[0] === min && range.value[1] === max
                        );
                        
                        if (!priceRange) return null;
                        
                        return (
                          <FilterPill
                            key={`${filterType}-${min}-${max}`}
                            label={`Price: ${priceRange.label}`}
                            onRemove={() => {
                              const params = new URLSearchParams(searchParams);
                              params.delete('price');
                              setSearchParams(params);
                            }}
                          />
                        );
                      }
                      
                      if (filterType === 'rating') {
                        return values.map(rating => {
                          const ratingValue = Number(rating);
                          const ratingLabel = ratings.find(r => r.value === ratingValue)?.label || '';
                          
                          return (
                            <FilterPill
                              key={`${filterType}-${rating}`}
                              label={`${ratingLabel}+`}
                              onRemove={() => {
                                const ratings = searchParams.get('rating')?.split(',').map(Number) || [];
                                const newRatings = ratings.filter(r => r !== ratingValue);
                                
                                const params = new URLSearchParams(searchParams);
                                
                                if (newRatings.length > 0) {
                                  params.set('rating', newRatings.join(','));
                                } else {
                                  params.delete('rating');
                                }
                                
                                setSearchParams(params);
                              }}
                            />
                          );
                        });
                      }
                      
                      if (filterType === 'inStock') {
                        return (
                          <FilterPill
                            key="in-stock-filter"
                            label="In Stock"
                            onRemove={() => {
                              const params = new URLSearchParams(searchParams);
                              params.delete('inStock');
                              setSearchParams(params);
                            }}
                          />
                        );
                      }
                      
                      // Handle category and brand filters
                      return values.map(value => {
                        let label = '';
                        
                        if (filterType === 'category') {
                          const category = categories.find(cat => cat.id === value);
                          label = category ? category.name : value;
                        } else if (filterType === 'brand') {
                          const brand = brands.find(b => b.id === value);
                          label = brand ? brand.name : value;
                        } else {
                          label = value;
                        }
                        
                        return (
                          <FilterPill
                            key={`${filterType}-${value}`}
                            label={label}
                            onRemove={() => handleFilterChange(filterType, value, false)}
                          />
                        );
                      });
                    })}
                    
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="ml-2 text-sm text-primary hover:bg-transparent hover:text-primary/80"
                      onClick={clearAllFilters}
                    >
                      Clear all
                    </Button>
                  </div>
                )}
                
                {/* Results count */}
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{filteredProducts.length}</span> products
                  </p>
                </div>
                
                {/* Product grid */}
                <ProductsList />
                
                {/* Pagination */}
                {filteredProducts.length > 0 && (
                  <nav
                    className="mt-8 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{' '}
                        <span className="font-medium">{Math.min(12, filteredProducts.length)}</span> of{' '}
                        <span className="font-medium">{filteredProducts.length}</span> results
                      </p>
                    </div>
                    <div className="flex flex-1 justify-between sm:justify-end">
                      <Button
                        variant="outline"
                        disabled={true}
                        className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        disabled={true}
                        className="relative ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Next
                      </Button>
                    </div>
                  </nav>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// FilterSection component
function FilterSection({
  title,
  filterType,
  options,
  isFilterActive,
  onChange,
  isPriceRange = false,
  isRating = false,
}: {
  title: string;
  filterType: string;
  options: Array<{ id: string; label: string; value: any }>;
  isFilterActive: (filterType: string, value: any) => boolean;
  onChange: (filterType: string, value: any, checked: boolean) => void;
  isPriceRange?: boolean;
  isRating?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        type="button"
        className="flex w-full items-center justify-between text-sm font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4 space-y-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={`${filterType}-${option.id}`}
                checked={isPriceRange || isRating 
                  ? isFilterActive(option.id, option.value)
                  : isFilterActive(filterType, option.id)
                }
                onCheckedChange={(checked) => {
                  if (isPriceRange || isRating) {
                    onChange(filterType, option.value, checked as boolean);
                  } else {
                    onChange(filterType, option.id, checked as boolean);
                  }
                }}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label
                htmlFor={`${filterType}-${option.id}`}
                className="ml-3 text-sm text-gray-600"
              >
                {isRating ? (
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-4 w-4",
                          star <= option.value
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        )}
                        fill="currentColor"
                      />
                    ))}
                    <span className="ml-1">&amp; Up</span>
                  </div>
                ) : (
                  option.label
                )}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// FilterPill component
function FilterPill({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="ml-1.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500"
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}
