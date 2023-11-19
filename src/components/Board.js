import React, { useState, useEffect } from "react";
import Square from "../Square";
import TurnIndicator from "./TurnIndicator";
import WinnerIndicator from "./WinnerIndicator";

function Board({ playMode }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const borderStyle = {
    borderRight: "border-r-2",
    borderBottom: "border-b-2",
    borderTop: "border-t-2",
  };

  // Single Player algorithm
  const miniMaxAlgo = (squares, isMax) => {
    const winner = calculateWinner(squares);
    if (winner === "X") return -10;
    if (winner === "O") return 10;
    if (winner === "Draw") return 0;

    if (isMax) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = "O";
          bestScore = Math.max(bestScore, miniMaxAlgo(squares, false));
          squares[i] = null;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = "X";
          bestScore = Math.min(bestScore, miniMaxAlgo(squares, true));
          squares[i] = null;
        }
      }
      return bestScore;
    }
  };

  const findBestMove = (squares) => {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = "O";
        let score = miniMaxAlgo(squares, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    if (calculateWinner(squares) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    // Check if it's computer's turn in single player mode
    if (playMode === "singlePlayer" && !xIsNext && !calculateWinner(squares)) {
      const bestMove = findBestMove(squares);
      if (bestMove !== undefined) {
        const squaresCopy = [...squares];
        squaresCopy[bestMove] = "O";
        setSquares(squaresCopy);
        setXIsNext(true); // Switch back to player's turn
      }
    }
  }, [squares, xIsNext, playMode]);

  const handleResetClick = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i, borderRight, borderBottom, borderTop) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        style={{ borderRight, borderBottom, borderTop }}
      />
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    let squareFillCount = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] !== null) squareFillCount++;
    }

    if (squareFillCount === 9) {
      return "Draw";
    }

    return null;
  }

  return (
    <div className="grid grid-rows-[max-content_1fr] text-center gap-4 mt-8 ml-8 mr-8 justify-items-center items-center">
      <TurnIndicator turn={xIsNext ? "X" : "O"} />
      <div className="w-128 h-128 grid grid-cols-3">
        <div className="board-row border-r-2 border-yellow-400">
          {renderSquare(0, "", borderStyle.borderBottom, "")}
          {renderSquare(1, "", borderStyle.borderBottom, "")}
          {renderSquare(2, "", "", "")}
        </div>
        <div className="board-row border-r-2 border-yellow-400">
          {renderSquare(3, "", borderStyle.borderBottom, "")}
          {renderSquare(4, "", borderStyle.borderBottom, "")}
          {renderSquare(5, "", "", "")}
        </div>
        <div className="board-row">
          {renderSquare(6, "", borderStyle.borderBottom, "")}
          {renderSquare(7, "", borderStyle.borderBottom, "")}
          {renderSquare(8, "", "", "")}
        </div>
      </div>
      {winner !== null && (
        <WinnerIndicator winner={winner} onClick={() => handleResetClick()} />
      )}
    </div>
  );
}

export default Board;
