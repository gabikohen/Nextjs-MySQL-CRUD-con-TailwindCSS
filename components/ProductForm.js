import axios from "axios";

export const ProductForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/products", {
        name: "product 1",
        description: "some product",
        price: 100,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <input type="text" name="name" />
        <label htmlFor="price" id="price">
          Price:
        </label>
        <input type="price" name="price" />
        <label htmlFor="description">DESCRIPTION:</label>
        <textarea name="description" rows="5"></textarea>

        <button>Save product</button>
      </form>
    </div>
  );
};
