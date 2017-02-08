import React from 'react';

import draw from '../../utils/draw';
import './Canvas.css';

class Canvas extends React.Component {
  update() {}

  componentDidMount(){
    draw();
  }
  render() {
    return (
      <canvas ref='draw' id='canvas' width={300} height={300} />
    );
  }
}

export default Canvas;