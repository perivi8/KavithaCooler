import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCartActions } from '../hooks/useCartActions';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartActions();
  const price = item.mrp && item.mrp > item.price ? item.mrp : item.price;
  const discountedPrice = item.discountPct > 0 
    ? Math.round(price * (1 - item.discountPct / 100))
    : price;

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{item.title}</h3>
        {item.brand && <p className="text-sm text-gray-500">{item.brand}</p>}
        
        <div className="flex items-center gap-2 mt-1">
          <span className="font-medium">₹{discountedPrice.toLocaleString()}</span>
          {item.discountPct > 0 && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ₹{price.toLocaleString()}
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                {item.discountPct}% OFF
              </span>
            </>
          )}
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => removeFromCart(item.id, item.title)}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove</span>
        </Button>
        
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <Input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
            className="w-12 h-8 text-center"
          />
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
