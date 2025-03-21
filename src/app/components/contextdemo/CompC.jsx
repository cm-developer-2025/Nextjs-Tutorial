"use client";
import { useContext } from "react";
import { DataContext } from "./CompA";
import CompD from "./CompD";

function CompC() {
  const data = useContext(DataContext);
  return (
    <div>
      CompC : {data}
      <CompD />
    </div>
  );
}

export default CompC;
