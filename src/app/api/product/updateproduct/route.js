import { NextResponse } from "next/server";
import { products } from "@/app/lib/productdata";
export async function POST(req, res) {
  const { productid, productName, price } = await req.json();
  console.log("Product ID is ", productid);
  console.log("Product Name is ", productName);
  console.log("Product Price is ", price);

  const updatedProduct = products.map((product) => {
    if (product.productid == productid) {
      product.productName = productName;
      product.price = price;
    }
    return product;
  });
  console.log("Updated Product is ", updatedProduct);
  return NextResponse.json(updatedProduct);
}
