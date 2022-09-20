import { Title } from './Section.styled';
import { Box } from 'components/Box/Box';

export const Section = ({ title, children }) => {
  return (
    <Box as="section">
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};
