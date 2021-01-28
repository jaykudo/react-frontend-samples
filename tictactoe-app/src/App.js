import React, { useEffect, useState } from "react";
import "./App.css";

const initMatrix = [];
function App() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("o");
  const [selR, setSelR] = useState(null);
  const [selC, setSelC]= useState(null);
  const [winner, setWinner] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setWinner(false);
    setSelC(null);
    setSelR(null);

    const row = new Array(matrixSize).fill(null);

    const tempMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }

    setMatrix(tempMatrix);
  }, [reset]);

  function squareClickHandle(r, c) {
    if(!matrix[r][c] && !winner) {
      setSelC(c);
      setSelR(r);
      let nextPlayer = currentPlayer === "x" ? "o" : "x";
      setCurrentPlayer(nextPlayer);
      const matrixCopy = [...matrix];
      matrixCopy[r][c] = nextPlayer;
      setMatrix(matrixCopy);
    }
  }

  function isWinner() {
    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;

    if(selC === null || selR === null){
      return;
    }

    for(let i = 0; i < matrixSize; i++) {
      if (matrix[i][selC] !== currentPlayer) {
        vertical = false;
      }
      if(matrix[selR][i] !== currentPlayer) {
        horizontal = false;
      }
      if(matrix[i][i] !== currentPlayer) {
        d1 = false;
      }
      if(matrix[i][matrixSize - i - 1] !== currentPlayer) {
        d2 = false;
      }
    }

    if (horizontal || vertical || d1 || d2) {
      setWinner(true);
    }
  }

  useEffect(() => {
    if(!winner) {
      isWinner();
    }
  })

  function resetGameHandle() {
    setReset(!reset);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={resetGameHandle}>Reset</button>
        <div>
          {matrix.map((val, c) => (
            <div className="c">
              {val.map((val1, r) => (
                <div
                  key={`${r}`}
                  onClick={() => {
                    squareClickHandle(r, c);
                  }}
                  className="r"
                >{matrix[r][c]}</div>
              ))}
            </div>
          ))}
        </div>
        <h2>{winner ? `Player ${currentPlayer} is a winner` : '' }</h2>
      </header>
    </div>
  );
}

export default App;
