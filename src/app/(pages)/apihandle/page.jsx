"use client";
import { useEffect, useState } from "react";

function page() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const userData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userinfo = await userData.json();

      setUsers(userinfo);
    };
    getUsers();
  }, []);

  return (
    <div className="min-h-screen">
      {users &&
        users.map((user, index) => {
          return (
            <div key={index} className="w-full  px-10 flex justify-between">
              <p className="my-2 border p-2 w-full">{user.name}</p>
              <p className="my-2 border p-2 w-full">{user.email}</p>
              <p className="my-2 border p-2 w-full">{user.address.street}</p>
              <p className="my-2 border p-2 w-full">{user.phone}</p>
            </div>
          );
        })}
    </div>
  );
}

export default page;
