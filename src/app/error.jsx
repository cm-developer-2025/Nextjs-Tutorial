"use client";
function ErrorPage({ error, reset }) {
  console.log(error);
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto max-w-4xl">
      OOOOPs !! Error Occured
      <p>
        <button className="bg-orange-600 text-gray-100" onClick={() => reset()}>
          Reset Page
        </button>
      </p>
    </div>
  );
}

export default ErrorPage;
