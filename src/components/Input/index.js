import React from 'react';

const Input = ({
  type,
  name,
  label,
  placeholder,
  value,
  touched,
  error,
  onChange,
  ...props
}) => {
  return (
    <div className='w-full mb-5'>
      <label htmlFor={name} className='text-sm font-medium'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`bg-transparent w-full h-10 px-5 block outline-none border ${
          touched && error ? 'border-secondary_red' : 'border-border_input'
        } text-sm text-secondary_text`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
      {touched && error ? (
        <div className='text-sm text-secondary_red'>{error}</div>
      ) : null}
    </div>
  );
};

export default Input;
