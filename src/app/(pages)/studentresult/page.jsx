"use client";

import { useState } from "react";
// frontend url = http://localhost:3000/studentresult

function page() {
  const [studentinfo, setStudentinfo] = useState(null);
  //   const getStudentData = async () => {
  //     const response = await fetch("http://localhost:3000/api/result");
  //     const student = await response.json();
  //     console.log(student);
  //     setStudentinfo(student);
  //   };

  const getStudentData = async () => {
    await fetch("http://localhost:3000/api/result")
      .then((response) => response.json())
      .then((student) => {
        // console.log("I have got :", student);
        setStudentinfo(student);
      })
      .catch((err) => {
        console.log("Error Found is ", err);
      });
  };
  return (
    <div className="min-h-screen m-20">
      <div className="flex gap-10">
        <div className="w-full">
          <button
            onClick={getStudentData}
            className="bg-orange-600 text-white px-10 py-1 "
          >
            Get Student Data
          </button>
        </div>
        <div className="w-full">
          {studentinfo && (
            <div>
              <p>Student Name {studentinfo.name}</p>
              <p>Student Roll {studentinfo.roll}</p>
              <p>Student Sem {studentinfo.sem}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
