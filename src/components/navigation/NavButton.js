import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ink from 'react-ink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationButtonBase from 'components/styled/NavigationButtonBase';

const IconButton = styled(NavigationButtonBase)`
  align-items: center;
  background: ${props => props.theme.nav.background};
  border-radius: 50%;
  color: ${props => props.theme.nav.icon};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 3.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  position: relative;
  transition: background-color 0.1s ease;
  width: 3.5rem;
  &:hover,
  &:focus {
    background: ${props => props.theme.nav.hoverCircle};
  }
`;

function NavButton({ icon, onClick, ariaLabel }) {
  return (
    <IconButton onClick={onClick} aria-label={ariaLabel}>
      <Ink />
      <FontAwesomeIcon icon={icon} />
    </IconButton>
  );
}

NavButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
