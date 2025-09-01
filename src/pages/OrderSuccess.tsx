import { useEffect, useState } from 'react';
import { CheckCircle2, ShoppingBag, Clock, Home, ShoppingCart, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

type OrderItem = {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image?: string;
};

type OrderData = {
  orderId: string;
  total: number;
  items: OrderItem[];
  shippingAddress?: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
  };
  paymentMethod?: string;
  estimatedDelivery?: string;
};

// Empty order component
function EmptyOrder() {
  return (
    <div className="text-center py-12">
      <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-bold mb-2">No Order Found</h2>
      <p className="text-muted-foreground mb-6">We couldn't find any order details. Your order may have expired or the link is invalid.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link to="/shop">
            <ShoppingCart className="mr-2 h-4 w-4" /> Continue Shopping
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/offers">
            <Tag className="mr-2 h-4 w-4" /> View Offers
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrderData = () => {
      try {
        // Try to get from session storage
        const pendingOrder = sessionStorage.getItem('pendingOrder') || sessionStorage.getItem('lastOrder');
        
        if (pendingOrder) {
          const orderData = JSON.parse(pendingOrder);
          console.log('Order data found in storage');
          // Move to lastOrder and clear pending if it exists
          sessionStorage.setItem('lastOrder', pendingOrder);
          sessionStorage.removeItem('pendingOrder');
          return orderData;
        }
        
        return null;
      } catch (error) {
        console.error('Error loading order data:', error);
        return null;
      }
    };

    const orderData = loadOrderData();
    if (orderData) {
      setOrder({
        ...orderData,
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <EmptyOrder />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thank you for your order!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your order has been placed successfully.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Order ID: <span className="font-medium">{order.orderId}</span>
          </p>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {order.items.length > 0 ? (
                order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    {item.image && (
                      <div className="flex-shrink-0 h-16 w-16 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No items in this order</p>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Amount</p>
                <p>₹{order.total.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Information</h3>
              {order.shippingAddress ? (
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p>Phone: {order.shippingAddress.phone}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No shipping information available</p>
              )}
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Order Status</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-blue-50 p-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Order Confirmed</h4>
                    <p className="text-sm text-gray-500">Your order has been received</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-orange-50 p-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Estimated Delivery</h4>
                    <p className="text-sm text-gray-500">
                      {order.estimatedDelivery || '3-5 business days'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">What's Next?</h2>
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/" className="flex items-center justify-center">
                <Home className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/orders" className="flex items-center justify-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                View My Orders
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <Link to="/contact" className="font-medium text-primary hover:underline">
              Contact our support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
