import { useState } from "react";
import axios from "axios";
function AddNewProductForm() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const product = {
      productName,
      price,
    };
    await axios
      .post("http://localhost:3000/api/product", product)
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <div className="w-full">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            className="border border-gray-300 p-2 w-full"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label>Price</label>
          <input
            type="text"
            name="price"
            className="border border-gray-300 p-2 w-full"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-teal-700 text-white px-10 py-2 rounded-md"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProductForm;
