import React, { Component } from 'react';
import './App.css';
import MapStateManager from './components/map-state-manager'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapStateManager />
      </div>
    );
  }
}

export default App;
