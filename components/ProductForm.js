import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const router = useRouter();


  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const { data } = await axios.get("/api/products/" + id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchProduct(router.query.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (router.query?.id) {
        console.log("update");
        await axios.Axios("/api/products/" + router.query.id, product);
       toast.success('Product update sucesssfully')
      } else {
        await axios.post("/api/products", product);
        toast.success('Product created sucesssfully')
      }

      router.push("/");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setProduct({ ...product, [name]: value });


  

  // mirar abajo de todo cuando no funciona axios me pide el try y catch
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
       <div className="mb-2">
       <label htmlFor="name" className="block text-black-700 text-sm font-bold mb-2">NAME:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
          value={product.name}
        />
       </div>
       <div className="mb-2">
        <label htmlFor="price" className="block text-black-700 text-sm font-bold mb-2">Price:</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
          value={product.price}
        />
        </div>
        <div className="mb-2">
        <label htmlFor="description" className="block text-black-700 text-sm font-bold mb-2 ">DESCRIPTION:</label>
        <textarea
          name="description"
          rows="5"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
          value={product.description}
        ></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-noe focus:shodow-outline font-bold text-white ">
          {router.query.id ? "Update product" : "Save product"}
        </button>
      </form>
    </div>
  );
};
