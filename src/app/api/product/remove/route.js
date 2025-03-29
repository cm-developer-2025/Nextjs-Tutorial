import { NextResponse } from "next/server";
import { products } from "@/app/lib/productdata";
export async function DELETE(req, res) {
  const productId = await req.json();
  console.log("Product ID is to be deleted ", productId);
  const myproduct = products.filter(
    (product) => product.productid != productId
  );
  return NextResponse.json(myproduct);
}
