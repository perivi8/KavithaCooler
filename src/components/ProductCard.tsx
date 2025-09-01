import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion, MotionConfig, HTMLMotionProps } from "framer-motion";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/features/cart/CartContext";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  rating?: { value: number; count: number };
  price: number;
  mrp?: number;
  discountPct?: number;
  specs?: string[];
  imageUrl: string;
  inStock?: boolean;
  className?: string;
}

const MotionButton = motion(Button) as React.FC<HTMLMotionProps<"button">>;

export function ProductCard({
  id,
  title,
  brand,
  rating,
  price,
  mrp,
  discountPct,
  specs = [],
  imageUrl,
  inStock = true,
  className,
  ...props
}: ProductCardProps) {
  const { addItem, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const hasDiscount = discountPct !== undefined && discountPct > 0;
  const showMrp = mrp !== undefined && mrp > price;
  const formattedPrice = price.toLocaleString('en-IN');
  const formattedMrp = mrp?.toLocaleString('en-IN');
  const itemInCart = isInCart(id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!inStock) return;
    
    setIsAdding(true);
    
    // Create product object without quantity
    const product = {
      id,
      title,
      brand,
      price,
      mrp: mrp || price,
      discountPct: discountPct || 0,
      rating: rating?.value || 0,
      reviewsCount: rating?.count || 0,
      image: imageUrl,
      inStock,
      category: '', // Will be set when product is added from the product page
      specs: specs.reduce((acc, spec) => {
        const [key, value] = spec.split(':').map(s => s.trim());
        return { ...acc, [key]: value };
      }, {} as Record<string, string>)
    };
    
    // Add item to cart (quantity will be added by the context)
    addItem(product);
    
    // Show feedback
    setIsAdded(true);
    toast.success('Added to cart', {
      description: `${title} has been added to your cart.`,
    });
    
    // Reset button state after animation
    setTimeout(() => {
      setIsAdding(false);
      setTimeout(() => setIsAdded(false), 1500);
    }, 1000);
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300",
          "hover:shadow-lg hover:-translate-y-0.5",
          !inStock && "opacity-80",
          className
        )}
        whileHover={{ 
          y: -4,
          transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } 
        }}
        initial={false}
        {...props}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={imageUrl || '/placeholder-product.jpg'}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width={400}
            height={300}
          />
          
          {/* Out of Stock Overlay */}
          {!inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <span className="rounded bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 backdrop-blur-sm">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute right-3 top-3">
              <span className="inline-flex items-center rounded-full bg-[#FF7A00] px-2.5 py-1 text-xs font-semibold text-white">
                {discountPct}% OFF
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col p-4">
          {/* Title */}
          <h3 
            className="mb-1.5 font-poppins text-base font-semibold text-gray-900 line-clamp-2 h-12"
            title={title}
          >
            {title}
          </h3>
          
          {/* Brand & Rating */}
          <div className="mb-2 flex items-center justify-between">
            <span className="font-dm-sans text-sm text-gray-600">{brand}</span>
            {rating && (
              <div className="inline-flex items-center gap-0.5">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-dm-sans text-xs font-medium text-gray-900">
                  {rating.value}
                  <span className="text-gray-400"> ({rating.count})</span>
                </span>
              </div>
            )}
          </div>
          
          {/* Specs */}
          {specs.length > 0 && (
            <p 
              className="mb-4 line-clamp-2 h-10 font-dm-sans text-sm text-gray-600"
              title={specs.join(", ")}
            >
              {specs.join(", ")}
            </p>
          )}
          
          {/* Price Block */}
          <div className="mt-4 flex items-start justify-between">
            <div className="flex-1 pr-2">
              <p className="text-sm text-gray-500 truncate">{brand}</p>
              <h3 className="mt-1 text-sm font-medium text-gray-900 line-clamp-2 h-10">
                {title}
              </h3>
              
              <div className="mt-2">
                <Button 
                  variant={itemInCart || isAdded ? "outline" : "default"}
                  size="sm" 
                  className="w-full group-hover:opacity-100 transition-opacity duration-200"
                  onClick={handleAddToCart}
                  disabled={!inStock || isAdding || isAdded}
                >
                  {isAdding ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Adding...
                    </span>
                  ) : isAdded || itemInCart ? (
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      {itemInCart ? 'In Cart' : 'Added'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      {inStock ? 'Add to Cart' : 'Out of Stock'}
                    </span>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="text-right">
              {showMrp && (
                <p className="text-xs text-gray-500 line-through">
                  ₹{formattedMrp}
                </p>
              )}
              <p className="font-medium text-gray-900">₹{formattedPrice}</p>
              {hasDiscount && (
                <span className="text-xs font-medium text-green-600">
                  {discountPct}% off
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </MotionConfig>
  );
}

// Skeleton Loader for Product Card
export function ProductCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="aspect-[4/3] w-full bg-gray-100" />
      <div className="flex-1 p-4">
        <div className="mb-2 h-5 w-3/4 rounded bg-gray-100" />
        <div className="mb-4 h-4 w-1/2 rounded bg-gray-100" />
        <div className="mb-6 h-3 w-2/3 rounded bg-gray-100" />
        <div className="h-10 w-full rounded bg-gray-100" />
      </div>
    </div>
  );
}
