import React, { useState } from "react";
import Board from "./Board";

function Game() {

  return (
    <div className="App">
      <p className="text-center text-4xl font-medium">tic-tac-toe</p>
      <Board />
    </div>
  );
}

export default Game;
