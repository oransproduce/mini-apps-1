import React from 'react';
import Row from './row.jsx';

let Board = (props) => {
  return (
  <table>
    <thead></thead>
    <tbody>
      {props.yArray.map(y => <Row rowStorage={props.storage[y]}y={y} xArray={props.xArray} key={y} addPiece={props.addPiece}/>)}
    </tbody>

  </table>
  )
};

export default Board;