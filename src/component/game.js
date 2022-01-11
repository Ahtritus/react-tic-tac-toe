import React, { useState } from "react";
import Board from "./board";
import { calculateWinner } from "../helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  /*

    history = [[1,2,3], [4,5,6], [7,8,9]]
    historyPoint = [[1,2,3], [4,5,6]]

    current = historyPoint[0] = [1,2,3]

    */
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    //return if already occupied or won
    if (squares[i] || winner) return;

    // select the square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <div>
      <h1>React Tic-Tac-Toe with Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <h3> {winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
    </div>
  );
};

export default Game;
