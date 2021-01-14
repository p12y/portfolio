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
  height: 3rem;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  position: relative;
  transition: color 0.5s ease, background-color 0.5s ease, box-shadow 0.25s;
  width: 3rem;
  box-shadow: 0 0 0 0 transparent;
  &:after {
    content: '';
    display: block;
    width: 100%;
    background: black;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.1s ease;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 0.1;
    }
  }
  &:focus {
    box-shadow: 0 0 0 3px var(--secondary);
  }
`;

const ButtonInner = styled.span`
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  z-index: 1;
`;

function NavButton({ icon, onClick, ariaLabel }) {
  return (
    <IconButton onClick={onClick} aria-label={ariaLabel}>
      <ButtonInner>
        <Ink />
        <FontAwesomeIcon icon={icon} />
      </ButtonInner>
    </IconButton>
  );
}

NavButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
