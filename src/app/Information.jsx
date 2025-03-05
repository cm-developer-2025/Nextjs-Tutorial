function StudentInformation(props) {
  // General Process
  //const studentName = props.studentName;

  // Destructuring
  const { studentName, semester } = props;
  console.log(props);
  return (
    <div>
      <div className="text-3xl text-center border p-10">
        This is Student Information of {studentName}
        <p>Semester is {semester}</p>
      </div>
      {/* <p>This is Second div</p>
      <div className="my-10 bg-gray-100 h-[100px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
        necessitatibus.
      </div> */}
    </div>
  );
}

export default StudentInformation;
