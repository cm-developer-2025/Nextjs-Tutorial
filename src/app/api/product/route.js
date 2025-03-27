import { NextResponse } from "next/server";

// URL : http://localhost:3000/api/product
export async function POST(req, res) {
  const product = await req.json(); // received  product from frontend
  if (product.price < 0) {
    return NextResponse.json({ message: "negative" });
  } else if (product.price >= 50000) {
    return NextResponse.json({ message: "high" });
  }
  return NextResponse.json({ message: "Product created", product });
}
