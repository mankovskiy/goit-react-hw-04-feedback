import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: 1.5em;

  text-align: center;
  margin-top: 10px;
  color: ${p => p.theme.colors.text};
`;
