import { useParams } from 'react-router-dom';
import { ProductsProvider } from '@/features/products';
import { ProductDetails } from '@/features/products/components/ProductDetails';
import { useEffect } from 'react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <ProductsProvider>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ProductDetails />
        </div>
      </div>
    </ProductsProvider>
  );
}
