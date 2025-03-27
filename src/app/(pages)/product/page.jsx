"use client";

import { useState } from "react";
import axios from "axios";
function page() {
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [message, setMessage] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const myProduct = {
      productName,
      price,
    };

    await axios
      .post("http://localhost:3000/api/product", myProduct)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
      });
    // console.log(myProduct);
  };
  return (
    <div className="min-h-screen max-w-3xl flex justify-center items-center">
      <div className="mx-5">
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <label>Product Name</label>
            <input
              className="outline-none border border-sky-200 px-5 py-1 rounded-md"
              type="text"
              onChange={(e) => setProductName(e.target.value)}
            />
          </fieldset>
          <fieldset className="my-4">
            <label>Price</label>
            <input
              className="outline-none border border-sky-200 px-5 py-1 rounded-md"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
          <div className="my-5">
            {message == "negative" && (
              <p className="text-red-500">Negative price not allowed</p>
            )}
          </div>
          <fieldset className="my-4">
            <button className="bg-blue-800 text-white rounded-md px-10 py-1">
              Save Product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default page;
