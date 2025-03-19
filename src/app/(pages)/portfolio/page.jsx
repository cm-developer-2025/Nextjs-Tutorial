import Content from "@/app/components/Content";
import LoginForm from "@/app/components/LoginForm";
import React from "react";

function page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-800 to-red-500">
      <Content />
      <LoginForm />
    </div>
  );
}

export default page;
