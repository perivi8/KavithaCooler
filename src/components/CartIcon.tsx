import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/features/cart/CartContext";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

export const CartIcon = () => {
  const { totalItems = 0 } = useCart();
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={() => navigate('/cart')}
      aria-label="Shopping cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <Badge
          variant="destructive"
          className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
        >
          {totalItems}
        </Badge>
      )}
    </Button>
  );
};
