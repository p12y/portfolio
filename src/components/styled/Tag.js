import styled from 'styled-components';

const Tag = styled.span`
  background-color: ${props => props.background || '#f5f5f5'};
  border-radius: 4px;
  color: ${props => props.color || 'black'};
  display: inline-flex;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  white-space: nowrap;
`;

export default Tag;