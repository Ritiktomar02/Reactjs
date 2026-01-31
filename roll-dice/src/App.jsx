import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);

    setTimeout(() => {
      setNumber(Math.floor(Math.random() * 6) + 1);
      setRolling(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-center">
      <div className="bg-gray-900 text-white p-8 rounded-xl flex flex-col items-center gap-6">
        
        <h1 className="text-xl font-bold uppercase">Dice Roll</h1>

        <div
          className={`w-24 h-24 bg-white text-black flex items-center justify-center 
          text-4xl font-bold rounded-lg transition-transform duration-500
          ${rolling ? "animate-spin scale-110" : ""}`}
        >
          {number === 0 ? "🎲" : number}
        </div>

        <button
          onClick={rollDice}
          disabled={rolling}
          className="px-6 py-2 bg-green-500 rounded transition hover:bg-green-700 disabled:opacity-50"
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default App;
