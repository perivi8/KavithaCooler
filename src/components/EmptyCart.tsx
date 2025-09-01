import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function EmptyCart() {
  return (
    <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ShoppingCart className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">Your cart is empty</h1>
      <p className="mt-2 text-muted-foreground">
        Looks like you haven't added anything to your cart yet.
      </p>
      <Button asChild className="mt-6">
        <Link to="/shop">
          Browse Products
        </Link>
      </Button>
    </div>
  );
}
