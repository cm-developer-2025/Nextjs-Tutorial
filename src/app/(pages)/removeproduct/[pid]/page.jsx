"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
function page({ params }) {
  const { pid } = use(params);
  const router = useRouter();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .delete("http://localhost:3000/api/product", { data: pid })
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
        });
    };
    getProduct();
  }, []);
  const handleRemove = async () => {
    await axios
      .delete("http://localhost:3000/api/product/remove", { data: pid })
      .then((response) => {
        console.log(response.data);
        router.push("/companyproduct");
      });
    console.log("I am going to delete the product ID  ", pid);
  };
  const handleNotRemove = async () => {
    router.push("/companyproduct");
  };
  return (
    <div className="min-h-screen">
      <div>
        <h2 className="text-4xl text-gray-800">Remove Product</h2>
      </div>
      <div>
        <h1 className="text-2xl text-gray-800">
          Product ID : {product.productid}
        </h1>
        <h1 className="text-2xl text-gray-800">
          Product Name : {product.productName}
        </h1>
        <h1 className="text-2xl text-gray-800">
          Product Price : {product.price}
        </h1>
        <div>
          <p>Are you sure to delete ?</p>
          <p>
            <button
              onClick={handleRemove}
              className="bg-red-500 text-white px-10 py-2 rounded mx-5 "
            >
              Yes
            </button>
            <button
              onClick={handleNotRemove}
              className="bg-blue-500 text-white px-10 py-2 rounded"
            >
              No
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
