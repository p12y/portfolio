import { useEffect } from 'react';

function useCloseDialog({ open, onClose }) {
  useEffect(() => {
    const keyupListener = e => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keyup', keyupListener);
    } else {
      document.removeEventListener('keyup', keyupListener);
    }

    return () => document.removeEventListener('keyup', keyupListener);
  }, [open, onClose]);
}

export default useCloseDialog;
