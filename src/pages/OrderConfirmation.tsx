import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShoppingBag, Loader2, Home, AlertCircle } from 'lucide-react';
import { useCart } from '@/features/cart/CartContext';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type OrderItem = {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image?: string;
};

type ShippingAddress = {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
};

type OrderData = {
  orderId: string;
  total: number;
  items: OrderItem[];
  shippingAddress?: ShippingAddress;
  paymentMethod?: string;
  estimatedDelivery?: string;
  timestamp?: string;
};

// Error boundary component for order confirmation
class OrderErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Order confirmation error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
          <Alert variant="destructive" className="max-w-md">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              We couldn't load your order details. Please check your order history or contact support.
            </AlertDescription>
          </Alert>
          <div className="mt-6 flex gap-4">
            <Button asChild variant="outline">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Home
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Helper component to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart, items, totalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderData | null>(null);

  // Generate a fallback order if no data is available
  const generateFallbackOrder = (): OrderData => ({
    orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    total: totalPrice,
    items: [...items],
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const loadOrderData = async () => {
      try {
        let orderData: OrderData | null = null;
        
        // Try to get from pending order first (set during checkout)
        const pendingOrder = sessionStorage.getItem('pendingOrder');
        if (pendingOrder) {
          try {
            orderData = JSON.parse(pendingOrder);
            console.log('Order data found in pendingOrder');
            // Move to lastOrder and clear pending
            sessionStorage.setItem('lastOrder', pendingOrder);
            sessionStorage.removeItem('pendingOrder');
          } catch (e) {
            console.error('Failed to parse pending order:', e);
            sessionStorage.removeItem('pendingOrder');
          }
        } else {
          // Try to get from last order
          const lastOrder = sessionStorage.getItem('lastOrder');
          if (lastOrder) {
            try {
              orderData = JSON.parse(lastOrder);
              console.log('Order data found in lastOrder');
            } catch (e) {
              console.error('Failed to parse last order:', e);
              setError('Invalid order data');
              setIsLoading(false);
              return;
            }
          }
        }

        // If still no order data, try to generate from cart
        if (!orderData) {
          if (items.length > 0) {
            console.log('Generating fallback order from cart');
            orderData = generateFallbackOrder();
            // Save this as last order for refresh
            sessionStorage.setItem('lastOrder', JSON.stringify(orderData));
          } else {
            console.log('No order data and empty cart');
            setError('No order details found');
            setIsLoading(false);
            return;
          }
        }

        if (orderData) {
          // Clear the cart when order is confirmed
          clearCart();
          setOrder(orderData);
        } else {
          setError('No order details found');
        }
      } catch (err) {
        console.error('Error loading order data:', err);
        setError('Failed to load order details');
      } finally {
        setIsLoading(false);
      }
    };

    loadOrderData();
  }, [clearCart, items, totalPrice, navigate]);

  // Loading state
  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Loading your order details...</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-destructive">Order Details Unavailable</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <Alert variant="destructive" className="max-w-md mx-auto mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <p className="mb-6">We couldn't find your order details. This might be because:</p>
            <ul className="list-disc list-inside text-left max-w-md mx-auto mb-8 space-y-2 text-muted-foreground">
              <li>You've already completed this order</li>
              <li>The page was refreshed</li>
              <li>You navigated directly to this page</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" /> Return Home
                </Link>
              </Button>
              <Button asChild>
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Fallback for missing order (shouldn't happen due to error state, but just in case)
  if (!order) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Order Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <p className="mb-6">We couldn't find your order details. Please check your order history or contact support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/shop">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Continue Shopping
                </Link>
              </Button>
              <Button asChild>
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <OrderErrorBoundary>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">Thank you for your purchase</p>
          <p className="text-sm text-muted-foreground mt-2">
            Order #{order.orderId} • {order.timestamp ? new Date(order.timestamp).toLocaleDateString() : 'Today'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {order.items.length > 0 ? (
                  order.items.map((item) => (
                    <div key={`${item.id}-${item.quantity}`} className="flex items-start gap-4 pb-4 border-b">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      ) : (
                        <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center">
                          <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-medium">{item.title || 'Product'}</h3>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity || 1}
                        </p>
                      </div>
                      <div className="font-medium">
                        {formatCurrency((item.price || 0) * (item.quantity || 1))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No items in this order
                  </div>
                )}
              </div>
            </div>

            {order.shippingAddress && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                <div className="bg-muted/50 p-4 rounded-md">
                  <p className="font-medium">{order.shippingAddress.name || 'N/A'}</p>
                  <p>{order.shippingAddress.street || 'N/A'}</p>
                  <p>
                    {[order.shippingAddress.city, order.shippingAddress.state, order.shippingAddress.zipCode]
                      .filter(Boolean)
                      .join(', ') || 'N/A'}
                  </p>
                  {order.shippingAddress.phone && (
                    <p className="mt-2">Phone: {order.shippingAddress.phone}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-muted/50 p-6 rounded-lg sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Total</h2>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(order.total || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(order.total || 0)}</span>
                </div>
              </div>

              {order.paymentMethod && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <p className="capitalize">
                    {String(order.paymentMethod).replace(/_/g, ' ')}
                  </p>
                </div>
              )}

              {order.estimatedDelivery && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Estimated Delivery</h3>
                  <p>{order.estimatedDelivery}</p>
                </div>
              )}

              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link to="/shop">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Continue Shopping
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  Track Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderErrorBoundary>
  );
}
