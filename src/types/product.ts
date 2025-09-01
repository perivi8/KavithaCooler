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
