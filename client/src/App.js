import React, { Component } from 'react';

import Question from './components/Question';
import QuizQuestions from './data/QuizQuestions';

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

  componentWillMount() {
    const shuffledOptions = quizQuestions.map((question)=> this.shuffleArray(question.answers));

    this.setState({
      question: QuizQuestions[0].question,
      answerOptions: shuffledOptions[0]
    });
  }

  shuffleArray(array) {
    let currentIndex = array.length, tempValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  };

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
