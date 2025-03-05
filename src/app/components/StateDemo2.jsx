import { useState } from "react";

function StateDemo2() {
  const [student, setStudent] = useState({
    name: "Manish Ranjan",
    age: 40,
    sem: 4,
    fee: 80,
  });

  //Destructuring of Object
  const { age, sem, name, fee } = student;

  const updateUsername = () => {
    setStudent({ ...student });
  };

  // function displayValues(x, ...rest) {
  //   console.log(x);
  //   console.log(...rest);
  // }
  // displayValues(12, 13, 14, 15);
  return (
    <div className="flex flex-col gap-4">
      <p>Student Name :{name}</p>
      <p>Student age :{age}</p>
      <p>Student Sem :{sem}</p>
      <p>Student Fee :{fee}</p>
      <button
        onClick={updateUsername}
        className="px-5 py-2 bg-sky-700 text-white"
      >
        Update Student Name
      </button>
    </div>
  );
}

export default StateDemo2;
