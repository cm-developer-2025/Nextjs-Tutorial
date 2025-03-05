function PracticeOne({ name }) {
  let num = 3;

  function handlePractice() {
    console.log("PracticeOne: handlePractice");
  }
  function increaseNumber() {
    num++;
    console.log("clicked on number", num);
  }
  return (
    <div>
      PracticeOne : {name}
      <div>
        <button
          onClick={handlePractice}
          className="px-10 py-2 bg-blue-800 text-gray-100"
        >
          Practice One
        </button>
        <div>
          Number is {num}
          <div>
            <button
              onClick={increaseNumber}
              className="bg-gray-800 text-white px-10 py-2 "
            >
              Increase Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeOne;
