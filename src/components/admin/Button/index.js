import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='bg-primary_blue h-10 text-sm text-white px-5 rounded-lg truncate'>
      {children}
    </button>
  );
};

export default Button;
