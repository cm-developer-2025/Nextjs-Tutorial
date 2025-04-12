"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";

function page() {
  const [username, setUsername] = useState("");
  const handleClick = () => {
    console.log("Button clicked");
    console.log("Username:", username);
  };
  return (
    <div className="min-h-screen">
      <div>Shadcn UI Demo</div>
      <div className="m-20">
        <Button onClick={handleClick} variant="default" className="px-10">
          Demo Button
        </Button>
        <div className="w-96 mt-4">
          <Input onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default page;
