import React from 'react';

const Modal = ({ isOpen, children }) => {
    React.useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);

    if (!isOpen) return null; // this line of code is what controls the visibility

    return (
        <div className='wrapperDiv col-6 col-m-9'>
            {children}
        </div>
    )
};

export default Modal;