// import { Component } from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Box } from './Box/Box';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error(`Unknows fidback name - ${name}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  // const { good, neutral, bad } = this.state;

  const total = countTotalFeedback();

  return (
    <Box as="div" p={20} display="inline-block" bg="#f6f6f6">
      <Section title={'Please leave feedback'}>
        <Box as="div" display="Flex" justifyContent="center" gridGap={4}>
          <FeedbackOptions options={option} onLeaveFeedback={onLeaveFeedback} />
        </Box>
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}
