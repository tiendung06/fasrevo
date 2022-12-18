import React from 'react';

const Checkbox = ({ label, name, values, ...props }) => {
  return (
    <div className="flex items-center pb-3">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-border_input rounded-sm bg-white checked:bg-primary_red checked:border-primary_red focus:outline-none transition duration-200 mr-2 cursor-pointer"
        type="checkbox"
        id={name}
        value={values}
        {...props}
      />
      <label htmlFor={name} className={'text-sm font-medium'}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
