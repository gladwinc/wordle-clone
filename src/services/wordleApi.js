import axios from "axios";

const API_URL = "https://wordle-apis.vercel.app/api/validate";

export const validateGuess = async (guess) => {
  try {
    const response = await axios.post(`${API_URL}`, { guess });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return { isvalidword: false, score: [], error: "API Request Failed" };
  }
};
