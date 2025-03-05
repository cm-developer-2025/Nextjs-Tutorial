import PropsDemo from "./components/PropsDemo";
import PropsExample from "./components/PropsDemo2";
import StudentInformation from "./Information";

export default function Home() {
  // Student Object
  const student = {
    studentName: "Rajesh",
    roll: 120,
    sem: 4,
  };

  return (
    <div>
      Hello
      <h1 className="demo">Hello Website</h1>
      <div className="text-green-400 py-4 px-10 rounded-full shadow-xl shadow-green-500  border-red-500 border-[10px] font-bold text-2xl my-10 mx-20 ">
        It is Project by Student
      </div>
      <div>Second Block</div>
      <StudentInformation studentName="Manish" semester={3} />
      {/* <StudentInformation studentName="Naitik" />
      <StudentInformation studentName="Kamal" /> */}
      {/* <PropsDemo username="Ravi Ranjan" sem={5} fee={16000} />
      <PropsDemo username="Kajal" sem={3} fee={11000} /> */}
      <PropsExample student={student} />
    </div>
  );
}

//---- Javascript
// Destructuring of object
// arrow function
// Nested Object
// function Parameter
// filter, map, reduce
// promise -- async await
// setTimeout(), setInterval()
