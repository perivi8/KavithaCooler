import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

export const CartDropdown = () => {
  const { items, totalItems, totalPrice } = useCart();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems > 9 ? '9+' : totalItems}
            </span>
          )}
          <span className="sr-only">Cart</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <h3 className="font-medium">Your Cart ({totalItems})</h3>
        </div>
        
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button asChild>
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="max-h-96 overflow-y-auto p-4 space-y-4">
              {items.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
              {items.length > 3 && (
                <p className="text-sm text-center text-gray-500">
                  +{items.length - 3} more items
                </p>
              )}
            </div>
            
            <div className="border-t p-4">
              <div className="flex justify-between font-medium mb-4">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/cart">View Cart</Link>
                </Button>
                <Button className="flex-1" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};
