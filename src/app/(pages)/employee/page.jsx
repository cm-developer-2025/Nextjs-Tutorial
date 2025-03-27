"use client";
import axios from "axios";
import { useState } from "react";
function page() {
  const [name, setName] = useState();
  const [salary, setSalary] = useState();
  const handleEmployeeData = async () => {
    // it will access the backed API
    await axios.get("http://localhost:3000/api/emp").then((res) => {
      console.log(res.data.empname);
      console.log(res.data.salary);
      setName(res.data.empname);
      setSalary(res.data.salary);
    });
  };
  return (
    <div className="min-h-screen m-20">
      <div>Employee page</div>
      <div>Employee Name : {name}</div>
      <div>Employee Salary :{salary}</div>
      <div>
        <button
          className="bg-gray-800 text-gray-100 px-10 py-2 rounded-md"
          onClick={handleEmployeeData}
        >
          Get Employee Data
        </button>
      </div>
    </div>
  );
}

export default page;
