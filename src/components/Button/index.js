import React from 'react';

const Button = ({
  type = 'text',
  children,
  bgWhite,
  fullWidth = true,
  loading = false,
}) => {
  return (
    <button
      type={type}
      className={`${fullWidth ? 'w-full' : ''} h-10 ${
        bgWhite ? 'bg-white text-black' : 'bg-primary text-white'
      } text-center text-sm md:text-base font-bold px-5 cursor-pointer`}
    >
      {loading ? (
        <div
          className={`w-5 h-5 rounded-full border-2 ${
            bgWhite ? 'border-primary' : 'border-white'
          } border-t-transparent border-t-2 mx-auto animate-spin`}
        ></div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
