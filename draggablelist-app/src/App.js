import React, {useEffect, useState} from 'react';
import './App.css';

const initMatrix = [];
function App() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matriSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("o");

  useEffect(()=> {
    const row = new Array(matrixSize).fill(null);

    const tempMatrix = [];

    for(let i=0; i<matrixSize; i++) {
      tempMatrix.push([...row]);
    }

    setMatrix(tempMatrix);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            matrix.map((val, c) => {
              <div>
                {val.map(() =>(
                  <div>hi</div>
                ))}
              </div>
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
