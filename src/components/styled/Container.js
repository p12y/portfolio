import styled from 'styled-components';
import media from 'styles/media';

const Container = styled.div`
  margin: 0 5rem 5rem 5rem;
  ${media.phone`
  margin: 0 1rem 5rem 1rem;
  `}
`;

export default Container;