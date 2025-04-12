"use client";
import ShowEmplist from "@/app/components/ShowEmplist";
import React, { useState } from "react";

function page() {
  // Input from user
  let id = 104;
  let newUsername = "Test Username";
  let newSalary = 120000;
  return (
    <div className="min-h-screen">
      <ShowEmplist id={id} newUsername={newUsername} newSalary={newSalary} />
    </div>
  );
}

export default page;
