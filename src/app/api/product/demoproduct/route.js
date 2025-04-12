import { NextResponse } from "next/server";
import connectDB from "@/db/dbConnect";
import Product from "@/db/productmodel";
export async function GET(request) {
  await connectDB();
  const myProducts = await Product.find({});
  return NextResponse.json({ products: myProducts });
}

// Create | Insert  a new Product in MongoDB

export async function POST(request) {
  const newProduct = {
    productId: 2,
    name: "Mouse",
    price: 150,
  };
  await connectDB();
  await Product.create(newProduct);
  return NextResponse.json({ message: "Product Created" });
}
