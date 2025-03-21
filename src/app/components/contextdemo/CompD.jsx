"use client";
import { DataContext, SalaryContext } from "./CompA";
import { useContext } from "react";
function CompD() {
  const mydata = useContext(DataContext);
  const mysalary = useContext(SalaryContext);
  return (
    <div>
      CompD : {mydata}, and Salary = {mysalary}
    </div>
  );
}

export default CompD;
