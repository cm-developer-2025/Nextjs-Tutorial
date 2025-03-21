import CompA from "@/app/components/contextdemo/CompA";

function page() {
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
