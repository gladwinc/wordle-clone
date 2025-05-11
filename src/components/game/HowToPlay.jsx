const HowToPlay = () => {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-100 pb-3">
          How to Play
        </h2>
        <p className="text-gray-600 mb-5">
          Guess the 5-letter word. After each guess, the letters will change
          colour to indicate what is right and wrong.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded bg-green-100 mr-3 flex items-center justify-center">
              <span className="text-green-600 font-bold">A</span>
            </div>
            <span className="text-gray-600">
              Letter is in the correct position
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded bg-yellow-100 mr-3 flex items-center justify-center">
              <span className="text-yellow-600 font-bold">B</span>
            </div>
            <span className="text-gray-600">
              Letter is in the word but wrong position
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded bg-gray-200 mr-3 flex items-center justify-center">
              <span className="text-gray-500 font-bold">C</span>
            </div>
            <span className="text-gray-600">Letter is not in the word</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
