import React from 'react';
import Cell from './cell.jsx';
let Row = (props) => {
  return (
  <tr>
    {props.xArray.map(x => <Cell piece={props.rowStorage[x]}x={x} y={props.y} key={x} addPiece={props.addPiece}/>)}
  </tr>
  )
};

export default Row;