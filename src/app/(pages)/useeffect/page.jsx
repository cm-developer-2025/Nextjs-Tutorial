"use client";
import { useEffect, useState } from "react";

function page() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(60);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    console.log("Use Effect Hook is called");
    const total = quantity * price;
    setTotalPrice(total);
  }, [quantity]);

  const handleQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="min-h-screen px-10">
      <h1 className="text-3xl text-center my-10">
        Use Effect Hook Example Page
      </h1>
      <div>
        <p>
          Price of the Item is
          <span className="font-bold"> Rs.{price}/ Item</span> and Quantity is{" "}
          <span className="font-bold">{quantity}</span>
        </p>
        <p className="my-4 text-2xl font-semibold">
          Total Price is {totalPrice}
        </p>
      </div>

      <div>
        <button
          onClick={handleQuantity}
          className="bg-sky-700 my-10 text-white px-10 py-2"
        >
          Increase Quantity
        </button>
      </div>
    </div>
  );
}

export default page;
