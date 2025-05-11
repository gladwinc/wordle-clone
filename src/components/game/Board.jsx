import Row from "./Row";
import { GAME_CONFIG } from "../../constants/gameConstants";

const Board = ({ guesses = [], scores = [], currentGuess = "" }) => {
  const rows = [];

  // Add completed guess rows
  for (let i = 0; i < guesses.length; i++) {
    rows.push(<Row key={i} word={guesses[i]} score={scores[i]} />);
  }

  // Add current guess row
  if (guesses.length < GAME_CONFIG.MAX_ATTEMPTS) {
    rows.push(<Row key="current" word={currentGuess} />);
  }

  // Add remaining empty rows
  while (rows.length < GAME_CONFIG.MAX_ATTEMPTS) {
    rows.push(<Row key={`empty-${rows.length}`} />);
  }

  return <div className="flex flex-col items-center">{rows}</div>;
};

export default Board;
