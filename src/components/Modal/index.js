import React from 'react';

const Modal = ({ title, id, aria_Labeledby, children }) => {
  return (
    <div
      className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
      id={id}
      tabIndex='-1'
      aria-labelledby={aria_Labeledby}
      aria-hidden='true'
    >
      <div className='modal-dialog relative w-auto pointer-events-none'>
        <div className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md'>
          <div className='modal-header flex flex-shrink-0 items-center justify-between p-5 border-b border-border_input rounded-t-md'>
            <h5
              className='text-base font-medium text-primary'
              id={aria_Labeledby}
            >
              {title}
            </h5>
            <button
              type='button'
              className='btn-close box-content w-4 h-4 text-primary border-none opacity-50'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body relative p-5'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
