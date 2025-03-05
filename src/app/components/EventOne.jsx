export default function EventOne() {
  function display() {
    console.log("Hello User");
  }
  function displayOne() {
    console.log("Click Me Again");
  }
  return (
    <div>
      <button
        onClick={display}
        className="bg-sky-700 m-10 text-white px-10 py-2 rounded-md font-semibold"
      >
        Hello User
      </button>
      <div>
        <button
          onClick={displayOne}
          className="bg-sky-700 m-10 text-white px-10 py-2 rounded-md font-semibold"
        >
          Click Me Again
        </button>
      </div>
    </div>
  );
}
