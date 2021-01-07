import React from 'react';
import _ from 'underscore';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.x = _.range(7);
    this.y = _.range(6);

    let storage = this.makeNewStorage();

    this.state = {
      _storage: storage,
      numTurns: 0
    }
    this.addPiece = this.addPiece.bind(this);
  }

  makeNewStorage() {
    let newStorage = [];
    for (let y of this.y) {
      let newRow = [];
      for (let x of this.x) {
        newRow.push(0);
      }
      newStorage.push(newRow);
    }
    return newStorage;
  }

  makeCopyStorage() {
    let newStorage = [];
    for (let y of this.y) {
      let newRow = this.state._storage[y].slice();
      newStorage.push(newRow);
    }
    return newStorage;
  }

  pieceExists(x, y) {
    return this.state._storage[y][x] !== 0;
  }

  addPiece(x, y) {
    let newStorageState = this.makeCopyStorage();
    let newPiece = this.state.numTurns % 2 === 0 ? 'X' : 'O';
    if (!this.pieceExists(x, y)) {
      newStorageState[y][x] = newPiece;
      this.setState({
        _storage: newStorageState
      });
      this.setState(state => ({
        numTurns: state.numTurns + 1
      }));
      this.checkWin(newStorageState, this.state.numTurns+1);
    }

  }

  checkVerticals(storage) {
    for (let x of this.x) {
      for (let y of this.y.slice(0, -3)) {
        if (storage[y][x] === 'X' && storage[y+1][x] === 'X' && storage[y+2][x] === 'X' && storage[y+3][x] === 'X') {
          return 'X';
        } else if (storage[y][x] === 'O' && storage[y+1][x] === 'O' && storage[y+2][x] === 'O' && storage[y+3][x] === 'O') {
          return 'O';
        }
      }
    }
  }

  checkHorizontals(storage) {
    for (let y of this.y) {
      for (let x of this.x.slice(0, -3)) {
        console.log('checking');
        if (storage[y][x] === 'X' && storage[y][x+1] === 'X' && storage[y][x+2] === 'X' && storage[y][x+3] === 'X') {
          return 'X';
        } else if (storage[y][x] === 'O' && storage[y][x+1] === 'O' && storage[y][x+2] === 'O' && storage[y][x+3] === 'O') {
          return 'O';
        }
      }
    }
  }

  checkTopLeftToBottomRightDiagnols(storage) {
    let startingSquares = [[2, 0], [1, 0], [0, 0], [0, 1], [0, 2], [0, 3]];
    for (let [y, x] of startingSquares) {
      while(x < this.x.length-3 && y < this.y.length-3) {
        console.log('checking');
        if (storage[y][x] === 'X' && storage[y+1][x+1] === 'X' && storage[y+2][x+2] === 'X' && storage[y+3][x+3] === 'X') {
          return 'X';
        } else if (storage[y][x] === 'O' && storage[y+1][x+1] === 'O' && storage[y+2][x+2] === 'O' && storage[y+3][x+3] === 'O') {
          return 'O';
        }
        x++;
        y++;
      }
    }
  }

  checkTopRightToBottomLeftDiagnols(storage) {
    let startingSquares = [[2, 6], [1, 6], [0, 6], [0, 5], [0, 4], [0, 3]];
    for (let [y, x] of startingSquares) {
      while (y < this.y.length-3 && x >= 0) {
        if (storage[y][x] === 'X' && storage[y+1][x-1] === 'X' && storage[y+2][x-2] === 'X' && storage[y+3][x-3] === 'X') {
          return 'X';
        } else if (storage[y][x] === 'O' && storage[y+1][x-1] === 'O' && storage[y+2][x-2] === 'O' && storage[y+3][x-3] === 'O') {
          return 'O';
        }
        x--;
        y++;
      }
    }
  }

  checkWin(storage, numTurns) {
    let possibleHorizontals = this.checkHorizontals(storage);
    if (possibleHorizontals) {
      alert(possibleHorizontals + ' has won!');
      window.location.reload(false);

    }
    let possibleVerticals = this.checkVerticals(storage);
    if (possibleVerticals) {
      alert(possibleVerticals + ' has won!');
      window.location.reload(false);

    }
    let possibleMajor = this.checkTopLeftToBottomRightDiagnols(storage);
    if (possibleMajor) {
      alert(possibleMajor + ' has won!');
      window.location.reload(false);

    }
    let possibleMinor = this.checkTopRightToBottomLeftDiagnols(storage);
    if (possibleMinor) {
      alert(possibleMinor + ' has won!');
      window.location.reload(false);

    }
    if (numTurns === this.x.length*this.y.length) {
      alert('Draw');
      window.location.reload(false);
    }
  }
  render() {
    return (
      <div className='container'>
        <h1>Connect4</h1>
        <Board storage={this.state._storage} xArray={this.x} yArray={this.y} addPiece={this.addPiece}/>
      </div>

    )
  }
};

export default App;

