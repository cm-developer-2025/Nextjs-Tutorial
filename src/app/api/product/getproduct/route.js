import { NextResponse } from "next/server";
import { products } from "@/app/lib/productdata";
export async function POST(req, res) {
  const { pid } = await req.json();
  console.log("Product ID is ", pid);
  const searchedProduct = products.find((product) => product.productid == pid);
  return NextResponse.json(searchedProduct);
}
