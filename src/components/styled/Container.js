import styled from 'styled-components';
import media from 'styles/media';

const Container = styled.div`
  margin: 0 5rem 5rem 5rem;
  ${media.phone`
  margin: 0 1rem 5rem 1rem;
  `}
  @media (min-width: 2500px) {
    margin-left: 500px;
    margin-right: 500px;
  }
`;

export default Container;