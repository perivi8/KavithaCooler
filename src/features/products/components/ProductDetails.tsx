import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/features/cart';
import { useProducts } from '../context/ProductsContext';
import { Star, ChevronLeft, ShoppingCart, Check, Heart, HeartOff, Truck, ShieldCheck, RefreshCw as RefreshCwd, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { getProductById, getRelatedProducts } = useProducts();
  const { addToCart, isInCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const product = getProductById(id || '');
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  const itemInCart = product ? isInCart(product.id) : false;
  // We'll track quantity in local state since we can't access cart state directly
  const [cartQuantity, setCartQuantity] = useState(0);
  
  // Update cart quantity when product changes
  useEffect(() => {
    if (product) {
      // This is a workaround since we don't have direct access to cart state
      // In a real app, you might want to expose cart items in the CartContext
      setCartQuantity(itemInCart ? 1 : 0);
    }
  }, [product, itemInCart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const {
    title,
    brand,
    price,
    mrp,
    discountPct = 0,
    rating = 0,
    reviewsCount = 0,
    image,
    images = [image],
    inStock = true,
    description = '',
    features = [],
    specs = {},
    category = ''
  } = product;

  const formattedPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  const formattedMrp = mrp?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  const savings = mrp ? mrp - price : 0;
  const hasDiscount = discountPct > 0;
  const hasMultipleImages = images.length > 1;
  const displayImages = images.length > 0 ? images : [image];

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    
    // Add item to cart
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      mrp: product.mrp || product.price,
      discountPct: product.discountPct || 0,
      image: product.images?.[0] || product.image || '',
      brand: product.brand || '',
      category: product.category || '',
      inStock: product.inStock !== false,
    });
    
    toast.success(`${product.title} added to cart`);
    setIsAddingToCart(false);
    setIsAdded(true);
    
    // Reset added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist', {
      description: isWishlisted 
        ? `${title} has been removed from your wishlist.` 
        : `${title} has been added to your wishlist.`,
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center text-sm text-gray-500">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ArrowRight className="mx-2 h-4 w-4" />
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        {category && (
          <>
            <ArrowRight className="mx-2 h-4 w-4" />
            <Link to={`/shop?category=${category.toLowerCase()}`} className="hover:text-primary">
              {category}
            </Link>
          </>
        )}
        <ArrowRight className="mx-2 h-4 w-4" />
        <span className="text-gray-900">{title}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Images */}
        <div className="md:col-span-1 lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <img
                src={displayImages[selectedImage]}
                alt={title}
                className="h-full w-full object-contain p-4"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            
            {hasMultipleImages && (
              <div className="grid grid-cols-4 gap-2">
                {displayImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "overflow-hidden rounded-md border transition-all",
                      selectedImage === index 
                        ? "ring-2 ring-primary ring-offset-2" 
                        : "border-gray-200 hover:border-primary"
                    )}
                  >
                    <img
                      src={img}
                      alt={`${title} - ${index + 1}`}
                      className="h-16 w-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:col-span-1">
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h1>
              <p className="mt-1 text-lg text-gray-500">{brand}</p>
              
              <div className="mt-3 flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        "h-5 w-5",
                        star <= Math.round(rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      )}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {reviewsCount.toLocaleString()} reviews
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm font-medium text-green-600">
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  {formattedPrice}
                </span>
                {hasDiscount && mrp && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      {formattedMrp}
                    </span>
                    <span className="ml-2 rounded bg-green-100 px-2 py-0.5 text-sm font-semibold text-green-800">
                      {discountPct}% OFF
                    </span>
                  </>
                )}
              </div>
              
              {hasDiscount && mrp && (
                <p className="text-sm text-green-600">
                  You save {savings.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                </p>
              )}
              
              <p className="text-sm text-gray-500">
                (Inclusive of all taxes)
              </p>
            </div>

            {features.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <ul className="space-y-1.5">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center rounded-md border border-gray-300">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 text-xl text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-medium">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= 10}
                    className="h-10 w-10 text-xl text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
                
                <div className="flex-1">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!inStock || isAddingToCart || isAdded}
                    className="w-full"
                    size="lg"
                  >
                    {isAddingToCart ? (
                      <>
                        <RefreshCwd className="mr-2 h-4 w-4 animate-spin" />
                        Adding...
                      </>
                    ) : isAdded || itemInCart ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        {isAdded ? 'Added to Cart' : `In Cart (${cartQuantity})`}
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={toggleWishlist}
                >
                  {isWishlisted ? (
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  ) : (
                    <Heart className="h-5 w-5" />
                  )}
                </Button>
              </div>
              
              <Button variant="outline" className="w-full" size="lg">
                Buy Now
              </Button>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="mr-2 h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs text-gray-500">Delivered by {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck className="mr-2 h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">1 Year Warranty</p>
                  <p className="text-xs text-gray-500">1 year manufacturer warranty for device and 6 months for accessories</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <RefreshCwd className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-medium">7 Days Replacement</p>
                  <p className="text-xs text-gray-500">Hassle-free replacement within 7 days of delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="lg:col-span-1 lg:col-start-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-semibold">Specifications</h2>
            
            <div className="space-y-4">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex">
                    <span className="w-1/3 text-sm font-medium text-gray-500">{key}</span>
                    <span className="w-2/3 text-sm text-gray-800">{value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-medium text-gray-900">Description</h3>
              <p className="text-sm text-gray-600">
                {description || 'No description available.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                to={`/products/${relatedProduct.id}`}
                className="block"
              >
                <img 
                  src={relatedProduct.images?.[0] || relatedProduct.image} 
                  alt={relatedProduct.title}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h4 className="font-medium">{relatedProduct.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="font-bold">
                    {relatedProduct.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                  </span>
                  {relatedProduct.mrp > relatedProduct.price && (
                    <span className="text-sm text-gray-500 line-through">
                      {relatedProduct.mrp.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
