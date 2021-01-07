import { useState, useCallback } from 'react';

function useDisclosure() {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen(state => !state), []);

  return {
    open,
    close,
    isOpen,
    toggle,
  };
}

export default useDisclosure;
