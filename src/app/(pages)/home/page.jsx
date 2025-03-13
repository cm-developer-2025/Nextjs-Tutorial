import NavBar from "@/app/components/NavBar";
import Image from "next/image";

function page() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="min-h-screen flex justify-center items-center mx-auto w-full">
        {/* <img src="/images/one.svg" alt="" height={300} width={300} /> */}

        <Image src="/images/one.svg" alt="" height={300} width={300} />
      </div>
    </>
  );
}

export default page;
