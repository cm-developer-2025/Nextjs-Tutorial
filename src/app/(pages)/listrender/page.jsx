"use client";

import { useState } from "react";
import { StudentListRender } from "@/app/components/lib/StudentListRender";

function page() {
  //   for (let i = 0; i < students.length; i++) {
  //     console.log(students[i].name);
  //   }
  const [emp, setEmp] = useState({ name: "Test User" });

  return (
    // React Fragment
    <>
      <StudentListRender />
      <p>Conditional Render</p>
      {/* <p>Employee Name :{emp != null ? emp.name : ""}</p> */}

      {/* <p>Employee Name :{emp ? emp.name : "Not defined"}</p> */}

      {/* <p>Employee Name :{emp && emp.name}</p> */}

      {/* Optional Chaining  */}
      <p>Employee Name :{emp?.name}</p>
    </>
  );
}

export default page;
