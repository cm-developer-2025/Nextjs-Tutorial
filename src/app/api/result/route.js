import { NextResponse } from "next/server";

// API URL : /api/result
// export async function GET(request, response) {
//   const student = {
//     name: "Harish Singh",
//     roll: 190,
//     sem: 6,
//   };
//   return NextResponse.json(student);
// }

import { employee, employees } from "@/app/lib/employeedata";

export async function GET(req, res) {
  return NextResponse.json(employees);
}
