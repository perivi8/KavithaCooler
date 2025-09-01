import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { CartContextType, CartItem, CartAction } from './types';
import { cartReducer, initialCartState } from './cartReducer';

// Create a safe default context value with empty cart
const defaultCartContext: CartContextType = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  isInCart: () => false,
};

const CartContext = createContext<CartContextType>(defaultCartContext);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialCartState);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Validate the parsed cart structure
        if (parsedCart && Array.isArray(parsedCart.items)) {
          // Ensure all required fields are present and add items one by one
          const validItems = parsedCart.items.filter((item: any) => 
            item.id && item.title && item.price && item.quantity && item.image
          );
          
          // Clear any existing items first
          dispatch({ type: 'CLEAR_CART' });
          
          // Add each valid item to the cart
          validItems.forEach((item: any) => {
            const { quantity, ...itemData } = item;
            for (let i = 0; i < quantity; i++) {
              dispatch({ type: 'ADD_ITEM', payload: itemData });
            }
          });
        }
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage', error);
      localStorage.removeItem('cart'); // Clear invalid cart data
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save cart to localStorage', error);
    }
  }, [state]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    
    toast({
      title: 'Added to cart',
      description: `${item.title} has been added to your cart.`,
    });
  };

  const removeFromCart = (id: string) => {
    const item = state.items.find(item => item.id === id);
    if (item) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id } });
      
      toast({
        title: 'Removed from cart',
        description: `${item.title} has been removed from your cart.`,
      });
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (id: string) => {
    return state.items.some(item => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  return useContext(CartContext);
};

export default CartContext;
