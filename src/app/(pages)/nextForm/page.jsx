import { nextFormHandle } from "@/app/actions/formAction";
import Form from "next/form";
function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto">
      <Form action={nextFormHandle}>
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
      </Form>
    </div>
  );
}

export default page;
