import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FindOutMore = styled.div`
  align-items: center;
  color: ${props => props.theme.titleColor};
  display: flex;
  font-family: 'Open Sans', sans-serif;
  height: 100px;
  justify-content: center;
  text-align: center;
`;

function DownArrow({ visible }) {
  const arrowProps = useSpring({ opacity: visible ? 1 : 0 });
  return (
    <FindOutMore>
      <animated.div
        data-testid="down-arrow"
        style={{ ...arrowProps, fontSize: '2em' }}
      >
        <FontAwesomeIcon icon="level-down-alt" />
      </animated.div>
    </FindOutMore>
  );
}

export default DownArrow;
