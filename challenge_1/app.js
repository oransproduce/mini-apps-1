// State:
class Storage {
  constructor() {
    this._state = [[],[],[]];
    this.numTurns = 0;
  }

  addToState(row, col) {
    let rows = {row: 0, row1: 1, row2: 2};
    let cols = {one: 0, two: 1, three: 2};
    if (this.numTurns % 2 === 0) {
      this._state[rows[row]][cols[col]] = 'X';
    } else {
      this._state[rows[row]][cols[col]] = 'O';
    }
    this.numTurns++;
    renderState(this);
    this.checkWin();
  }

  checkWin() {
    let potentialWin = this.checkDiagnols();
    if (potentialWin) {
      alert('Player ' + potentialWin + ' has won!');
    }
    potentialWin = this.checkHorizontals();
    if (potentialWin) {
      alert('Player ' + potentialWin + ' has won!');
    }
    potentialWin = this.checkVerticals();
    if (potentialWin) {
      alert('Player ' + potentialWin + ' has won!');
    }
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

// Set up event listeners
let rows = ['row', 'row1', 'row2'];
let columns = [0, 1, 2];
let storage = new Storage();

for (let row of rows) {
  for (let column of columns) {
    let element = document.getElementsByClassName(row)[0].children[column];
    element.addEventListener('click', event => {
      console.log(event.path[0].id, '\n', event.path[1].className);
      storage.addToState(event.path[1].className, event.path[0].id);
    })
  }
}

document.getElementById('restart').addEventListener('click', event => {
  console.log('clicked');
  storage = new Storage();
  clearState();
})

// RenderState
function renderState(storage) {
  let rows = [0, 1, 2];
  let cols = [0, 1, 2];
  let rowDict = {0: 'row', 1: 'row1', 2: 'row2'};

  for (let row of rows) {
    for (let col of cols) {
      if (storage._state[row][col]) {
        let element = document.createElement('span');
        element.textContent = storage._state[row][col];
        element.className = 'piece';
        let gridElement = document.getElementsByClassName(rowDict[row])[0].children[col];
        if (gridElement.children.length === 0) {
          document.getElementsByClassName(rowDict[row])[0].children[col].append(element);
        }

      }
    }
  }
}

function clearState() {
  let rows = [0, 1, 2];
  let cols = [0, 1, 2];
  let rowDict = {0: 'row', 1: 'row1', 2: 'row2'};

  for (let row of rows) {
    for (let col of cols) {
      let gridElement = document.getElementsByClassName(rowDict[row])[0].children[col];
      gridElement.innerHTML = '';
    }
  }
}

