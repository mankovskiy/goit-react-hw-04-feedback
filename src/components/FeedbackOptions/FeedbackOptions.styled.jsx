import styled from 'styled-components';

export const OptionsButton = styled.button`
  /* display: flex; */
  /* margin-right: 4px; */
  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.muted};

  cursor: pointer;
`;
