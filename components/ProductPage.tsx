import { formatter } from "../utils/helpers";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

interface Props {
  product: any;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  return (
    <div className="lg:max-w-screen-xl mx-auto lg:py-16 lg:px-10 md:py-12 md:px-6 py-9 px-4 mt-5">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600 mb-2">
            Home / Products / {product.title}
          </p>
          <div className="flex justify-between">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {product.title}
            </h2>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-5 ">
              {formatter.format(product.variants.edges[0].node.priceV2.amount)}
            </p>
          </div>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {product.description}
          </p>

          <ProductForm product={product} />
        </div>

        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4 lg:ml-10">
          <div className=" w-full lg:w-12/12 flex justify-center">
            <img
              src={product.images.edges[0].node.originalSrc}
              alt="Wooden Chair Previw"
              className="rounded-xl"
            />
          </div>
          <div className=" w-full  lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className=" flex justify-center items-center">
              <img
                src={product.images.edges[1].node.originalSrc}
                alt="Wooden chair - preview 1"
                className="rounded-xl"
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src={product.images.edges[2].node.originalSrc}
                alt="Wooden chair - preview 2"
                className="rounded-xl"
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src={product.images.edges[3].node.originalSrc}
                alt="Wooden chair- preview 3"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges.slice(0, 4)}
      />
    </div>
  );
};

export default ProductPage;
