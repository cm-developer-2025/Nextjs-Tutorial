import { NextResponse } from "next/server";
import connectDB from "@/db/dbConnect";
import Product from "@/db/productmodel";
export async function GET(request) {
  return NextResponse.json({ message: "Get Request fired" });
}

export async function POST(request) {
  await connectDB();
  const product = await request.json();
  const pid = parseInt(product.productId);
  const pr = parseInt(product.price);
  await Product.create({
    productId: pid,
    name: product.productName,
    price: pr,
  });
  return NextResponse.json({ message: "Product Creation" });
}

// productId: Number,
//   name: String,
//   price: Number,
