let render = {
  renderState: function(row, col, toRender) {
    let gridElement = document.getElementsByTagName('table')[0].tBodies[0].children[row].children[col];
    gridElement.textContent = toRender;
  },

  clearState: function() {
    let rows = [0, 1, 2];
    let cols = [0, 1, 2];
    for (let row of rows) {
      for (let col of cols) {
        console.log('clearing');
        render.renderState(row, col, '');
      }
    }
  }

}

// State:
class Storage {
  constructor() {
    this._state = [[],[],[]];
    this.numTurns = 0;
  }

  addToState(row, col) {
    if (!this._state[row][col]) {
      console.log(row, col);
      if (this.numTurns % 2 === 0) {
        this._state[row][col] = 'X';
      } else {
        this._state[row][col] = 'O';
      }

      this.numTurns++;
      render.renderState(row, col, this._state[row][col]);

      this.checkWin();
    }

  }

  checkWin() {
    let potentialWin = this.checkDiagnols();
    if (potentialWin) {
      this.onWin(potentialWin)
    }
    potentialWin = this.checkHorizontals();
    if (potentialWin) {
      this.onWin(potentialWin);
    }
    potentialWin = this.checkVerticals();
    if (potentialWin) {
      this.onWin(potentialWin);
    }
    if (this.numTurns === 9) {
      alert('Draw');
    }
  }

  onWin(whichPlayer) {
    alert('Player ' + whichPlayer + ' has won!');
    render.clearState();
  }

  checkDiagnols() {
    if (this._state[0][0] === 'X' && this._state[1][1] === 'X' && this._state[2][2] === 'X') {
      return 'X';
    } else if (this._state[0][0] === 'O' && this._state[1][1] === 'O' && this._state[2][2] === 'O') {
      return 'O';
    } else if (this._state[2][0] === 'X' && this._state[1][1] === 'X' && this._state[0][2] === 'X') {
      return 'X';
    } else if (this._state[2][0] === 'O' && this._state[1][1] === 'O' && this._state[0][2] === 'O') {
      return 'O';
    }
  }

  checkHorizontals() {
    for (let i = 0; i < this._state.length; i++) {
      let row = this._state[i];
      if (row.filter(individual => individual === 'X').length > 2) {
        return 'X'
      } else if (row.filter(individual => individual === 'O').length > 2) {
        return 'O';
      }
    }
  }

  checkVerticals() {
    for (let col = 0; col < 3; col++) {
      let countX = 0;
      let countY = 0;
      for (let row = 0; row < 3; row++) {
        if (this._state[row][col] === 'X') {
          countX++;
        }
        if (this._state[row][col] === 'O') {
          countY++;
        }
      }
      if (countX === 3) {
        return 'X';
      }
      if (countY === 3) {
        return 'Y';
      }
    }
  }


}


let storage = new Storage();

let element = document.getElementsByTagName('table')[0];
element.addEventListener('click', event => {
  console.log(event);
  storage.addToState(event.path[1].rowIndex, event.path[0].cellIndex);
});

document.getElementById('restart').addEventListener('click', event => {
  storage = new Storage();
  render.clearState();
})


