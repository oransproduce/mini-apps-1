import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    this.props.addPiece(this.props.x, this.props.y);
  }

  render() {
    let element = this.props.piece === 0 ? '' : this.props.piece;
    return (
      <td onClick={this.click}>{element}</td>
    );
  }
}

export default Cell;
