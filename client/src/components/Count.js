import React from 'react';
import PropTypes from 'prop-types';

function Count(props) {
    return (
        <div className='question-count'>
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
}

Count.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default Count;