import React from 'react';
import './Modal.css';


function Modal({ open, containerClassName, children }){
    return <div className={'modal-container'} style={{ display: open ? 'block': 'none' }}>
        <div className="modal">
            {children}
        </div>
    </div>
}

export default Modal;