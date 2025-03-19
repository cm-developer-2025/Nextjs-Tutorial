"use client";
// Uncontrolled Form
import { useRef, useState } from "react";

function LoginForm() {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const [userErrorMessage, setUserErrorMessage] = useState();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    // console.log({ username, password });

    if (username == "") setUserErrorMessage("Username Required");
    else setUserErrorMessage(null);

    if (password == "") setPasswordErrorMessage("Password Required");
    else setPasswordErrorMessage(null);
  };
  return (
    <div className="max-w-6xl mx-auto flex">
      <div className="mx-5 lg:mx-0 w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <fieldset className="w-full flex flex-col">
            <label className="text-xl text-gray-200 my-2">Username</label>
            <input
              ref={userRef}
              type="text"
              className="outline-none px-2 py-1 rounded-md"
            />
            {userErrorMessage && (
              <p className="text-yellow-100">{userErrorMessage}</p>
            )}
          </fieldset>
          <fieldset className="w-full flex flex-col my-4">
            <label className="text-xl text-gray-200 my-2">Password</label>
            <input
              type="password"
              ref={passRef}
              className="outline-none px-2 py-1 rounded-md"
            />
            {passwordErrorMessage && (
              <p className="text-yellow-100">{passwordErrorMessage}</p>
            )}
          </fieldset>
          <fieldset className="w-full flex flex-col my-10">
            <button
              type="submit"
              className="bg-teal-600 py-2 rounded-md text-gray-100 font-semibold hover:bg-teal-400 transition-all duration-500"
            >
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
