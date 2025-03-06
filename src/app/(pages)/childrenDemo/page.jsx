"use client";

import DemoChildren from "@/app/components/DemoChildren";
import { useState } from "react";

// List Rendering
const users = ["Test User1", "Test user2", "Test user3", "Test user4"];

function page() {
  const [studentName, setStudentName] = useState(null);

  return (
    <div>
      <h1>Student Name : {studentName}</h1>
      <DemoChildren user="test user">
        <div>Hello Component : JSX Element</div>
      </DemoChildren>

      {users.map((user, index) => {
        return (
          <p key={index} className="border px-10 py-4">
            {user}
          </p>
        );
      })}
    </div>
  );
}

export default page;
