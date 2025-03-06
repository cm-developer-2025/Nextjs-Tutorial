"use client";

import { useState } from "react";

function MyForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Email: ", email);
  };
  return (
    <div className="flex max-w-3xl justify-center mx-auto items-center min-h-screen">
      <div>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <fieldset className="flex flex-col gap-2">
            <label>Username</label>
            <input
              //   onChange={handleUserName}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-2 py-1 border border-sky-300"
              type="text"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label>Email</label>
            <input
              //   onChange={handleEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-2 py-1 border border-sky-300"
              type="text"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-sky-600 text-white font-medium px-2 py-1"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
