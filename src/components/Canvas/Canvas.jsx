import React from 'react';

import draw from '../../controllers/canvas';
import './Canvas.css';
import '../../controllers/canvas.js';

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      ctx: null
    };
  }

  componentDidMount() {
    draw();
  }
  
  render() {
    return (
      <div>
        <canvas ref='draw' id='canvas' width={300} height={300}/>
        <button
          onClick={this.state.ctx
          ? () => {
            this.state.ctx.save();
            this.state.ctx.clearRect(0, 0, 300, 300);
            this.state.ctx.restore();
          }
          : function () {}}>Clear</button>
          <button
            onClick={this.state.ctx ?
              () => this.state.ctx.restore()
              : function(){}
          }
          >Restore</button>
      </div>
    );
  }
}

export default Canvas;