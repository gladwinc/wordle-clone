import {
  LETTER_STATUS_CODE,
  LETTER_STATUS_COLORS,
} from "../../constants/gameConstants";

const HowToPlay = () => {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-100 pb-3">
          How to Play
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Guess the 5-letter word in six tries. After each guess, the letters
          will change colour to indicate what is right and wrong.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded mr-3 flex items-center justify-center ${
                LETTER_STATUS_COLORS[LETTER_STATUS_CODE.CORRECT_POSITION]
              }`}>
              <span className="font-semibold">A</span>
            </div>
            <span className="text-gray-600 text-sm">
              Letter is in the correct position
            </span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded mr-3 flex items-center justify-center ${
                LETTER_STATUS_COLORS[LETTER_STATUS_CODE.WRONG_POSITION]
              }`}>
              <span className="font-bold">B</span>
            </div>
            <span className="text-gray-600 text-sm">
              Letter is in the word but wrong position
            </span>
          </div>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded mr-3 flex items-center justify-center ${
                LETTER_STATUS_COLORS[LETTER_STATUS_CODE.NOT_IN_WORD]
              }`}>
              <span className="font-bold">C</span>
            </div>
            <span className="text-gray-600 text-sm">
              Letter is not in the word
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
