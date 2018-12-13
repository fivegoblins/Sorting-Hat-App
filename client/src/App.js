import React, { Component } from 'react';

import Quiz from './components/Quiz';
import Result from './components/Result';
import quizQuestions from './data/quizQuestions';

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

    this.handleAnswerSelect = this.handleAnswerSelect.bind(this);
  }

  componentWillMount() {
    const shuffledOptions = quizQuestions.map((question)=> this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
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

  setAnswer(answer) {
    this.setState((state)=> ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer
    }));
  };

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  };

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key)=> answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountValues.filter((key)=> answersCount[key] === maxAnswerCount);
  };

  setResults(result) {
    if (result.length === 1) {
      this.setState({result: result[0]});
    } else {
      this.setState({result: 'I was unable to sort you. You might be a Muggle.'});
    }
  };

  handleAnswerSelect(event) {
    this.setAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(()=> this.setNextQuestion(), 300);
    } else {
      setTimeout(()=> this.setResults(this.getResults()), 300);
    }
  };

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelect={this.handleAnswerSelect}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result}/>
    );
  }

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <h2>
            Sorting Hat
          </h2>
        </div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
