import React, { Component } from 'react';

import Question from './components/Question';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <h2>
            Sorting Hat
          </h2>
        </div>
        <Question content=':)'/>
      </div>
    );
  }
}

export default App;
