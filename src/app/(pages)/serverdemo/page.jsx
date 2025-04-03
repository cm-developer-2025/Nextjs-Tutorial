// import React from "react";

// function page() {
//   const handleForm = async (formData) => {
//     "use server";

//     const username = formData.get("username");
//     const password = formData.get("password");
//     console.log("Username", username);
//     console.log("Password", password);
//   };
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center mx-auto">
//       <form action={handleForm}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             className="border px-2 py-1"
//             type="text"
//             id="name"
//             name="username"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             className="border px-2 py-1"
//             type="password"
//             id="password"
//             name="password"
//           />
//         </div>
//         <div className="my-5">
//           <button className="bg-sky-700 text-white px-10 py-2">
//             Save Data
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default page;
//---------------------------------------------------

// Refactoring of code
import { handleForm } from "@/app/actions/formAction";

function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto">
      <form action={handleForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border px-2 py-1"
            type="text"
            id="name"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border px-2 py-1"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="my-5">
          <button className="bg-sky-700 text-white px-10 py-2">
            Save Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
