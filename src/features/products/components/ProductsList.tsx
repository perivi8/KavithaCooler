import { useProducts } from '../context/ProductsContext';
import { ProductCard, ProductCardSkeleton } from './ProductCard';

export function ProductsList() {
  const { state } = useProducts();
  const { filteredProducts, isLoading, error } = state;

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-red-50">
        <div className="text-center">
          <p className="text-red-600">Error loading products</p>
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-lg bg-gray-50">
        <p className="text-lg font-medium text-gray-900">No products found</p>
        <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
