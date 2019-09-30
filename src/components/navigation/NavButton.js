import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ink from 'react-ink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationButtonBase from 'components/styled/NavigationButtonBase';

const HoverCircle = styled.div`
  cursor: pointer;
  position: relative;
  transition: background-color 0.1s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  &:hover {
    background: ${props => props.theme.nav.hoverCircle};
  }
`;

const IconButton = styled(NavigationButtonBase)`
  font-size: 1.5rem;
  background: ${props => props.theme.nav.background};
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.nav.icon};
`;

function NavButton({ icon, onClick }) {
  return (
    <IconButton onClick={onClick}>
      <HoverCircle>
        <Ink />
        <FontAwesomeIcon icon={icon} />
      </HoverCircle>
    </IconButton>
  );
}

NavButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
