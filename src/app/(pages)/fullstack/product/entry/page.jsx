"use client";
import { useState } from "react";
import axios from "axios";
function page() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const api_url = "http://localhost:3000/api/fullstack/product";
    const product = {
      productId,
      productName,
      price,
    };
    await axios.post(api_url, product).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="min-screen">
      <div className="flex flex-col gap-5 justify-center items-center max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-700">
          Product Entry Page
        </h1>
        <div className="w-full shadow-lg p-10 rounded-sm  max-w-3xl mx-10">
          <form
            onSubmit={handleSubmitForm}
            className="w-full flex flex-col gap-5"
          >
            <fieldset className="w-full flex flex-col gap-2">
              <label>Product ID</label>
              <input
                type="text"
                onChange={(e) => setProductId(e.target.value)}
                className="outline-none border border-sky-200 rounded-sm px-2 py-1"
              />
            </fieldset>
            <fieldset className="w-full flex flex-col gap-2">
              <label>Product Name</label>
              <input
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                className="outline-none border border-sky-200 rounded-sm px-2 py-1"
              />
            </fieldset>
            <fieldset className="w-full flex flex-col gap-2">
              <label>Price</label>
              <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                className="outline-none border border-sky-200 rounded-sm px-2 py-1"
              />
            </fieldset>
            <fieldset className="w-full flex flex-col gap-2">
              <button
                type="submit"
                className="bg-sky-600 text-white px-10 py-1 rounded-sm"
              >
                Save Product
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
