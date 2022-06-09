import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../lib/shopify";

const Home = ({ products }: any) => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Products
          </h1>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product: any) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: { products },
  };
}

export default Home;
