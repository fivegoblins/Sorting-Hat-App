import React from 'react';
import PropTypes from 'prop-types';

function Option(props) {
    return (
        <li className='answer-option'>
            <input
                className='radio-button'
                type='radio'
                name='radio'
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelect}
            />
            <label className='radio-label' htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

Option.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelect: PropTypes.func.isRequired
}

export default Option;