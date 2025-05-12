import { useState, useCallback, useEffect } from "react";
import { validateGuess } from "../services/wordleApi";
import {
  KEYS,
  ERROR_MESSAGES,
  LETTER_STATUS_CODE,
  GAME_STATUS,
  API_RESPONSE_KEYS,
  GAME_CONFIG,
} from "../constants/gameConstants";

export const useWordle = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [scores, setScores] = useState([]);
  const [error, setError] = useState("");
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IN_PROGRESS);

  const handleKeyInput = useCallback(
    async (e) => {
      if (gameStatus !== GAME_STATUS.IN_PROGRESS) return;

      const keyPressed = e.key.toUpperCase();
      const uppercaseGuess = currentGuess.toUpperCase();

      if (keyPressed === KEYS.ENTER) {
        if (uppercaseGuess.length < GAME_CONFIG.WORD_LENGTH) {
          setError(ERROR_MESSAGES.NOT_ENOUGH_LETTERS);
          return;
        }

        if (guesses.includes(uppercaseGuess)) {
          setError(ERROR_MESSAGES.DUPLICATE_WORD);
          return;
        }

        const result = await validateGuess(uppercaseGuess);

        if (!result[API_RESPONSE_KEYS.IS_VALID_WORD]) {
          setError(ERROR_MESSAGES.INVALID_WORD);
          return;
        }

        setGuesses((prev) => [...prev, uppercaseGuess]);
        setScores((prev) => [...prev, result[API_RESPONSE_KEYS.SCORE]]);
        setCurrentGuess("");
        setError("");

        if (
          result[API_RESPONSE_KEYS.SCORE].every(
            (s) => s === LETTER_STATUS_CODE.CORRECT_POSITION
          )
        ) {
          setGameStatus(GAME_STATUS.WON);
        } else if (guesses.length + 1 >= GAME_CONFIG.MAX_ATTEMPTS) {
          setGameStatus(GAME_STATUS.LOST);
        }
      } else if (keyPressed === KEYS.BACKSPACE) {
        setCurrentGuess((prev) => prev.slice(0, -1));
        setError("");
      } else if (
        /^[A-Z]$/.test(keyPressed) &&
        currentGuess.length < GAME_CONFIG.WORD_LENGTH
      ) {
        setCurrentGuess((prev) => prev + keyPressed);
        setError("");
      }
    },
    [currentGuess, guesses, gameStatus]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyInput);

    return () => {
      window.removeEventListener("keydown", handleKeyInput);
    };
  }, [handleKeyInput]);

  return {
    currentGuess,
    guesses,
    scores,
    error,
    gameStatus,
  };
};

export default useWordle;
