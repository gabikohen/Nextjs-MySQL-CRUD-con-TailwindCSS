import axios from "axios";
/* import  Link from 'next-link'; */



import { Layout } from "../components/Layout";
const HomePage = ({products}) => {
 console.log(products);
  return (
    <Layout>
    
     {products?.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}  ref={ref}>
        <a>
       
       <div className=" border border-gray-200 shadow-md p-6"  >
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
     </a>
     </Link>
      
      
        ))}
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
