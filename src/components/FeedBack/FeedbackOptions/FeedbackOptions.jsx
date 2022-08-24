import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div id="FeedBackControls" className={s.controls}>
    {Object.keys(options).map(key => (
      <button
        onClick={onLeaveFeedback}
        id={key}
        type="submit"
        className={s.feedbackButton}
        key={key}
      >
        {key}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
export default FeedbackOptions;
