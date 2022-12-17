import React from 'react';

const Button = ({ type = 'text', children, onClick }) => {
  return (
    <button
      type={type}
      className='bg-primary_blue h-10 text-sm block text-white px-5 rounded-lg truncate'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
