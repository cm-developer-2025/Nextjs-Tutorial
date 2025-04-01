"use client";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import AddNewProductForm from "@/app/components/companyproduct/AddNewProductForm";
import Link from "next/link";
function page() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      console.log("Fetch the products from the API");
      await axios.get("http://localhost:3000/api/product").then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
    };
    getProducts();
  }, []);
  return (
    <div className="min-h-screen flex max-w-4xl  mx-auto">
      <div className="flex flex-col w-full">
        <div className="my-10 text-left w-full">
          <h1>Product List</h1>
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full justify-between border border-blue-200 p-2 my-2"
                >
                  <div className="w-full text-left">{product.productid}</div>
                  <div className="w-full text-left">{product.productName}</div>
                  <div className="w-full text-left">{product.price}</div>
                  <div className="w-full text-left flex gap-x-2">
                    <Link href={`/removeproduct/${product.productid}`}>
                      <RiDeleteBin6Line className="text-red-600" size={25} />
                    </Link>
                    <Link href={`/updateproduct/${product.productid}`}>
                      <FaRegEdit className="text-blue-600" size={25} />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <AddNewProductForm />
        </div>
      </div>
    </div>
  );
}

export default page;
