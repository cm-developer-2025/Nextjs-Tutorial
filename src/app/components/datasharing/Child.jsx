"use client";

function Child({ getData }) {
  return (
    <div>
      Child
      <div className="my-10">
        <button
          onClick={() => getData(2000)}
          className="bg-sky-700 text-white px-10 py-2"
        >
          Click On This Button
        </button>
      </div>
    </div>
  );
}

export default Child;
