import { NextResponse } from "next/server";
import { products } from "@/app/lib/productdata";
// URL : http://localhost:3000/api/product

// export async function POST(req, res) {
//   const product = await req.json(); // received  product from frontend
//   if (product.price < 0) {
//     return NextResponse.json({ message: "negative" });
//   } else if (product.price >= 50000) {
//     return NextResponse.json({ message: "high" });
//   }
//   return NextResponse.json({ message: "Product created", product });
// }

// Read Operation

export async function GET(req, res) {
  return NextResponse.json(products);
}

export async function POST(req, res) {
  const newProduct = await req.json();
  console.log(newProduct);
  products.push(newProduct);
  return NextResponse.json(products);
}

export async function DELETE(req, res) {
  const productId = await req.json();
  console.log("Product ID is ", productId);
  const myproduct = products.find((product) => product.productid == productId);
  console.log(myproduct);
  return NextResponse.json(myproduct);
}
