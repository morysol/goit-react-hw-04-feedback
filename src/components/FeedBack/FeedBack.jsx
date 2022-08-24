import React, { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    // console.log(e.target.classList.value);
    // console.log(e.target.id);
    // console.dir(e.target);
    // const pressedButton = e.target.classList.value;
    const pressedButton = e.target.id;
    switch (pressedButton) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / countTotalFeedback();
  };

  return (
    <div>
      <Section title="Please, leave your feedback!">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Math.round(countPositiveFeedbackPercentage())}
          ></Statistics>
        ) : (
          <Notification>There is no feedback yet!</Notification>
        )}
      </Section>
    </div>
  );
};

export default Feedback;
