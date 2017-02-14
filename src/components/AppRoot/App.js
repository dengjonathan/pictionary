import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderBar from '../AppBar/AppBar';
import Canvas from '../Canvas/Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <HeaderBar/>
          <Canvas/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
