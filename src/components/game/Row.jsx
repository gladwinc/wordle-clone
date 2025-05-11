import {
  LETTER_STATUS_COLORS,
  GAME_CONFIG,
} from "../../constants/gameConstants";

const Row = ({ word = "", score = [] }) => {
  const cells = Array(GAME_CONFIG.WORD_LENGTH).fill("");

  if (word) {
    word.split("").forEach((letter, i) => {
      if (i < GAME_CONFIG.WORD_LENGTH) cells[i] = letter;
    });
  }

  return (
    <div className="flex gap-2 mb-2">
      {cells.map((letter, i) => {
        const color = letter
          ? LETTER_STATUS_COLORS[score[i]] || LETTER_STATUS_COLORS.DEFAULT
          : "";

        return (
          <div
            key={i}
            className={`w-12 h-12 border-2 border-gray-300 flex items-center justify-center text-2xl font-bold ${color}`}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
