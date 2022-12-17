import React from 'react';

const Select = ({ label, name, children, defaultValue, onChange }) => {
  return (
    <div className='w-full mb-5'>
      <label htmlFor={name} className='text-sm font-medium'>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className='w-full h-10 px-5 block text-sm text-secondary_text outline-none border border-border_input'
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
