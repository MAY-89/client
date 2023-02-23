import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup = ({ isOpen, onClose, children }: PopupProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <button className="close-button" onClick={onClose} style={{marginRight:'5px'}}>
            X
          </button>
        </div>
        <div className="popup-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Popup;