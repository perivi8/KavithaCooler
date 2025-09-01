import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, MotionConfig, HTMLMotionProps } from "framer-motion";
import { Star, ShoppingCart, Check, Heart, HeartOff } from "lucide-react";
import { useCart } from "@/features/cart";
import { useState } from "react";
import { toast } from "sonner";
import { Product } from "../types";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const MotionButton = motion(Button) as React.FC<HTMLMotionProps<"button">>;

interface ProductCardProps {
  product: Product;
  className?: string;
  showBrand?: boolean;
  showRating?: boolean;
  showDescription?: boolean;
  showWishlist?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
}

export function ProductCard({
  product,
  className,
  showBrand = true,
  showRating = true,
  showDescription = false,
  showWishlist = true,
  variant = 'default',
  ...props
}: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const {
    id,
    title,
    brand,
    price,
    mrp,
    discountPct = 0,
    rating = 0,
    reviewsCount = 0,
    image,
    inStock = true,
    description = '',
    features = []
  } = product;

  const hasDiscount = discountPct > 0;
  const showMrp = mrp !== undefined && mrp > price;
  const formattedPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  const formattedMrp = mrp?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  const itemInCart = isInCart(id);
  const isCompact = variant === 'compact';
  const isDetailed = variant === 'detailed';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdding || isAdded) return;
    
    setIsAdding(true);
    
    // Add item to cart
    addToCart({
      id,
      title,
      price,
      mrp: mrp || price, // Use MRP if available, otherwise use price
      discountPct: discountPct || 0,
      image,
      brand: brand || '',
      category: '', // Add empty category if needed
      inStock: inStock !== false, // Default to true if not specified
    });
    
    toast.success(`${title} added to cart`);
    setIsAdding(false);
    setIsAdded(true);
    
    // Reset added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <MotionConfig reducedMotion="user">
      <Link to={`/products/${id}`} className="block h-full">
        <motion.article
          className={cn(
            "group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300",
            "hover:shadow-lg hover:-translate-y-0.5",
            !inStock && "opacity-80",
            isCompact && "flex-row items-center gap-4 p-3",
            className
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {/* Discount Badge */}
          {hasDiscount && (
            <Badge 
              variant="destructive" 
              className={cn(
                "absolute left-3 top-3 z-10 font-bold",
                isCompact && "left-2 top-2 text-xs"
              )}
            >
              {discountPct}% OFF
            </Badge>
          )}

          {/* Wishlist Button */}
          {showWishlist && (
            <motion.button
              className={cn(
                "absolute bottom-2 right-2 z-10 h-8 w-8 rounded-full p-0 opacity-0 transition-opacity group-hover:opacity-100",
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                isWishlisted ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-gray-500"
              )}
              onClick={toggleWishlist}
              whileTap={{ scale: 0.95 }}
              disabled={isAdding || isAdded}
              style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem' }}
            >
              {isWishlisted ? (
                <Heart className="h-4 w-4 fill-rose-500" />
              ) : (
                <Heart className="h-4 w-4" />
              )}
            </motion.button>
          )}

          {/* Product Image */}
          <div className={cn(
            "relative flex items-center justify-center bg-gray-50 p-4",
            isCompact ? "h-20 w-20 shrink-0 rounded-lg" : "aspect-square"
          )}>
            <img
              src={image}
              alt={title}
              className={cn(
                "h-full w-full object-contain transition-transform group-hover:scale-105",
                isCompact ? "h-16 w-16" : "h-48 w-48"
              )}
              loading="lazy"
            />
            {!inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="rounded bg-white/90 px-2 py-1 text-xs font-semibold text-black">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className={cn(
            "flex flex-1 flex-col p-4 pt-2",
            isCompact && "flex-1 p-0"
          )}>
            <div className="flex-1">
              {showBrand && (
                <p className={cn(
                  "mb-1 text-xs font-medium text-gray-500",
                  isCompact && "text-xs"
                )}>
                  {brand}
                </p>
              )}
              
              <h3 className={cn(
                "font-medium text-gray-900 line-clamp-2",
                isCompact ? "text-sm" : "text-base",
                isDetailed && "text-lg font-semibold"
              )}>
                {title}
              </h3>
              
              {showDescription && description && (
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {description}
                </p>
              )}
              
              {isDetailed && features?.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              {showRating && rating > 0 && (
                <div className="mt-1.5 flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-3.5 w-3.5",
                          star <= Math.round(rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        )}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  {reviewsCount > 0 && (
                    <span className="ml-1 text-xs text-gray-500">
                      ({reviewsCount.toLocaleString()})
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className={cn("font-semibold text-gray-900", isDetailed ? "text-xl" : "text-lg")}>
                  {formattedPrice}
                </span>
                {showMrp && (
                  <span className="text-sm text-gray-500 line-through">
                    {formattedMrp}
                  </span>
                )}
              </div>
              
              {hasDiscount && showMrp && (
                <div className="mt-1">
                  <span className="text-xs text-green-600">
                    You save {discountPct}% ({formattedMrp && (mrp - price).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })})
                  </span>
                </div>
              )}
              
              <div className="mt-3">
                <MotionButton
                  size={isCompact ? "sm" : "default"}
                  className={cn(
                    "w-full",
                    isCompact && "h-8 text-xs"
                  )}
                  onClick={handleAddToCart}
                  disabled={!inStock || isAdding || isAdded}
                  whileTap={!isAdding && !isAdded ? { scale: 0.98 } : {}}
                >
                  {isAdding ? (
                    <motion.span
                      className="inline-flex items-center gap-1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.span
                        className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent"
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                      />
                      Adding...
                    </motion.span>
                  ) : isAdded ? (
                    <motion.span
                      className="inline-flex items-center gap-1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Check className="h-4 w-4" />
                      Added
                    </motion.span>
                  ) : itemInCart ? (
                    <motion.span
                      className="inline-flex items-center gap-1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Check className="h-4 w-4" />
                      In Cart
                    </motion.span>
                  ) : !inStock ? (
                    "Out of Stock"
                  ) : (
                    <motion.span className="inline-flex items-center gap-1.5">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </motion.span>
                  )}
                </MotionButton>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </MotionConfig>
  );
}

// Skeleton Loader for Product Card
export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white",
        className
      )}
    >
      <div className="aspect-square animate-pulse bg-gray-100"></div>
      <div className="flex-1 space-y-3 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-100"></div>
        <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100"></div>
        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100"></div>
        <div className="pt-2">
          <div className="h-9 w-full animate-pulse rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
