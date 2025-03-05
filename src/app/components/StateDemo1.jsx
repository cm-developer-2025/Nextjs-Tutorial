"use client";

import { useState } from "react";
function StateDemo1() {
  const [val, setVal] = useState(100);
  const [data, setData] = useState(0);

  function increaseNumber() {
    setVal(val + 1);
  }

  function decreaseNumber() {
    setVal(val - 1);
  }

  const inceaseBy5 = () => {
    setData(data + 5);
  };

  const decreaseBy5 = () => {
    setData(data - 5);
  };

  return (
    <div className="flex justify-center items-center mx-auto min-h-screen max-w-4xl">
      <div className="flex flex-col gap-5">
        <p>
          State value is {val}, Data is {data}
        </p>
        <button
          onClick={increaseNumber}
          className="bg-sky-700 text-white font-semibold px-10 py-2 mt-10"
        >
          Increase Number
        </button>
        <button
          onClick={decreaseNumber}
          className="bg-sky-700 text-white font-semibold px-10 py-2 mt-10"
        >
          Decrease Number
        </button>
        <div>
          <button
            onClick={inceaseBy5}
            className="bg-sky-700 text-white font-semibold px-10 py-2 mt-10"
          >
            Increase Data by 5
          </button>
          <button
            onClick={decreaseBy5}
            className="bg-sky-700 text-white font-semibold px-10 py-2 mt-10"
          >
            Decrease Data by 5
          </button>
        </div>
      </div>
    </div>
  );
}
export default StateDemo1;
