import React, { Component } from 'react';

import Question from './components/Question';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        slytherin: 0,
        gryffindor: 0,
        hufflepuff: 0,
        ravenclaw: 0
      },
      result: ''
    };
  }
  
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
