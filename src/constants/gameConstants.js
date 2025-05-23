export const KEYS = {
  ENTER: "ENTER",
  BACKSPACE: "BACKSPACE",
};

export const GAME_CONFIG = {
  WORD_LENGTH: 5,
  MAX_ATTEMPTS: 6,
};

// Letter status codes (from API)
export const LETTER_STATUS_CODE = {
  CORRECT_POSITION: 2,
  WRONG_POSITION: 1,
  NOT_IN_WORD: 0,
};

export const LETTER_STATUS_COLORS = {
  [LETTER_STATUS_CODE.CORRECT_POSITION]:
    "bg-green-600 border-green-600 text-white",
  [LETTER_STATUS_CODE.WRONG_POSITION]:
    "bg-yellow-600 border-yellow-600 text-white",
  [LETTER_STATUS_CODE.NOT_IN_WORD]: "bg-gray-600 border-gray-600 text-white",
  DEFAULT: "bg-white border-gray-600 border-3 text-black",
};

export const ERROR_MESSAGES = {
  DUPLICATE_WORD: "You already tried that word",
  INVALID_WORD: "Not in word list",
  NOT_ENOUGH_LETTERS: "Not enough letters",
};

export const GAME_STATUS = {
  WON: "won",
  LOST: "lost",
  IN_PROGRESS: "in_progress",
};

export const API_RESPONSE_KEYS = {
  IS_VALID_WORD: "is_valid_word",
  SCORE: "score",
};
