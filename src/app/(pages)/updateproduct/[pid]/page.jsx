"use client";
import { useEffect, useState, use } from "react";
import axios from "axios";
function UpdateProductPage({ params }) {
  const { pid } = use(params);
  const [product, setProduct] = useState({});
  const [newProductName, setNewProductName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  console.log("Product ID is ", pid);
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .post("http://localhost:3000/api/product/getproduct", { pid })
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
        });
    };
    getProduct();
  }, []);

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      productid: pid,
      productName: newProductName,
      price: newPrice,
    };
    await axios
      .post("http://localhost:3000/api/product/updateproduct", updatedProduct)
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <div className="min-h-screen justify-center items-center flex flex-col mx-auto max-w-3xl">
      <div className="w-fulll">
        <div className="flex flex-col gap-5 my-10">
          <p>Prouduct Name is {product.productName}</p>
          <p> Price is Rs.{product.price}/-</p>
        </div>
        <h2 className="text-3xl text-center">Update Product</h2>
        <div className="my-10">
          <form onSubmit={handleUpdateForm} className="flex flex-col gap-5">
            <div>
              <label>New Product Name</label>
              <input
                type="text"
                onChange={(e) => setNewProductName(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label>New Price</label>
              <input
                type="text"
                onChange={(e) => setNewPrice(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div>
              <button className="bg-sky-700 text-white w-full rounded-md py-2">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductPage;
