import Layout from "../../components/Layout";
import ProductPage from "../../components/ProductPage";
import { getAllProducts, getProduct } from "../../lib/shopify";

const Product = ({ product }: any) => {
  return (
    <Layout>
      <ProductPage product={product} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((product: any) => {
    return {
      params: { product: product.node.handle.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}

export default Product;
