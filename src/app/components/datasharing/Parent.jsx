import Child from "./Child";
import { useState } from "react";
function Parent() {
  const [myData, setMyData] = useState(0);
  const getData = (data) => {
    console.log("User Data : ", data);
    setMyData(data);
  };

  return (
    <div>
      Parent : {myData}
      <Child getData={getData} />
    </div>
  );
}

export default Parent;
