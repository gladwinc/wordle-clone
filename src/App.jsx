import useWordle from "./hooks/useWordle";
import Layout from "./components/layout/Layout";
import Board from "./components/game/Board";
import ErrorMessage from "./components/game/ErrorMessage";
import GameStatus from "./components/game/GameStatus";

function App() {
  const { currentGuess, guesses, scores, error, gameStatus } = useWordle();

  return (
    <Layout>
      <ErrorMessage error={error} />
      <GameStatus gameStatus={gameStatus} />
      <Board guesses={guesses} scores={scores} currentGuess={currentGuess} />
    </Layout>
  );
}

export default App;
