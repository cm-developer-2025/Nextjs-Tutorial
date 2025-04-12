import React from "react";
import { employees } from "@/app/lib/employeedata";

function ShowEmplist({ id, newUsername, newSalary }) {
  let newEmpList = [];
  // let emp = {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].empid == id) {
      employees[i].empname = newUsername;
      employees[i].salary = newSalary;
    }

    newEmpList.push(employees[i]);
  }
  console.log(newEmpList);
  return <div>ShowEmplist</div>;
}

export default ShowEmplist;
