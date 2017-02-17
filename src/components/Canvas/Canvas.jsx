import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar';

import draw from '../../controllers/canvas';
import './Canvas.css';
import '../../controllers/canvas.js';

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: null
    };
  }

  componentDidMount() {
    this.setState({canvas: draw()});
  }

  render() {
    return (
      <div className='drawing'>
        <canvas id='canvas' width={window.innerWidth * 0.75} height={window.innerHeight * 0.75}/>
        <Toolbar className='draw-chat-tools'>
        <RaisedButton
          onClick={this.state.canvas && this.state.canvas.clear}
          label='Clear'/>
        <RaisedButton
          onClick={this.state.canvas && this.state.canvas.save}
          label='Save'/>
          <RaisedButton
          onClick={this.state.canvas && this.state.canvas.save}
          label='Chat'/>
          </Toolbar>
      </div>
    );
  }
}

export default Canvas;