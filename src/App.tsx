import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from 'react';
import { CartProvider } from "./features/cart";
import { ProductsProvider } from "./features/products";
import Layout from "./components/Layout";
import Index from "./pages/index";
import Shop from "./pages/shop";
import ProductDetails from "./pages/products/[id]";
import Services from "./pages/services";
import ServicePage from "./pages/ServicePage";
import Brands from "./pages/brands";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Shipping from "./pages/shipping";
import CancellationRefund from "./pages/cancellation-refund";
import BookService from "./pages/services/book.tsx";
import TrackService from "./pages/track-service.tsx";
import WarrantyPolicy from "./pages/policies/warranty.tsx";
import ReturnsRepairs from "./pages/services/repairs.tsx";
import FAQ from "./pages/faq.tsx";
import StoreLocator from "./pages/store-locator.tsx";

// Configure query client with proper defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on navigation, not on initial load
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/services" element={<Services />} />
    <Route path="/service" element={<ServicePage />} />
    <Route path="/brands" element={<Brands />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />
    <Route 
      path="/checkout" 
      element={
        <ErrorBoundary>
          <Checkout />
        </ErrorBoundary>
      } 
    />
    <Route path="/order-confirmation" element={<OrderConfirmation />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/shipping" element={<Shipping />} />
    <Route path="/cancellation-refund" element={<CancellationRefund />} />
    <Route path="/services/book" element={<BookService />} />
    <Route path="/track-service" element={<TrackService />} />
    <Route path="/policies/warranty" element={<WarrantyPolicy />} />
    <Route path="/services/repairs" element={<ReturnsRepairs />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/store-locator" element={<StoreLocator />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner position="top-right" richColors closeButton />
        <CartProvider>
          <ProductsProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Layout>
                <AppRoutes />
              </Layout>
            </BrowserRouter>
          </ProductsProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
