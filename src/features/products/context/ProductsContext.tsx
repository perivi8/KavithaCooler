import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, ProductFilters } from '../types';
import productsData from '../data/products';

type ProductsState = {
  products: Product[];
  filteredProducts: Product[];
  filters: ProductFilters;
  sortOption: string;
  isLoading: boolean;
  error: string | null;
};

type ProductsAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_FILTERS'; payload: ProductFilters }
  | { type: 'SET_SORT_OPTION'; payload: string }
  | { type: 'APPLY_FILTERS' }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filters: {},
  sortOption: 'featured',
  isLoading: false,
  error: null,
};

const ProductsContext = createContext<{
  state: ProductsState;
  dispatch: React.Dispatch<ProductsAction>;
  getProductById: (id: string) => Product | undefined;
  getRelatedProducts: (product: Product, limit?: number) => Product[];
} | undefined>(undefined);

const productsReducer = (state: ProductsState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, filteredProducts: action.payload };
    
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    
    case 'SET_SORT_OPTION':
      return { ...state, sortOption: action.payload };
    
    case 'APPLY_FILTERS': {
      let filtered = [...state.products];
      const { categories, brands, priceRange, ratings, inStock, search } = state.filters;

      // Apply search filter
      if (search && search.trim()) {
        const searchTerm = search.toLowerCase().trim();
        filtered = filtered.filter(product => 
          product.title.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm) ||
          product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }

      if (categories?.length) {
        filtered = filtered.filter(product => categories.includes(product.category));
      }

      if (brands?.length) {
        filtered = filtered.filter(product => brands.includes(product.brand));
      }

      if (priceRange) {
        const [min, max] = priceRange;
        filtered = filtered.filter(product => product.price >= min && product.price <= max);
      }

      if (ratings?.length) {
        filtered = filtered.filter(product => ratings.some(rating => Math.floor(product.rating) === rating));
      }

      if (inStock !== undefined) {
        filtered = filtered.filter(product => product.inStock === inStock);
      }

      // Apply sorting
      filtered = sortProducts(filtered, state.sortOption);

      return { ...state, filteredProducts: filtered };
    }
    
    case 'CLEAR_FILTERS':
      return { ...state, filters: {}, filteredProducts: state.products };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
};

const sortProducts = (products: Product[], sortOption: string): Product[] => {
  const sorted = [...products];
  
  switch (sortOption) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    
    case 'newest':
      // Assuming newer products have higher IDs (should be replaced with actual date field if available)
      return sorted.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));
    
    case 'featured':
    default:
      // Default sorting (e.g., by ID or any other default criteria)
      return sorted;
  }
};

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Load products (in a real app, this would be an API call)
  React.useEffect(() => {
    const loadProducts = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        dispatch({ type: 'SET_PRODUCTS', payload: productsData });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load products' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadProducts();
  }, []);

  // Apply filters when filters or sort option changes
  React.useEffect(() => {
    if (state.products.length > 0) {
      dispatch({ type: 'APPLY_FILTERS' });
    }
  }, [state.filters, state.sortOption, state.products]);

  const getProductById = (id: string): Product | undefined => {
    return state.products.find(product => product.id === id);
  };

  const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
    return state.products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, limit);
  };

  return (
    <ProductsContext.Provider value={{ state, dispatch, getProductById, getRelatedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export default ProductsContext;
