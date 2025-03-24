import { NextResponse } from "next/server";

// localhost:3000/api/student
export async function GET(request, response) {
  return NextResponse.json({ message: "It is Get Request from user" });
}

export async function POST(request, response) {
  return NextResponse.json({ message: "It is POST Request from User" });
}

export async function PUT(request, response) {
  return NextResponse.json({ message: "It is PUT Request from User" });
}

export async function DELETE(request, response) {
  return NextResponse.json({ message: "It is DELETE Request from User" });
}
