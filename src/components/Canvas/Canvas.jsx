import React from 'react';

import './Canvas.css';

class Canvas extends React.Component {
  update() {}
  render() {
    return (
      <canvas ref='draw' id='canvas' width={300} height={300} />
    );
  }
}

export default Canvas;