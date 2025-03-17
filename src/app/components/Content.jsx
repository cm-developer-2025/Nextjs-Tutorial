import React from "react";

function Content() {
  return (
    <div className="flex max-w-6xl justify-center mx-auto border">
      <div className="my-20 mx-5 w-full gap-5 flex  flex-col justify-between lg:mx-auto lg:flex-row">
        {/* Portfolio content  */}
        <div className="w-full shadow-xl p-5 rounded-xl">
          <h1 className="text-4xl text-gray-200 py-4 ">Hello! from Rishav</h1>
          <h2 className="text-lg text-gray-400 py-2">Welcome to my Page</h2>
          <p className="text-sm text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos
            beatae quis aperiam reprehenderit reiciendis neque facilis maxime
            facere delectus iste voluptate temporibus, obcaecati recusandae
            ratione iure sed? Aliquid natus ullam repellat numquam sed minus ex
            sunt. Reiciendis ea consectetur quod temporibus sunt tenetur tempora
            ad at, eaque sequi ipsam.
          </p>
        </div>
        {/* Image Section  */}
        <div className="w-full border">Images</div>
      </div>
    </div>
  );
}

export default Content;
