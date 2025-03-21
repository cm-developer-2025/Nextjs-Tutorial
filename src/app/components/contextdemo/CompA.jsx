"use client";

import React from "react";
import CompB from "./CompB";

// Creating context variable
export const DataContext = React.createContext();
export const SalaryContext = React.createContext();

export default function CompA() {
  return (
    <div>
      CompA
      {/* Component B become child of component A  */}
      <DataContext.Provider value={900}>
        <SalaryContext.Provider value={120000}>
          <CompB />
        </SalaryContext.Provider>
      </DataContext.Provider>
    </div>
  );
}
