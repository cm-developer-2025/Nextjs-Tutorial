import { useState } from "react";

function StateDemo3() {
  const [userName, setUserName] = useState("Dummy");
  const handleUserName = (e) => {
    // console.log(e);
    setUserName(e.target.value);
  };
  return (
    <div>
      <h1>State Demo 3</h1>
      <h2>UserName : {userName}</h2>
      <form>
        <div className="flex flex-col gap-3 justify-center items-center min-h-screen mx-auto">
          <div>
            <input
              onChange={handleUserName}
              type="text"
              className="border p-1 border-gray-700"
            />
          </div>
          <div>
            <input type="email" className="border p-1 border-gray-700" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default StateDemo3;
