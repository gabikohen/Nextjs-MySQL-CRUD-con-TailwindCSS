import React from "react";
import { Layout } from "../../components/Layout";


const ProductView = (product) => {
   
  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </Layout>
  );
};


export const getServerSiveProps = async (context) => {

 const {data:product} =  await axios.get('http://localhost:3000/api/products/' + context.query.id )

    return {
    props: {
        product,
    },
  };
  
};

export default ProductView;
