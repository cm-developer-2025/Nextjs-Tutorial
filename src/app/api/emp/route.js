// URL : http://localhost:3000/api/emp

import { NextResponse } from "next/server";

// GET Request

const users = [];
export async function GET(req, res) {
  const empinfo = {
    empname: "H.K.Lala",
    salary: 89000,
  };

  return NextResponse.json(empinfo);
}

// export async function POST(req, res) {
//   const userdata = await req.json();
//   console.log(userdata);
//   if (userdata.username == "ramesh@gmail.com" && userdata.password == "admin") {
//     return NextResponse.json({ message: "Login Successful" });
//   } else return NextResponse.json({ message: "Invalid User" });
// }

export async function POST(req, res) {
  const userdata = await req.json();
  users.push(userdata);
  return NextResponse.json(users);
}

export async function DELETE(req, res) {
  const user = users.find((user) => user.username === "kamal");
  return NextResponse.json(user);
}
