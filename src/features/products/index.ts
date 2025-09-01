// Types
export type { Product, ProductFilters, ProductSortOption, FilterOption, FilterSection } from './types';

// Context
import { ProductsProvider, useProducts } from './context/ProductsContext';

// Components
import { ProductCard, ProductCardSkeleton } from './components/ProductCard';

// Data
export { default as products } from './data/products';
export { categories, brands, sortOptions, priceRanges, ratings } from './data/products';

// Hooks
export { useProducts };

export {
  ProductsProvider,
  ProductCard,
  ProductCardSkeleton,
};
