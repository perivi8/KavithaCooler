export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  mrp: number;
  discountPct: number;
  rating: number;
  reviewsCount: number;
  image: string;
  inStock: boolean;
  capacity?: string;
  energyRating?: string;
  specs?: Record<string, string>;
  description?: string;
  images?: string[];
  features?: string[];
  tags?: string[];
}

export interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
}

export interface FilterSection {
  id: string;
  name: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range';
}

export interface ProductFilters {
  categories?: string[];
  brands?: string[];
  priceRange?: [number, number];
  ratings?: number[];
  inStock?: boolean;
  search?: string;
}

export interface ProductSortOption {
  id: string;
  label: string;
  value: string;
}
