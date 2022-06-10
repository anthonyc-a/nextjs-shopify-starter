import React, { useState } from "react";
import { formatter } from "../utils/helpers";
import ProductForm from "./ProductForm";

interface Props {
  product: any;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const price =
    product.collections.edges[0].node.products.edges[0].node.priceRange
      .minVariantPrice.amount;

  const addCount = () => {
    setCount((prev: number) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev: number) => prev - 1);
    }
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
            Home / Products / {product.title}
          </p>
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
            {product.title}
          </h2>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {product.description}
          </p>
          <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
            {formatter.format(price)}
          </p>

          <ProductForm product={product} />
        </div>

        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className=" w-full lg:w-12/12 flex justify-center">
            <img
              src={product.images.edges[0].node.originalSrc}
              alt="Wooden Chair Previw"
            />
          </div>
          <div className=" w-full  lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className=" flex justify-center items-center">
              <img
                src={product.images.edges[1].node.originalSrc}
                alt="Wooden chair - preview 1"
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src={product.images.edges[2].node.originalSrc}
                alt="Wooden chair - preview 2"
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src={product.images.edges[3].node.originalSrc}
                alt="Wooden chair- preview 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
