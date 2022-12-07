import React from 'react';

const Input = ({
  type,
  name,
  placeholder,
  value,
  touched,
  error,
  onChange,
  ...props
}) => {
  return (
    <div className='w-full my-5'>
      <input
        type={type}
        name={name}
        className='bg-transparent w-full h-10 px-5 outline-none border border-border_input text-sm text-secondary_text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
      {touched && error ? (
        <div className='text-sm text-red-500'>{error}</div>
      ) : null}
    </div>
  );
};

export default Input;
