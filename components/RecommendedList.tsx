import ProductCard from "./ProductCard";

const RecommendedList = ({ products, current }: any) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 sm:pt-24 lg:max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recommended Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) =>
            product.node.id === current ? null : (
              <ProductCard key={product.node.id} product={product} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedList;
