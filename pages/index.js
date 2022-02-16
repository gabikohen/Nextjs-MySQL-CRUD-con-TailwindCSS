import axios from "axios";
import { Productcart } from "../components/Productcart";
import { Layout } from "../components/Layout";
const HomePage = ({ products = [] })  => {


  const renderProducts = () => {
    if (products.length === 0) return <h1 className="text-center text-2xl font-bold">No Products</h1>;
    return products.map((product) => (
      < Productcart key={product.id} product={product} />
    ));
  };

  return (
    <Layout>
    
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
     {renderProducts()}
    </div>
    </Layout>
  );
};

export const getServerSiveProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};
export default HomePage;
