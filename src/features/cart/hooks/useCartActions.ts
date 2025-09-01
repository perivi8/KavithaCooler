import { useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '../CartContext';

export const useCartActions = () => {
  const { addToCart: add, removeFromCart: remove, updateQuantity: update } = useCart();
  const { toast } = useToast();

  const addToCart = useCallback((item: Parameters<typeof add>[0]) => {
    add(item);
    toast({
      title: 'Added to cart',
      description: `${item.title} has been added to your cart.`,
    });
  }, [add, toast]);

  const removeFromCart = useCallback((id: string, itemTitle?: string) => {
    remove(id);
    if (itemTitle) {
      toast({
        title: 'Removed from cart',
        description: `${itemTitle} has been removed from your cart.`,
      });
    }
  }, [remove, toast]);

  return {
    addToCart,
    removeFromCart,
    updateQuantity: update,
  };
};
