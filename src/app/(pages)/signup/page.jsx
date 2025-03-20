"use client";
import { useForm } from "react-hook-form";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleMyForm = (formData) => {
    const { username, emailId } = formData;
    console.log("Username is ", username);
    console.log("Email ID is ", emailId);
  };
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center">
      <div className="w-full mx-10">
        <form
          onSubmit={handleSubmit(handleMyForm)}
          className="flex flex-col gap-10"
        >
          <fieldset className="flex flex-col">
            <label>Username</label>
            <input
              className="outline-none px-2 py-1 border border-sky-400 rounded-md"
              type="text"
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 10,
              })}
            />
            {
              // optional chaining : ?.

              errors.username?.type == "required" && (
                <p className="text-red-500">Username required</p>
              )
            }
            {errors.username?.type == "minLength" && (
              <p className="text-red-500">At least 4 character required</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col">
            <label>Email</label>
            <input
              className="outline-none px-2 py-1 border border-sky-400 rounded-md"
              type="email"
              {...register("emailId", { required: true })}
            />
            {errors.emailId?.type == "required" && (
              <p className="text-red-500">EmailId Required</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col">
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md"
            >
              Signup
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default page;
