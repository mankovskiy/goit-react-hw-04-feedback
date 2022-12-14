import { OptionsButton } from './FeedbackOptions.styled';

// import { Box } from '../Box/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <OptionsButton
        type="button"
        key={option}
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </OptionsButton>
    );
  });
};
