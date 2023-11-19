import React, { useState } from "react";
import Board from "./components/Board";
import PlayerSelector from "./components/PlayerSelector";

function Game() {
  const [playMode, setPlayMode] = useState(null);

  const handleClick = (selectedPlayMode) => {
    setPlayMode(selectedPlayMode);
  };

  console.log(playMode);

  return (
    <div className="min-h-screen bg-red-500">
      <p className="text-center text-yellow-400 text-[65px] font-light font-['Inter'] cursor-pointer" onClick={() => handleClick(null)}>
        tic-tac-toe
      </p>
      {playMode === null ? (
        <PlayerSelector
          onClick={(selectedPlayMode) => handleClick(selectedPlayMode)}
        />
      ) : (
        <Board playMode={playMode} />
      )}
    </div>
  );
}

export default Game;
