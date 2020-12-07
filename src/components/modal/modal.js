import React from 'react';
import { createPortal } from 'react-dom';

import './modal.css';

const Modal = ({open, close, children}) => {
    if (!open) return null
    return createPortal(
        <>
            <div 
            onClick={close}
            className='overlays'/>
            <div className='modal-container'>
                <i 
                onClick={close}
                className="material-icons md-48 closing"
                >
                    close
                </i>
                
                    {children}
                
            </div>
        </>, document.getElementById('modal')
    )
}

export default Modal;