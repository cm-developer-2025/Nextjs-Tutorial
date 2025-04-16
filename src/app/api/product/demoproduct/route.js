import { NextResponse } from "next/server";
import connectDB from "@/db/dbConnect";
import Product from "@/db/productmodel";
import { products } from "@/app/lib/productdata";

// filter all the products in MongoDB
export async function GET(request) {
  await connectDB();
  const myProducts = await Product.find();

  return NextResponse.json({ products: myProducts });
}
// -------------------------------------------------------------
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

//-----------------------------------------------------------

export async function PUT(request) {
  await connectDB();
  // const updated = await Product.findOneAndUpdate(
  //   { productId: 2 },
  //   { price: 40000, name: "Laptop" },
  //   { new: true }
  // );

  const updated = await Product.findByIdAndUpdate(
    { _id: "67f9f815cd48043ede55d83e" },
    { price: 9000, name: "Camera" },
    { new: true }
  );
  return NextResponse.json({ updated });
}

//-----------------------------------------------------------
export async function DELETE(request) {
  await connectDB();
  await Product.findByIdAndDelete({ _id: "67f9f815cd48043ede55d83e" });
  return NextResponse.json({ message: "Deleted" });
}
