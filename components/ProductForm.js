import axios from "axios";
import React, { useState } from "react";
import {useRouter} from next/router

export const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/products", product);
    console.log(response);
    router.push('/')
  };

  //Cuando tipeo lleno los campos de la const product
  const handleChange = ({ target: { name, value } }) => 
    setProduct({...product,[name]:value})
 ;

  // mirar abajo de todo cuando no funciona axios me pide el try y catch
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">NAME:</label>
        <input type="text" name="name" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700" />
        <label htmlFor="price">
          Price:
        </label>
        <input type="text" name="price"  id="price" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700" />
        <label htmlFor="description">DESCRIPTION:</label>
        <textarea
          name="description"
          rows="5"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-noe focus:shodow-outline font-bold text-white ">Save product</button>
      </form>
    </div>
  );
};
