import KeyboardInstructions from "../game/KeyboardInstructions";
import HowToPlay from "../game/HowToPlay";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl">
        <header className="w-full text-center py-5 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-gray-700">Wordle Clone</h1>
        </header>
        <div className="w-full flex flex-col items-center p-6">
          {children}
          <div className="w-full mt-6">
            <KeyboardInstructions />
          </div>
        </div>
      </div>
      <div className="w-full mt-10 max-w-md">
        <HowToPlay />
      </div>
    </div>
  );
};

export default Layout;
