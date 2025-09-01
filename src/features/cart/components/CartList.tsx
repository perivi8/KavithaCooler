import { CartItem } from './CartItem';
import { useCart } from '../CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartList = () => {
  const { items, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-medium">
          <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
          <span>₹{totalPrice.toLocaleString()}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Shipping and taxes calculated at checkout.
        </p>
        <Button className="w-full mt-6" size="lg" asChild>
          <Link to="/checkout" className="w-full">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
};
