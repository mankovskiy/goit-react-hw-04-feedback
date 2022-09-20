import { OptionsButton } from './FeedbackOptions.styled';

// import { Box } from '../Box/Box';

export const FeedbackOptions = props => {
  return props.options.map(option => {
    return (
      <OptionsButton
        type="button"
        key={option}
        name={option}
        onClick={props.onLeaveFeedback}
      >
        {option}
      </OptionsButton>
    );
  });
};
