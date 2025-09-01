import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { CartState, CartAction, CartContextType, CartItem } from '@/types/cart';
import { useToast } from '@/components/ui/use-toast';

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Helper function to calculate item price with discount
const getItemPrice = (item: CartItem): number => {
  // Use MRP if available, otherwise use price
  const basePrice = item.mrp && item.mrp > item.price ? item.mrp : item.price;
  
  // Apply discount if available
  if (item.discountPct > 0) {
    return Math.round(basePrice * (1 - item.discountPct / 100));
  }
  
  // If no discount, return the lower of MRP or price
  return Math.min(basePrice, item.price);
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const cartItem = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === cartItem.id);
      
      let updatedItems;
      if (existingItemIndex >= 0) {
        // Item exists, update quantity by adding the new quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + (cartItem.quantity || 1),
        };
      } else {
        // New item, add to cart with the provided quantity or default to 1
        updatedItems = [...state.items, { 
          ...cartItem, 
          quantity: cartItem.quantity || 1 
        }];
      }
      
      // Calculate new totals
      return {
        ...state,
        ...calculateTotals(updatedItems)
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        ...calculateTotals(updatedItems)
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        // If quantity is less than 1, remove the item
        const filteredItems = state.items.filter((item) => item.id !== id);
        return {
          ...state,
          ...calculateTotals(filteredItems)
        };
      }
      
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      
      return {
        ...state,
        ...calculateTotals(updatedItems)
      };
    }

    case 'CLEAR_CART':
      return { ...initialState };

    default:
      return state;
  }
};

// Helper function to calculate totals
const calculateTotals = (items: CartItem[]): Pick<CartState, 'items' | 'totalItems' | 'totalPrice'> => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate total price with discounts applied
  const totalPrice = items.reduce(
    (sum, item) => {
      const itemPrice = getItemPrice(item);
      return sum + (itemPrice * item.quantity);
    },
    0
  );
  
  return { 
    items, 
    totalItems, 
    totalPrice: Math.max(0, totalPrice) // Ensure total is never negative
  };
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // Load cart from localStorage if available
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('kavita-cooler-cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
  });
  const { toast } = useToast();

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kavita-cooler-cart', JSON.stringify(state));
  }, [state]);

  const isInCart = (productId: string) => {
    return state.items.some(item => item.id === productId);
  };

  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    // Ensure all required fields are present with defaults
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
      // Ensure MRP is set (use price if not provided)
      mrp: product.mrp ?? product.price,
      // Ensure discount percentage is a number
      discountPct: product.discountPct ?? 0,
      // Set default values for optional fields
      rating: product.rating ?? 0,
      reviewsCount: product.reviewsCount ?? 0,
      category: product.category ?? '',
      specs: product.specs ?? {},
      inStock: product.inStock ?? true
    };
    
    // Ensure price is not negative
    if (cartItem.price < 0) cartItem.price = 0;
    if (cartItem.mrp < 0) cartItem.mrp = cartItem.price;
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    toast({
      title: 'Added to cart',
      description: `${product.title} has been added to your cart.`,
    });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    toast({
      title: 'Removed from cart',
      description: 'Item has been removed from your cart.',
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
