import { GAME_STATUS } from "../../constants/gameConstants";

const GameStatus = ({ gameStatus }) => {
  if (gameStatus === GAME_STATUS.IN_PROGRESS) return null;

  return (
    <div
      className={`w-full text-center p-4 rounded-lg mb-5 ${
        gameStatus === GAME_STATUS.WON
          ? "bg-green-50 text-green-700 border border-green-50"
          : "bg-red-50 text-red-700 border border-red-50"
      }`}>
      {gameStatus === GAME_STATUS.WON ? (
        <p className="text-lg font-bold">You Won!</p>
      ) : (
        <p className="text-lg font-bold">Game Over</p>
      )}
    </div>
  );
};

export default GameStatus;
