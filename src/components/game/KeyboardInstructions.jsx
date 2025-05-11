import React from "react";

const KeyboardInstructions = () => {
  return (
    <div className="w-full bg-gray-50 rounded-xl p-5 text-center">
      <p className="text-sm font-medium text-gray-600 mb-3">
        Type on your keyboard to begin
      </p>
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center bg-white border border-gray-200 px-3 py-1 rounded font-semibold text-xs">
            ENTER
          </span>
          <span className="ml-2">to submit</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center bg-white border border-gray-200 px-3 py-1 rounded font-semibold text-xs">
            BACKSPACE
          </span>
          <span className="ml-2">to delete</span>
        </div>
      </div>
    </div>
  );
};

export default KeyboardInstructions;
