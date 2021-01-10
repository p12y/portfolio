import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FocusOn } from 'react-focus-on';
import { Transition } from 'react-spring/renderprops.cjs';
import useCloseDialog from 'hooks/useCloseDialog';

const DialogBackground = styled.div`
  backdrop-filter: blur(3px);
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  height: 100%
  justify-content: center;
  left: 0;
  position: fixed;
  webkit-tap-highlight-color: transparent;
  top: 0;
  touch-action: none;
  transition: 0.5s;
  width: 100%;
  z-index: 3;
`;

const DialogContainer = styled.div`
  background: ${({ theme }) => theme.dialog.background};
  border-radius: 4px;
  max-width: 30rem;
  padding: 1rem;
`;

const DialogTitle = styled.div`
  text-align: center;
`;

function Dialog({ open, title, content, onClose }) {
  useCloseDialog({ open, onClose });

  return ReactDOM.createPortal(
    <Transition
      config={{ duration: 100 }}
      items={open}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {open =>
        open &&
        (props => (
          <FocusOn onClickOutside={onClose} onEscapeKey={onClose} shards={[]}>
            <DialogBackground onClick={onClose} style={props}>
              <DialogContainer onClick={e => e.stopPropagation()}>
                <DialogTitle>{title}</DialogTitle>
                <div>{content}</div>
              </DialogContainer>
            </DialogBackground>
          </FocusOn>
        ))
      }
    </Transition>,
    document.body,
  );
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
