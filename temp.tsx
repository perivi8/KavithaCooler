import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useCart } from '@/contexts/CartContext';
import type { CartItem } from '@/types/cart';
import type { Product } from '@/types/product';
import { Button } from './ui/button';
import { X, ShoppingCart, Plus, Minus, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
// Extend CartItem with additional properties needed for display
interface DisplayCartItem extends CartItem {
  title: string;
  image: string;
  price: number;
  discountPct: number;
  specs: Record<string, string>;
}
// Error boundary component for cart items
class CartErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Cart Error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center text-sm text-destructive">
          <AlertCircle className="mx-auto h-5 w-5 mb-2" />
          <p>Something went wrong loading the cart.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
// Loading skeleton for cart items
const CartItemSkeleton = () => (
  <div className="flex items-start gap-3 py-3 animate-pulse">
    <div className="h-20 w-20 bg-gray-100 rounded-md" />
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
      <div className="h-8 bg-gray-100 rounded w-24" />
    </div>
  </div>
);
// Format price with Indian Rupee symbol and commas
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
// Calculate discounted price
const getDiscountedPrice = (price: number, discountPct: number) => {
  return price * (1 - discountPct / 100);
};
interface CartDropdownContentProps {}
const CartDropdown: React.FC = () => {
  const { state, removeItem, updateQuantity } = useCart();
  const [loadingItems, setLoadingItems] = useState<Record<string, boolean>>({});
  const [removingItem, setRemovingItem] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Ensure state is always defined
  const safeState = state || { items: [], totalItems: 0, totalPrice: 0 };
  const handleRemoveItem = async (id: string) => {
    try {
      setRemovingItem(id);
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API call
      removeItem(id);
    } catch (error) {
      console.error('Failed to remove item:', error);
    } finally {
      setRemovingItem(null);
    }
  };
  const handleUpdateQuantity = async (id: string, quantity: number) => {
    try {
      setIsUpdating(true);
      setLoadingItems(prev => ({ ...prev, [id]: true }));
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API call
      updateQuantity(id, quantity);
    } catch (error) {
      console.error('Failed to update quantity:', error);
    } finally {
      setIsUpdating(false);
      setLoadingItems(prev => ({ ...prev, [id]: false }));
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  if (safeState.totalItems === 0) {
    return (
      <div className="relative" ref={dropdownRef}>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-transparent hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Shopping cart"
          aria-expanded={isOpen}
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 rounded-md border bg-white p-4 shadow-lg z-50 animate-in fade-in-0 zoom-in-95">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-gray-100 p-3 mb-3">
                <ShoppingCart className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
              <p className="text-sm text-gray-500 text-center mb-4">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild className="w-full">
                <Link 
                  to="/shop" 
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="relative hover:bg-transparent hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Shopping cart, ${safeState.totalItems} items`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Cart</span>
        {safeState.totalItems > 0 && (
          <span 
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white"
            aria-hidden="true"
          >
            {safeState.totalItems > 9 ? '9+' : safeState.totalItems}
          </span>
        )}
      </Button>
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-80 rounded-md border bg-white p-0 shadow-lg z-50 animate-in fade-in-0 zoom-in-95"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
            <h3 className="text-lg font-medium">Your Cart ({safeState.totalItems})</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
              aria-label="Close cart"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Cart items list */}
          <div className="max-h-[400px] overflow-y-auto p-4">
            {safeState.items.map((item) => (
              <div key={item.id} className="flex items-start gap-3 py-3 border-b">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-gray-50">
                  <img
                    src={(item as DisplayCartItem).image || '/placeholder.svg'}
                    alt={(item as DisplayCartItem).title}
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium">{(item as DisplayCartItem).title}</h4>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      disabled={!!removingItem}
                      className="text-gray-400 hover:text-destructive"
                      aria-label="Remove item"
                    >
                      {removingItem === item.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <X className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">{item.specs?.color || 'One Color'}</p>
                  
                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={loadingItems[item.id] || isUpdating}
                        className="h-6 w-6 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">
                        {loadingItems[item.id] ? (
                          <Loader2 className="mx-auto h-4 w-4 animate-spin" />
                        ) : (
                          item.quantity
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={loadingItems[item.id] || isUpdating}
                        className="h-6 w-6 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      {item.discountPct > 0 ? (
                        <>
                          <span className="text-sm font-medium text-destructive">
                            {formatPrice(getDiscountedPrice(item.price, item.discountPct) * item.quantity)}
                          </span>
                          <span className="ml-1 text-xs text-gray-400 line-through">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cart summary */}
          <div className="border-t bg-gray-50 p-4">
            <div className="flex justify-between py-2 text-sm">
              <span>Subtotal</span>
              <span className="font-medium">{formatPrice(safeState.totalPrice)}</span>
            </div>
            <p className="mb-4 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
            
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/checkout" onClick={() => setIsOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                  View Cart
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      <Button
        variant="ghost"
        size="icon"
        className="relative hover:bg-transparent hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Shopping cart, ${state.totalItems} items`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Cart</span>
        {state.totalItems > 0 && (
          <span 
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white"
            aria-hidden="true"
          >
            {state.totalItems > 9 ? '9+' : state.totalItems}
          </span>
        )}
      </Button>
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-80 rounded-md border bg-white p-0 shadow-lg z-50 animate-in fade-in-0 zoom-in-95"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
            <h3 className="text-lg font-medium">Your Cart ({state.totalItems})</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
              aria-label="Close cart"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="max-h-[400px] overflow-y-auto p-4">
            {state.items.map((item) => {
              const discountedPrice = getDiscountedPrice(item.price, item.discountPct || 0);
              const originalPrice = item.price;
              const hasDiscount = item.discountPct > 0;
              
              return (
                <div key={item.id} className="flex items-start gap-3 py-3 border-b last:border-0">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-gray-50">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                    
                    <div className="mt-1 flex items-center gap-2">
                      {hasDiscount && (
                        <span className="text-xs line-through text-gray-400">
                          {formatPrice(originalPrice)}
                        </span>
                      )}
                      <span className="font-medium text-foreground">
                        {formatPrice(discountedPrice)}
                      </span>
                      {hasDiscount && (
                        <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700">
                          {Math.round(item.discountPct)}% OFF
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-none"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Reduce quantity of ${item.title}`}
                          disabled={item.quantity <= 1 || loadingItems[item.id]}
                        >
                          {loadingItems[item.id] ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Minus className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-none"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.title}`}
                          disabled={loadingItems[item.id]}
                        >
                          {loadingItems[item.id] ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Plus className="h-3.5 w-3.5" />
                          )}
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:bg-destructive/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveItem(item.id);
                        }}
                        disabled={removingItem === item.id}
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        {removingItem === item.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <X className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="sticky bottom-0 border-t bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-base font-medium text-gray-900">
                <span>Subtotal</span>
                <span>{formatPrice(state.totalPrice)}</span>
              </div>
              
              {state.items.some(item => item.discountPct > 0) && (
                <div className="flex items-center justify-between text-sm text-green-600">
                  <span>You saved</span>
                  <span className="font-medium">
                    {formatPrice(
                      state.items
                        .filter(item => item.discountPct > 0)
                        .reduce((total, item) => {
                          const discount = (item.price * item.discountPct * item.quantity) / 100;
                          return total + discount;
                        }, 0)
                    )}
                  </span>
                </div>
              )}
              
              <p className="text-xs text-gray-500 text-center">
                Shipping and taxes calculated at checkout.
              </p>
              
              <Button 
                asChild 
                className="mt-2 w-full bg-primary hover:bg-primary/90 h-11 text-base font-medium"
                size="lg"
              >
                <Link 
                  to="/checkout" 
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  Checkout Now
                </Link>
              </Button>
              
              <div className="text-center">
                <Link 
                  to="/cart" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  View full cart details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
