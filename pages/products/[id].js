import React from 'react'
import axios from "axios";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';


const ProductView = ({product}) => {
  
  const router = useRouter();

  const handleDelete = async (id) => {

    try {
      await axios.delete("/api/products/" + id);
      router.push("/");
    } catch (error) {
       toast.error(error.response.data.message)
    }
   
  };

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button
        className="bg-red-600 hover:bg-red-800  px-5 py-2 text-white rounded"
        onClick={() => handleDelete(product.id)}
      >
        delete
      </button>
      <button className="bg-green-600 hover:bg-green-800 m1-2  px-5 py-2 text-white rounded"
      onclick={() => router.push('/products/edit/' + product.id)}
      >
        
        Edit
      </button>
    </Layout>
  );
};

export const getServerSiveProps = async (context) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductView;
