import { CartState, CartAction, CartItem } from './types';

// Helper function to calculate item price with discount
const getItemPrice = (item: CartItem): number => {
  // Use MRP if available, otherwise use price
  const basePrice = item.mrp && item.mrp > item.price ? item.mrp : item.price;
  
  // Apply discount if available
  if (item.discountPct > 0) {
    return Math.round(basePrice * (1 - item.discountPct / 100));
  }
  return basePrice;
};

// Helper function to calculate totals
const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + getItemPrice(item) * item.quantity,
    0
  );
  return { items, totalItems, totalPrice };
};

// Reducer function
export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return calculateTotals(updatedItems);
      }
      
      // Add new item
      const newItem = { ...action.payload, quantity: 1 };
      return calculateTotals([...state.items, newItem]);
    }
    
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      return calculateTotals(filteredItems);
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: Math.max(1, action.payload.quantity) };
        }
        return item;
      });
      return calculateTotals(updatedItems);
    }
    
    case 'CLEAR_CART':
      return { items: [], totalItems: 0, totalPrice: 0 };
      
    default:
      return state;
  }
};

export const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};
