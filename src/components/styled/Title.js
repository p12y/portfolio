import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  -webkit-box-shadow: inset 0 -6px 0 rgba(246,43,84, 1);
  box-shadow: inset 0 -6px 0 rgba(246,43,84, 1);
  display: inline-block;
`;

export default Title;