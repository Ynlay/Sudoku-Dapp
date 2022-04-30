// import logo from './logo.svg';
import generator from "sudoku";
import './App.css';
import SudokuBoard from "./components/SudokuBoard";
import { Component } from 'react';

window.generator = generator;

/* Generate a sudoku with the structure 
[{rows: [{row: 0, col: 0, value : 1, readonly: true}, ...}], ...}]

*/
function generateSudoku() {
  const raw = generator.makepuzzle();
  const result = {rows: []}

  for (let i=0; i<9; i++) {
    const row = {cols: [], index: i}
    for (let j=0; j<9; j++) {
      const value = raw[i*9+j]
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;

}

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      sudoku: generateSudoku()
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Sudurkle
          </h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku}/>
      </div>
    );
  }
}

export default App;
