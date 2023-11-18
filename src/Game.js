import React, { useState } from "react";
import Board from "./components/Board";

function Game() {

  return (
    <div className="min-h-screen bg-red-500">
      <p className="text-center text-yellow-400 text-[65px] font-light font-['Inter']">tic-tac-toe</p>
      <Board />
    </div>
  );
}

export default Game;
