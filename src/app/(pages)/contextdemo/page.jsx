import CompA from "@/app/components/contextdemo/CompA";

const justwait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  });
};

// Promise is handled by asynchronous function using async/await

async function page() {
  const res = await justwait();
  console.log(res);
  return (
    <div className="min-h-screen flex max-w-3xl mx-auto justify-center items-center">
      <div className="text-xl">
        <h1>Context Example</h1>
        <CompA />
      </div>
    </div>
  );
}

export default page;
