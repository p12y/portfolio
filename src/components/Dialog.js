import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';
import useCloseDialog from 'hooks/useCloseDialog';

const DialogBackground = styled.div`
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

  return (
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
          <DialogBackground onClick={onClose} style={props}>
            <DialogContainer onClick={e => e.stopPropagation()}>
              <DialogTitle>{title}</DialogTitle>
              <div>{content}</div>
            </DialogContainer>
          </DialogBackground>
        ))
      }
    </Transition>
  );
}

export default Dialog;
