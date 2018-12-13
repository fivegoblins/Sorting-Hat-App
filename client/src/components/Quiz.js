import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';

import Question from './Question';
import Count from './Count';
import Option from './Option';

function Quiz(props) {

    function renderAnswerOptions(key) {
        return (
            <Option 
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelect={props.onAnswerSelect}
            />
        );
    }

    return (
        <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div className='quiz' key={props.questionId}>
                <Count 
                    counter={props.questionId}
                    total={props.questionTotal}
                />
                <Question content={props.question}/>
                <ul className='answer-options'>
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
        </CSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelect: PropTypes.func.isRequired
}

export default Quiz;