import React from 'react';

import draw from '../../controllers/canvas';
import './Canvas.css';
import '../../controllers/canvas.js';

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: null
    }
  }

  componentDidMount() {
   this.setState({canvas: draw()});
  }

  render() {
    return (
      <div>
        <canvas id='canvas' width='40%' height='40%'/>
        <button
          onClick={this.state.canvas && this.state.canvas.clear}
          >Clear</button>
          <button
            onClick={this.state.canvas && function (){
              console.log(this.state.canvas.save())
            }}
          >Save</button>
           <button
            onClick={this.state.stored && function (){
              this.load(this.state.stored);
            }}
          >Restore</button>
      </div>
    );
  }
}

export default Canvas;